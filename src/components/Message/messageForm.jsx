import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from '../Body.module.css'

const MessageForm =(props)=>{


    
    

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <span>
                    <Field placeholder={"Enter your message"} className={s.input} name={"messageText"} component={"input"}/>
                </span>
                <span>
                    <button className={s.button}>SEND</button>
                </span>
            </div>
        </form>
    )
}

const MessageForm1 = reduxForm({form: 'message'}) (MessageForm)

export default MessageForm1