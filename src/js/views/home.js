import React, { useContext } from "react";

import { Hero } from "../component/hero.jsx";
import { Context } from "../store/appContext.js";
import { FormComponent } from "../component/formComponent.jsx";
import { Card } from "../component/card.jsx";
import { Link } from "react-router-dom";



export const Home = () => {
	const { store, actions } = useContext(Context)




	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<Link to={'/Add'} >
				<button>
					add contact
				</button>
			</Link>
			<Link to={'/Contact'}>
				<button>
					go to contact list
				</button>
			</Link>





			{store.agenda?.map((contact, i) => <Card key={i} name={contact.name} email={contact.email} address={contact.address} phone={contact.phone} />)}

		</div>
	);
}