import { ContactForm } from "./components/ContactForm";
import { Header } from "./components/Header";
import './App.css'
//step 5
import { Contact, contactReducer,State } from "./components/contactReducer";
import { useEffect, useReducer, useState } from "react";
import { ContactList } from "./components/ContactList";
import { EditModal } from "./components/EditModal";


const intialState : State = {
  contacts:[]
}

function App() {
  const [state,dispatch] = useReducer(contactReducer,intialState); //step 5
  //  console.log after the useReducer hook line to display the state value as shown below
  console.log("state",state);
  //Now, If you check the application, you can see the state value coming from the useReducer hook.

  const [showModal,setShowModal] = useState(false);
  const [dataToEdit,setDataToEdit] = useState<Contact | undefined>(undefined)

  useEffect(()=>{
    if(!showModal){
      setDataToEdit(undefined)
    }
  },[showModal])

  const toggleModal = ()=>{
    setShowModal((show)=> !show);
  }

  const handleEdit = (id:number)=>{
    setDataToEdit(state.contacts.find((contact) => contact.id ===id));
    toggleModal();
  }
  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
      {/* //step 5 passing dispatch as a props */}
        <ContactForm dispatch ={dispatch} dataToEdit={dataToEdit} toggleModal={toggleModal}/> 
        <hr></hr>
       {/* //step 6 */}
       {state.contacts.length > 0 && <ContactList contacts={state.contacts} handleEdit={handleEdit} dispatch={dispatch}/>}
      </div>
      <EditModal
        showModal={showModal}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
        dispatch={dispatch}
      />
    </div>
  );

}
export default App;