import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Login() {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();

	const { setUserData } = useContext(UserContext);
	const history = useHistory();

	const submit = async (e) => {
		e.preventDefault();

		try {
			const loginUser = { username, password };
			const loginRes = await Axios.post(
				"http://rona.cards:4000/users/login",
				loginUser
			);
			setUserData({
				token: loginRes.data.token,
				user: loginRes.data.user,
			});
			localStorage.setItem("auth-token", loginRes.data.token);
			localStorage.setItem("user", loginRes.data.user);
			history.push("/");
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};

	return (
		<div className = "page">
			<h2>Log in</h2>
			{error && (
				<ErrorNotice message={error} clearError={() => setError(undefined)} />
			)}
			<form className="form" onSubmit = { submit }>
				<label htmlFor="login-username">Username: </label>
				<input
					id="login-username"
					type="text"
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label htmlFor="login-password">Password: </label>
				<input
					id="login-password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>

				<input type="submit" value="Log in" />
			</form>
		</div>
	);
}
