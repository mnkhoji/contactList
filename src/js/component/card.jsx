import React from "react";

export const Card = ({ name, email, phone, address }) => <div className="card">
    <p>{name}</p>
    <p>{email}</p>
    <p>{phone}</p>
    <p>{address}</p>
</div>