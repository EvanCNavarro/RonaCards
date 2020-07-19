import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";

export default function Collection() {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const { setUserData } = useContext(UserContext);
	const history = useHistory();


	return (
		<div className = "page">
			<h2>Log in</h2>
		</div>
	);
}
