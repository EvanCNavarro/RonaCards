import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function RequestReset() {
	const [email, setEmail] = useState();
	const [error, setError] = useState();

	const history = useHistory();

	const submit = async (e) => {
		e.preventDefault();

		try {
			const userEmail = { email };
			await Axios.post(
				"http://rona.cards:4000/users/reset",
				userEmail
			);
			history.push("/sent");
			// create check api, gives back user id, after id, send email
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};

	return (<div className="page">
		<h2>Request a password reset: </h2>
		{error && (
			<ErrorNotice message={error} clearError={() => setError(undefined)} />
		)}
		<form className="form" onSubmit={submit}>
			<label htmlFor="login-email">Email: </label>
			<input
				id="login-email"
				type="email"
				onChange={(e) => setEmail(e.target.value)}
			/>

			<input type="submit" value="Send Reset Link" />
		</form>
	</div>
	);
}
