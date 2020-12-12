import axios from "axios"

let ADD_USERS = 'ADD_USERS'
let SET_USERS = 'SET_USERS'

const initialState = {
    users:[
    // {id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},{id: 1, login: 'gerg', pass: '123'},
    
    ]
}


export const reducerHeader = (state = initialState, action) => {
    
    switch (action.type){
        case ADD_USERS: {

            let login = state.users.map(login=>login.login)
            
            for (let i=0; i<login.length; i++){
                
                if(action.login===login[i]){
                    
                    return state
                }
            }

            if (action.pass.length<6) {
                return state
            }
            

            let newUsers={
                _id: 3,
                login: action.login,
                pass: action.pass,
                isAuth: false
                
            }

            return {...state, users: [...state.users, newUsers]}
        }

        case SET_USERS:{
            return {...state, users: [...state.users, action.usersServ]}
        }

        default:
            return state
    }
}

export const addUsers = (login , pass) =>({type: ADD_USERS, login, pass })
export const setUsers = (usersServ)=> ({type: SET_USERS , usersServ})

export const getUsersThunk=()=>{
    return (dispatch)=>{
        axios.get('https://chatmessages.herokuapp.com/api/users').then(user=>{
            let users = user.data
            for(let i=0; i<users.length;i++){
                
                dispatch(setUsers(users[i]))
            }
            
        })
    }
}

export const setUsersThunk =(text)=>{
    return(dispatch)=>{
        let users = {login: text.login, pass: text.pass, isAuth: false}
        axios.post('https://chatmessages.herokuapp.com/api/users', users)
    }
}
