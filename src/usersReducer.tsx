import { useSelector } from "react-redux"
import { Action } from "./action"
import { Action2 } from "./action"
import { UsersType } from "./UserType"
import { v4 as uuidv4 } from 'uuid';

export interface UserState{
    Users: UsersType[]
}
const initialState: UserState = {
    Users:[{
        id:uuidv4(),
        name:"Rıdvan",
        surname:"Aydın",
        number:"123",
        country:"TR"
    },{
        id:uuidv4(),
        name:"Ali",
        surname:"Aydın",
        number:"321",
        country:"TR"
    }]
}

  const selectUser = (state: UserState) => state.Users
  


export const usersReducer = (state:UserState = initialState, action: Action) => {
    
    switch(action.type){
        case "ADD_USER": {
            return {...state, UsersType:[...state.Users,action.payload]}
        }

        default:
            return state
    }
}
export const usersReducer2 = (state:UserState = initialState, action: Action2) => {
        
        switch(action.type){
            case "REMOVE_USER": {
                return {...state, UsersType:state.Users.filter((user)=>user.id !== action.payload)}
            }
            default:
                return state
        }
    }



