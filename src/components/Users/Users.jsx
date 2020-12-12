import React from 'react'
import { connect } from 'react-redux'
import s from './Users.module.css'


class Users extends React.Component{

    


    render(){
        
    let Users = this.props.users.users.map(user=><div key={user._id}>{user.login}</div>)
    return(
        <div >
            Users:
                <div className={s.chat}>
                    {Users}
                </div>
        </div>
    )
}
}

const mapStateToProps =(state)=>(
    {
        users: state.reducerHeader
    }
)


export default connect (mapStateToProps, {}) (Users)