export type Action = {type:"ADD_USER", payload:string}

export const addUser = (Users:string):Action => ({
    type: "ADD_USER",
    payload: Users,
});