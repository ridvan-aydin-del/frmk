export type Action = {type:"REMOVE_USER", payload:string}

export const removeUser = (Users:string):Action => ({
    type: "REMOVE_USER",
    payload: Users,
});