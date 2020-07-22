import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import emojiThumbsUp from '../../images/email_verified.png';

export default function VerifyEmail() {

	const [error, setError] = useState();

	const { setUserData } = useContext(UserContext);
	const history = useHistory();
		let params = new URLSearchParams(window.location.search);
		const id = params.get('_id');
		try {
			const user = { id };
			const verifyRes = Axios.put(
				"http://rona.cards:4000/users/verify",
				user
			);
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}

	return ( <div className = "page">
			<div className = "notification">
				<h2>GREAT! Your email has been verified.</h2>
				<h4>You're now able to log in and see your card collection.</h4>
				<img src={ emojiThumbsUp } alt="Email Verified" />
				{error && (
					<ErrorNotice message={error} clearError={() => setError(undefined)} />
				)}
			</div>
		</div>
	);
}
