import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from '../auth/AuthOptions'
import viruses from '../../images/viruses.png';

export default function Header() {
	return (
		<header id ="header">
			<Link to="/">
				<div className="homebase">
					<img src={ viruses } alt="Viruses" height="23px" />
					<h1 className = "title">Rona Cards</h1>
				</div>
			</Link>
			<AuthOptions />
		</header>
	);
}
