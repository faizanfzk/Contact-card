
import React, { useState } from "react"
import { ContactCard } from "./ContactCard";


const initial=[
    {
        id:1,
        name:"Faizan",
        email:"kf@gmail.com",
        phone:"856477952"
    },
    {
        id:2,
        name:"Ashish",
        email:"f@gmail.com",
        phone:"9856477952"
    },
    {
        id:3,
        name:"Ashu",
        email:"As@gmail.com",
        phone:"7856477952"
    },
    {
        id:4,
        name:"fzkhan",
        email:"fz@gmail.com",
        phone:"6856477952"
    }
];

export const ContactList=()=>{
const [contact,setContact]=useState(initial)

    return(
        <>
        <div>
        {contact.map((e)=>{
           return <ContactCard
            key={e.id}
            name={e.name}
            email={e.email}
            phone={e.phone}
            />
        })}
        </div>
        
        </>
    )
}
