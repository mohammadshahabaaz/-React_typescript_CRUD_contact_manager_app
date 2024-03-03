import { FC, useState } from "react";

export const EventHandler: FC = ()=>{
    const[searchTeam,setSearchTeam] = useState("")

   const  handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchTeam( event.target.value );
   }
    return (
        <div>
        <label htmlFor=""> Type Something :</label>
            <input type="text"
            name="searchTeam"
            placeholder="Type Something"
            value={searchTeam}
            onChange={handleChange}
             />
             {searchTeam && <div>SearchTeam : {searchTeam}</div>}
        </div>
    )
}