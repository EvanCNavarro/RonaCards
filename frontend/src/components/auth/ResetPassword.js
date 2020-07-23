import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function ResetPassword() {
	const [password, setPassword] = useState();
	const [error, setError] = useState();

	const history = useHistory();

	const reset = async (e) => {
		let params = new URLSearchParams(window.location.search);
        	const id = params.get('_id');
		try {
			const user = { id, password }
			await Axios.put(
				"http://rona.cards:4000/users/newPassword",
				user
			);
			history.push("/");
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};

	return ( <div className = "page">
			<h2>Enter your new password:</h2>
			{error && (
				<ErrorNotice message={error} clearError={() => setError(undefined)} />
			)}
			<form className="form">
                                <label htmlFor="password">New Password: </label>
                                <input
                                        id="password"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                />
				<button onClick = { reset } ><input type="reset" value="Set New Password" /></button>
                        </form>
		</div>
	);
}
