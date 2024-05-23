import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const FormComponent = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate()
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(data)
        if(actions.createContact(FormData)) navigate('/')
    }
    const [data, setData] = useState({
        name: "",
        phone: "",
        adress: "",
        email: ""
    })
    const handleChange = e => setData({...data, [e.target.name]: e.target.value})
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="write your name" onChange={e=>handleChange(e)} value={data.name}/>
            <input type="text" name="phone" placeholder="write your phone number" onChange={e=>handleChange(e)} value={data.phone}/>
            <input type="text" name="adress" placeholder="write your adress" onChange={e=>handleChange(e)} value={data.adress}/>
            <input type="text" name="email" placeholder="write your email" onChange={e=>handleChange(e)} value={data.email}/>
            <input type="submit" value={"submit"}/>
        </form>
    )
}
