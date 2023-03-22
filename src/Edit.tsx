import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

import { UsersType } from './UserType';

import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';
import Formikk from './Formikk';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';
import * as Yup from 'yup';
    
const usersFromLocalStorage = JSON.parse(localStorage.getItem("users") || "[]")

const EditForm = () =>{     
    const [show, setShow] = useState(false);
    const [goster, setGoster] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  const [users,setUsers]=useState<UsersType[]>([usersFromLocalStorage]);

    const [name, setName] = useState(usersFromLocalStorage.name);
    const [surname, setSurname] = useState(usersFromLocalStorage.surname);
    const [number, setNumber] = useState(usersFromLocalStorage.number);
    const [country, setCountry] = useState(usersFromLocalStorage.country);

    
        return (
            <div className="container">
            <Button variant="primary" onClick={handleShow}>
            Kişi eklemek için tıklayın !
          </Button>
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Kişi Ekle</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Formik
                initialValues={{
                  id: uuidv4(),
                  name: '',
                  surname: '',
                  number: '',
                  country: ''
                }}
                
                validationSchema={Yup.object({
                  name: Yup.string().required('İsim boş bırakılamaz'),
                  surname: Yup.string().required('Soyisim boş bırakılamaz'),
                  number: Yup.string().required('Numara boş bırakılamaz'),
                  country: Yup.string().required('Ülke boş bırakılamaz'),
                })}
                
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                    /*alert(JSON.stringify(values, null, 2));*/
                    resetForm();
                  }, 500);
                  return setUsers((users: UsersType[]) => [...users,values])
    
    
                }}
              >
                
                {({
                  values,
                  touched,
                  errors,
                  dirty,
                  isSubmitting,
                  handleSubmit,
                  handleReset,
                  handleChange,
                }) => (
                
                    <form className="magic-form" onSubmit={handleSubmit}>
                        <h3>Kaydol</h3>
                  
                    <label htmlFor="name">İsim</label>
    
    
                    <input
                      id="name"
                      type="text"
                      placeholder="Rıdvan"
                      className="input"
                      value={name}
                      onChange={(e)=>handleChange("name")(e.target.value)}
                    />
                    {errors.name && touched.name && (
                      <div className="input-feedback">{errors.name}</div>
                    )}
    
                    <label htmlFor="surname">Soyisim</label>
                    <input
                      id="surname"
                      type="text"
                      placeholder="Aydın"
                      className="input"
                      value={surname}
                      onChange={(e)=>handleChange("surname")(e.target.value)}
                    />
                    {errors.surname && touched.surname && (
                      <div className="input-feedback">{errors.surname}</div>
                    )}
    
                    <label htmlFor="number">Numara</label>
                    <input
                      id="number"
                      type="text"
                      placeholder="0543 864 2326"
                      className="input"
                      value={number}
                      onChange={(e)=>handleChange("number")(e.target.value)}
                    />
                    {errors.number && touched.number && (
                      <div className="input-feedback">{errors.number}</div>
                    )}
    
                    <label htmlFor="country">Ülke</label>
                    <input
                      id="country"
                      type="text"
                      placeholder="TR"
                      className="input"
                      value={country}
                      onChange={(e)=>handleChange("country")(e.target.value)}
                    />
                    {errors.country && touched.country && (
                      <div className="input-feedback">{errors.country}</div>
                    )}
      
                    <button type="submit" onClick={handleClose} disabled={!dirty || isSubmitting} >
                      Kaydol
                    </button>
                  </form>           
                )}       
              </Formik>  
            
           
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Kapat
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        )
        }
        

export default EditForm;