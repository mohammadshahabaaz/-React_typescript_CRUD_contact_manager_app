import { FC } from "react"
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Action, Contact } from "./contactReducer"
interface ExtraProps {
    handleEdit: (id: number) => void;
    dispatch: React.Dispatch<Action>;
  }

//   type ContactProps = ContactType & ExtraProps;
export const ContactItem :FC<Contact & ExtraProps> =({id,firstName,lastName,phone,handleEdit,dispatch}) =>{
    return (
        <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <AiFillEdit size={20} className='icon' onClick={()=> handleEdit(id)} />
      </td>
      <td>
        <AiFillDelete size={20} className='icon' onClick={()=>{
            const confirmDelete = window.confirm(`Are you sure you want to delete this for user ${firstName} ${lastName} ?`);
            if(confirmDelete){
                //dispatch action
                dispatch({
                    type: 'DELETE_CONTACT',
                    payload: { id }
                  });
            }
        }} />
      </td>
    </tr>
    )
}