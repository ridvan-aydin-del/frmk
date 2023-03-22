export type Action = {type:"ADD_USER", payload:string}
export type Action2 = {type:"REMOVE_USER", payload:string}

export const addUser = (Users:string):Action => ({
    type: "ADD_USER",
    payload: Users, 
});
export const removeUser = (Users:string):Action2 => ({
    type: "REMOVE_USER",
    payload: Users,
});