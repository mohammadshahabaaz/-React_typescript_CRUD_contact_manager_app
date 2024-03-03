import { FC } from "react";
import { Action, Contact } from "./contactReducer";
import { ContactItem } from "./ContactItem";

//step 6
interface ContactListProps{
    contacts: Contact[];
    handleEdit: (id: number) => void;
    dispatch: React.Dispatch<Action>;
}

export const ContactList : FC<ContactListProps> =({contacts,handleEdit,dispatch})=>{

    // const {contacts} = props;
    
    return(
        <div className='contacts-list'>
      <h3 className='contacts-list-title'>List of Contacts</h3>
      <div className='contacts-list-table-container'>
        <table className='contacts-list-table'>
          <thead className='contacts-list-header'>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* {contacts.map(({ id,firstName, lastName, phone }) => (
              <tr key={id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{phone}</td>
              </tr>
            ))} */}
            {/* {contacts.map(({ id,firstName,lastName,phone})=>(
                <ContactItem key={id}
                id={id}
                firstName={firstName}
                lastName={lastName}
                phone={phone} />
            ))} */}
            {/* {contacts.map((props)=> <ContactItem key={props.id} {...props} />)} */}
               {/* id={props.id} 
             firstName={props.firstName} 
             lastName={props.lastName}
             phone={props.phone} */}

             {contacts.map((contact)=>(<ContactItem 
             key={contact.id} 
             {...contact}
              handleEdit={handleEdit}
               dispatch={dispatch} />))}
          </tbody>
        </table>
      </div>
    </div>
    )
}