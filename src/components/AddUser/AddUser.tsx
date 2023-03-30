import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "../../redux/user";

const AddUser = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [error, setError] = useState("");


  const handleAddUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      dispatch(addUser({ user, id: uuidv4()}));
      setUser("");
  };


  const handleUpdateUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  return (
    <form onSubmit={handleAddUserSubmit} >
      <div>
        <input
          onChange={handleUpdateUserChange}
          value={user}
          type="text"
          placeholder="Add user..."
        />
        {error && <p>{error}</p>}
      </div>
      <button>Add User</button>
    </form>
  );
};

export default AddUser;