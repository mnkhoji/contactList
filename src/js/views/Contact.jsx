import React from "react";
import { Context } from "../store/appContext.js";
export const Contact = () => {
    const { store, actions } = useContext(Context)
    return (
        <>
        <h1>This is my contact page</h1>
        <h2>
            All your contacts below
        </h2>
        <ul>
        {store.agenda?.map((contact, i) => <Card key={i} name={contact.name} email={contact.email} address={contact.address} phone={contact.phone} />)}
        </ul>
        </>
    )

}