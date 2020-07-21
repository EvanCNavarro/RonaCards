import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../context/UserContext";
import ErrorNotice from "../misc/ErrorNotice";

export default function ResetPassword() {
	const [password, setPassword] = useState();
	const [error, setError] = useState();

	const { setUserData } = useContext(UserContext);
	const history = useHistory();

	const reset = async (e) => {
		let params = new URLSearchParams(window.location.search);
        	const id = params.get('_id');
		console.log("entered RESET SUBMIT BUTTON API");
		try {
			const user = { id, password }
			console.log(id);
			console.log(password);
			const resetRes = await Axios.put(
				"http://rona.cards:4000/users/newPassword",
				user
			);
			console.log("API WORKED");
			history.push("/");
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};

	return ( <div className = "page">
			<h2>Reset Your Password:</h2>
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
