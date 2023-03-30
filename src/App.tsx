import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './App.css';
import Formikk from './Formikk';
import {useState} from 'react';
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import AddUser from "./components/AddUser/AddUser";
import EditUser from "./components/EditUser/EditUser";

export interface UserInterface {
  id: string;
  name: string;
  surname: string;
  number: string;
  country: string;
}

const App = () => {

  const users = useSelector((state: RootState) => state.users.users);
  const [editUser, setEditUser] = useState<UserInterface | null>(null);
  const [userFilterValue, setUserFilterValue] = useState("all");
  const getEditUser = (editUser: UserInterface) => setEditUser(editUser);

  return (
    <main>
      <div>
        <div>
          <h1>User App</h1>
        </div>
        <div>
          {editUser?.id ? (
            <EditUser editUser={editUser} setEditUser={setEditUser} />
          ) : (
            <AddUser />
          )}
        </div>
        <TodoList
          todos={todos}
          todoFilterValue={todoFilterValue}
          getEditTodo={getEditTodo}
          setEditTodo={setEditTodo}
          editTodo={editTodo}
        />
      </div>
    </main>
  );
};

export default App;