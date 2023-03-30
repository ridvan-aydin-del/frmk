import {createSlice} from "@reduxjs/toolkit";
import {UserInterface} from "../App";

interface UsersListInterface {
    users: UserInterface[]
}

const initialState: UsersListInterface = {
    users: []
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, {payload: {id,name, surname, number, country}})=>{       
            state.users.push({id,name, surname, number, country})
        },
        deleteUser: (state, {payload: {userId}})=>{
            state.users = state.users.filter(user=> user.id !== userId)
        },
        editUser: (state, {payload: {editedUser}})=>{
            console.log(editedUser)
            state.users = state.users.map(user => user.id === editedUser.id ? editedUser : user);
        },

    }
})

export const {addUser, deleteUser, editUser} = userSlice.actions;

export default userSlice.reducer;