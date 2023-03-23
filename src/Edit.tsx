import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';
import { UsersType } from './UserType';


const usersFromLocalStorage = JSON.parse(localStorage.getItem("users") || "[]")

const Edit = () => {

    return (
      <div>asdasdasdasdsadasds</div>
    );
  };

export default Edit;