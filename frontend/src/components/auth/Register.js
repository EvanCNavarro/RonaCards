import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Register() {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();

	const { setUserData } = useContext(UserContext);
	const history = useHistory();

	const submit = async (e) => {
		e.preventDefault();

		try {
			const newUser = { username, email, password };
			await Axios.post(
				"http://rona.cards:4000/users/register",
				newUser
			);

			//Ataberk

			const loginRes = await Axios.post("http://rona.cards:4000/users/login", {
				username,
				password,
			});

			setUserData({
				token: loginRes.data.token,
				user: loginRes.data.user,
			});
			localStorage.setItem("auth-token", loginRes.data.token);
			history.push("/");
		}
		catch(err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};

	return (
		<div className = "page">
			<h2>Register</h2>
			{error && (
				<ErrorNotice message={ error } clearError={() => setError(undefined)} />
			)}
			<form className="form" onSubmit={submit}>
				<label htmlFor="register-username">Username: </label>
				<input id="register-username" type="text" onChange={(e) => setUsername(e.target.value)} />

				<label htmlFor="register-email">Email: </label>
				<input id="register-email" type="email" onChange={(e) => setEmail(e.target.value)} />

				<label htmlFor="register-password">Password: </label>
				<input id="register-password" type="password" onChange={(e) => setPassword(e.target.value)} />

				<input type="submit" value="Register" />
			</form>
		</div>
	);
}

