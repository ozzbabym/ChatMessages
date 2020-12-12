import React from 'react'
import s from './windowChat.module.css'
import $ from 'jquery'


class WindowChat extends React.Component{
    
   

    render(){
        
        $(document).ready(function() {
            $('div').scrollTop(100000000000000000000);
        })

    return(
        <div id='chat'>
        <div  className={s.chat} >
            
            {this.props.messageName.map(u=><div key={u.id}><span>{u.name + ': '}</span><span>{u.message}</span></div>)}
            
            
        </div>
        </div>
    )}
}


export default WindowChat