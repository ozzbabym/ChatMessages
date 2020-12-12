import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './Header.module.css'

const HeaderForm = (props) =>{

    return(
        <form onSubmit={props.handleSubmit}>
            <div >
                <div className={s.form}>
                    <Field placeholder={'login'} name={'login'} component={'input'} />
                </div>
                <div className={s.form}>
                    <Field placeholder={'password'} name={'pass'} component={'input'} type={'password'}/>
                </div>
            </div>
            <span>
                <button className={s.button}>Регистрация</button>
                
            </span>
        </form>
    )
}

const HeaderFormRedux = reduxForm({form: 'header'})(HeaderForm)

export default HeaderFormRedux