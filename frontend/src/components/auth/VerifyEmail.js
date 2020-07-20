import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function VerifyEmail() {
	const [email, setEmail] = useState();
	const [error, setError] = useState();

	const { setUserData } = useContext(UserContext);
	const history = useHistory();

	const verify = async (e) => {
		e.preventDefault();

		try {
			const userEmail = { email };
			const resetRes = await Axios.post(
				"http://rona.cards:4000/users/verify",
				userEmail
			);
			history.push("/");
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};

	return ( <div className = "page">
			<div className = "notification">
				<h2>Click the button below to finish your verification.</h2>
				<h4>( Afterwards, you'll be brought to our login page. )</h4>
				{error && (
					<ErrorNotice message={error} clearError={() => setError(undefined)} />
				)}
				<form className="form" onSubmit = { verify }>
					<input type="verify" value="Finalize Verification" />
				</form>
			</div>
		</div>
	);
}
