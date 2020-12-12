
const ADD_FROM_SERVER = 'ADD_FROM_SERVER'
const ADD_MESSAGE = "ADD_MESSAGE"
const SET_MESSAGE='SET_MESSAGE'

const initialState = {
    message: [
        // {id: 1, name: 'Ivan', message: 'Hello world' },
        // {id: 2, name: 'Ivan', message: 'yo' },
        
    ]
    
}



export const MessageReducer = (state = initialState, action )=>{
    
    switch (action.type){
        case ADD_MESSAGE:
            let text ={
                id:3,
                name: action.name,
                message: action.newText
            }


            return {...state, message: [...state.message, text]}
        case SET_MESSAGE:{

            return{...state, message: [...state.message, action.newMessage]}
        }

        case ADD_FROM_SERVER:{
            return {...state, message: [...state.message]}
        }


        default:
            return state
        }
}

export const addMessage=(newText, name)=>({type: ADD_MESSAGE, newText, name})
export const addFromServer=()=>({type: ADD_FROM_SERVER})
export const setMessages = (newMessage)=>({type: SET_MESSAGE, newMessage})


