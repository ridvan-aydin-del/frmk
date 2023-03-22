import { useSelector } from "react-redux"
import { Action } from "./action"
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
  
  {/* const Users = useSelector(selectUser)   */} 


export const usersReducer = (state:UserState = initialState, action: Action) => {
    
    switch(action.type){
        case "ADD_USER": {
            return {...state, UsersType:[...state.Users,action.payload]}
        }

        default:
            return state
    }
}