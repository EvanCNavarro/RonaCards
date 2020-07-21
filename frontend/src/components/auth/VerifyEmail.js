import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function VerifyEmail() {

	const [error, setError] = useState();

	const { setUserData } = useContext(UserContext);
	const history = useHistory();
		let params = new URLSearchParams(window.location.search);
		const id = params.get('_id');
		console.log("entered RESET SUBMIT BUTTON API");
		try {
			const user = { id };
			const verifyRes = Axios.put(
				"http://rona.cards:4000/users/verify",
				user
			);
			console.log("API ENTERED AND NOW PUSHED FROM FRONT END");
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}

	return ( <div className = "page">
			<div className = "notification">
				<h2>Thank you! Your email has now been verified.</h2>
				<h4>Feel free to navigate to our login page.</h4>
				{error && (
					<ErrorNotice message={error} clearError={() => setError(undefined)} />
				)}
			</div>
		</div>
	);
}
