import { FC } from "react";

interface IProps {
    name:string,
    isMarried?:boolean
}

export const Header:FC<IProps> = ({name,isMarried=true})=>{
    return <div>
        Hello Lucky and {name}
        <p>Marital Status : {isMarried ? "Yes": "No"}</p>
        </div>
    
}

export function Header1(props:IProps){
    return <h1>Hello Lucky {props.name}</h1>
}

//destructing props
export function Header2({name}:IProps){
    return <h1>Hello Lucky {name}</h1>
}