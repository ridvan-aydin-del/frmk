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
import Edit from './Edit';

const usersFromLocalStorage = JSON.parse(localStorage.getItem("users") || "[]")

const Formikk = () => {



  const [show, setShow] = useState(false);
  const [goster, setGoster] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [users,setUsers]=useState<UsersType[]>([usersFromLocalStorage]);
  
  useEffect(() =>{
    const data = localStorage.getItem("users")
    if ( data !== null)setUsers(JSON.parse(data || "[]"))
  },[])

  useEffect(() =>{
    localStorage.setItem("users",JSON.stringify(users))
  })
  
  const handleDelete = (id: string) => {
    setUsers((users: UsersType[]) => users.filter((user) => user.id !== id))
  }
  
  
    return (
      <div className="container">

  
        <div className="magic-form">


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
                  value={values.name}
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
                  value={values.surname}
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
                  value={values.number}
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
                  value={values.country}
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





           
          <Table>
                  <thead>
                    <tr>
                      <th>AD</th>
                      <th>SOYAD</th>
                      <th>NUMARA</th>
                      <th>ÜLKE</th>
                      <th>DELETE</th>
                      <th>EDIT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((x,i)=>
                      <tr>
                        <td>{x.name}</td>
                        <td>{x.surname}</td>
                        <td>{x.number}</td>
                        <td>{x.country}</td>
                        <td><button onClick={() => handleDelete(x.id)}>Delete</button></td>
                        <td><button><Link to={`/Edit/${x.id}`}>Edit</Link></button></td>
                      </tr>
                    )}    
                  </tbody>         
          </Table>  
        </div>
      </div>
    );
  };

  export default Formikk;