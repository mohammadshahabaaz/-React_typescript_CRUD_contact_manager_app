import { FC } from "react";
import { Action, Contact } from "./contactReducer";
import { Modal } from "react-bootstrap";
import { ContactForm } from "./ContactForm";



interface EditModalProps{
    showModal: boolean;
    dataToEdit: Contact | undefined;
    toggleModal: ()=>void;
    dispatch:React.Dispatch<Action>
}

export const EditModal:FC<EditModalProps> = ({showModal,dataToEdit,toggleModal,dispatch})=>{

    return (
        <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm
            dispatch={dispatch}
            dataToEdit={dataToEdit}
            toggleModal={toggleModal}
          />
        </Modal.Body>
      </Modal>
    )
    
}