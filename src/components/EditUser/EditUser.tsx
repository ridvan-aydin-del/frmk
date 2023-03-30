import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { editUser as updateUser } from "../../redux/user";
import { UserInterface } from "../../App";

type EditUserProps = {
  editUser: UserInterface;
  setEditUser: (editUser: UserInterface) => void;
};


const EditUser = ({ editUser }: EditUserProps) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState("");
    const [error, setError] = useState("");
  
    useEffect(() => {
        setUser(editUser.name);
    }, [editUser]);
  
    const handleEditUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
        dispatch(updateUser({ editedTodo: { ...editUser, user } }));
        setUser("");
    };
  
    const handleUpdateUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);

    };
  
    console.log(editUser);
    return (
      <form onSubmit={handleEditUserSubmit}>
        <div>
          <input
            onChange={handleUpdateUserChange}
            value={user}
            type="text"
            placeholder="Edit todo..."
          />
          {error && <p>{error}</p>}
        </div>
        <button>Edit User</button>
      </form>
    );
  };
  
  export default EditUser;