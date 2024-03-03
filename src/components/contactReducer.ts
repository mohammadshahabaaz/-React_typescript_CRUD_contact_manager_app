/* eslint-disable no-case-declarations */
///Step 4
export interface Contact{
    id:number;//step 7
    firstName: string;
    lastName: string;
    phone: string;
}
export interface Update {
    id: number;
    updates?: Contact;
  }
export interface Action{
    type:"ADD_CONTACT" | 'UPDATE_CONTACT' | 'DELETE_CONTACT';
    payload : Contact | Update;
}

export interface State{
    contacts: Contact[]
}

//step 3

export const contactReducer = (state:State,action:Action)=>{
    switch(action.type) {
        //So when we dispatch the ADD_CONTACT action, the first switch case from the contactsReducer function will be executed where
        // we’re returning a new object by spreading out all the properties of initialState (currently only contacts)
        // and we’re adding new contact like this:
        case  "ADD_CONTACT" :
            return {
                ...state,
                contacts:[...state.contacts,action.payload as Contact]
            };
        case "UPDATE_CONTACT": 
        const {id,updates} = action.payload as Update;
        return {
            ...state,
            contacts: state.contacts.map((contact)=>{
                if(contact.id === id){
                    return {
                        ...contact,
                        ...updates
                    };
                }
                return contact;
            })
        }  
        case 'DELETE_CONTACT': {
            const { id } = action.payload;
            return {
              ...state,
              contacts: state.contacts.filter((contact) => contact.id !== id)
            };
          }  
        default :
        return state    
    }
}