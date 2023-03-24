import { Form, Button } from 'react-bootstrap'
import  Formikk  from './Formikk'
import { useContext } from 'react'

const EditForm = () => {

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                    type='text'
                    name='name'
                    placeholder='İsim'
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                    type='text'
                    name='surname'
                    placeholder='Soyisim'
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type='text' 
                    name='number'
                    placeholder='Numara'
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type='text' 
                    name='country'
                    placeholder='Ülke'
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Kaydet
            </Button>
        </Form>

    )
}
export default EditForm;