////Step 2:
import { FC, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Action, Contact } from './contactReducer';

//step 5 create a dispatch in the Contact Form and use it before FC
//So the below line will indicate that the ContactForm component will receive a prop with the name dispatch whose type is React.Dispatch<Action>.
interface ContactFormProps{
    dispatch: React.Dispatch<Action>,
    dataToEdit:Contact | undefined,
    toggleModal:()=>void,
}

export const ContactForm: FC<ContactFormProps> = ({dispatch,dataToEdit,toggleModal}) => { //use inline destructuring
    // const {dispatch} = props; using props
  const [contact, setContact] = useState({
    firstName: dataToEdit?.firstName ? dataToEdit.firstName : '',
    lastName: dataToEdit?.lastName ? dataToEdit.lastName : '',
    phone: dataToEdit?.phone ? dataToEdit.phone : ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {firstName,lastName,phone} = contact;

    if(
        firstName.trim() === '' ||
        lastName.trim() === '' ||
        phone.trim() === ''
    ){
        setErrorMsg('All the fields are required.');
        return;
    }else if(!phone.trim().match(/^\d{10}$/g)){
        setErrorMsg('Please enter a valid 10 digit phone number.');
        return;
    }

    //step 5
    // Here, we’re passing the contact state value as a payload property to the contactsReducer.
    if(!dataToEdit){
        dispatch({
            type:"ADD_CONTACT",
            payload:{
                id:Date.now(),// returns current timestamp step 7
                ...contact
            }
        })
        setContact({
            firstName: '',
            lastName: '',
            phone: ''
          });
          setErrorMsg("");
    }else{
         // dispatch edit contact action
         dispatch({
            type: 'UPDATE_CONTACT',
            payload: {
              id: dataToEdit.id,
              updates: {
                id: Date.now(),
                ...contact
              }
            }
          });
        toggleModal();
    }
  };
  return (
    <Form onSubmit={handleOnSubmit} className='contact-form'>
        {errorMsg && <p className='errorMsg'>{errorMsg}</p>}

      <Form.Group controlId='firstName'>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          className='firstName'
          name='firstName'
          value={contact.firstName}
          type='text'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='lastName'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          className='lastName'
          name='lastName'
          value={contact.lastName}
          type='text'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='phone'>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          className='phone'
          name='phone'
          value={contact.phone}
          type='number'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='submit'>
        <Button variant='primary' type='submit' className='submit-btn'>
         {dataToEdit ? "Update Contact" : "Add Contact"}
        </Button>
      </Form.Group>
    </Form>
  );
};