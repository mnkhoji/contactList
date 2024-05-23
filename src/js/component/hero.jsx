import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Hero = () => {
    const { store, actions } = useContext(Context)

    
    return (
        <>
            <h1>This on hero</h1>

            <ul>
                <li>{store.user.fname}</li>
                <li>{store.user.age}</li>
            </ul>

            {store.characters?.map((el, i)=><p key={i}>{el.name}</p>)}

        </>

    )
}