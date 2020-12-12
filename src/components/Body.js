import React from 'react'
import { connect } from 'react-redux'


import s from './Body.module.css'
import { addMessage, setMessages } from './chatReducer'

import MessageForm1 from './Message/messageForm'

import Users from './Users/Users'
import WindowChat from './windowChat/windowChat'
import axios from 'axios'


class Body extends React.Component{
    
    componentDidMount(){
        
        axios.get('https://chatmessages.herokuapp.com/api/messages').then(mess=>{
            let message = mess.data
            for(let i=0; i<message.length;i++){
                
                this.props.setMessages(message[i])
            }
        })
        
    }




    message(text){
        let message = {name: this.props.user , message: text.messageText}
        axios.post('https://chatmessages.herokuapp.com/api/messages', message)
        
        this.props.addMessage(text.messageText, this.props.user)
        
        text.messageText = ''
        
    }
    componentDidUpdate(){

    }

    render(){
        
    return(
        
        <div className={s.body}>
            <div className={s.chat}>
                <WindowChat messageName={this.props.message} />
            </div>
            <div className={s.people}>
                <Users />
            </div>
            <div className={s.mess}>
               <MessageForm1 onSubmit={this.message.bind(this)} />
                
            </div>
        </div>

    )}
}





const mapStateToProps=(state)=>({
    
    message: state.MessageReducer.message,
    user: state.reducerStateName.name
})




export const BodyContainer = connect(mapStateToProps, {addMessage, setMessages})(Body)

