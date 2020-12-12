import React from 'react'
import { connect } from 'react-redux'
import s from './Header.module.css'
import HeaderFormRedux from './HeaderForm'
import {addUsers, setUsers, getUsersThunk, setUsersThunk} from './reducerHeader'
import {NavLink, Route} from 'react-router-dom'
import HeaderFormReduxSigin from './HeaderFormSigin'
import {Name} from './../Header/reducerStateName'






class Header extends React.Component{

    state = {
        login: ''
    }

    componentDidMount(){

        this.props.getUsersThunk()

        
    }

    submitRegistr (text) {

        this.props.setUsersThunk(text)

        

        
        // Локальная регистрация
        this.props.addUsers(text.login, text.pass)

        text.login=''
        text.pass=''

    }

    submitSigin (text) {
        let login = this.props.users.map(user=>user.login)
        let pass = this.props.users.map(user=>user.pass)
        for(let i=0;i<login.length;i++){
            if(text.login===login[i] && text.pass === pass[i]){
                this.setState({login: text.login})
                this.props.Name(text.login)
                
            }
        }
        
    }
    Exit =()=>{
        this.setState({login: ''})
    }


    render(){
        

        
    return (
        <div className={s.header}>
            <h1>Welcom to chat {this.state.login}</h1>
            {!this.state.login && 
            <div>
            <NavLink to={'/reg'} className={s.link}>Register</NavLink>
            <span> </span>
            
            <NavLink to={'/sigin'} className={s.link}>Sigin</NavLink>
            <Route exact path='/reg' render={()=><HeaderFormRedux onSubmit={this.submitRegistr.bind(this)}/>} />
            <Route exact path='/sigin' render={()=><HeaderFormReduxSigin onSubmit={this.submitSigin.bind(this)}/>} />
            </div>
    }
    {this.state.login && 
        <div>
            <button onClick={this.Exit}>Exit</button>
        </div>
    }
        </div>
    )}
}



const mapStateToProps = (state) =>({
    users: state.reducerHeader.users
})

const HeaderContainer = connect (mapStateToProps, {addUsers, Name, setUsers, getUsersThunk, setUsersThunk}) (Header)


export default HeaderContainer