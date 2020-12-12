

const NAME = 'NAME'

let initialState={
    name: 'Unknow'
}


export const reducerStateName=(state = initialState, action)=>{
    switch(action.type){
        case NAME:{
            return {...state, name: action.name}
        }
        default:
            return state
    }
}

export const Name=(name)=>({type: NAME, name})
