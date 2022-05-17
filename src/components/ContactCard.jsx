import React from "react";
import { useState } from "react";
import { Contactme } from "./Contactme.css"

export const ContactCard=(props)=>{

const {name,email,phone}=props;

const [active,setActive]=useState(false)

return(
    <div className="main">
    <div onClick={()=>{
        setActive(!active)
    }} className="contactme">
    <div>{name}</div>
    <div>{email}</div>

    {active && <div> {phone} </div>}
    </div>
    </div>
)

}