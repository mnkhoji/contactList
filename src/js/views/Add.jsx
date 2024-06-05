import React from "react";
import { FormComponent } from "../component/formComponent.jsx";
import { Link } from "react-router-dom";

export const Add = () => {

    return (
        <>
        <FormComponent/>
        <Link to="/">
				<button className="btn btn-primary">Go back to homepage</button>
			</Link>
            </>
    )
}