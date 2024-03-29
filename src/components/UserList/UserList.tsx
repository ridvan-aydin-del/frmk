import React from "react";
import UserItem from "./UserItem/UserItem";
import { UserInterface } from "../../App";

type UserListProps = {
  users: UserInterface[];
  getEditUser: (editUser: UserInterface) => void;
  setEditUser: (editUser: UserInterface) => void;
  editUser: UserInterface | null;
};

const UserList = ({
  users,
  editUser,
  getEditUser,
  setEditUser,
}: UserListProps) => {
  return (
    <ul>
      {users
        .map((user) => (
          <UserItem
            key={user.id}
            user={user}
            editUser={editUser}
            getEditUser={getEditUser}
            setEditUser={setEditUser}
          />
        ))}
    </ul>
  );
};

export default UserList;