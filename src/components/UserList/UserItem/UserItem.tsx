import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/user";
import { UserInterface } from "../../../App";

type UserItemProps = {
  user: UserInterface;
  editUser: UserInterface | null;
  getEditUser: (editUser: UserInterface) => void;
  setEditUser: (editUser: UserInterface) => void;
};

const UserItem = ({
  user,
  editUser,
  getEditUser,
  setEditUser,
}: UserItemProps) => {
  const dispatch = useDispatch();


  const handleDeleteUserClick = () => {
    dispatch(deleteUser({ userId: user.id }));
    if (user.id === editUser?.id) {
      setEditUser({ id: "", name: "", surname: "", number: "", country: "" });
    }
  };

  const handleGetEditUserClick = () => getEditUser(user);


  return (
    <li>
      <label
        htmlFor={user.id}

      >

        {user.name}
      </label>
      <div>
        <button 
            onClick={handleGetEditUserClick}>
            <MdModeEditOutline />
        </button>
        <button
          onClick={handleDeleteUserClick}
        >
        <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default UserItem;