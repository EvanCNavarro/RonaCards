import React, { useState, useEffect } from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Axios from "axios";

import UserContext from "./context/UserContext";

import Header from "./components/layout/Header";

import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Collection from "./components/auth/Collection";
import ResetPassword from "./components/auth/ResetPassword";
import EmailSent from "./components/pages/EmailSent";
import VerifyEmail from "./components/auth/VerifyEmail";

import "./style.css";

export default function App() {
	const [userData, setUserData] = useState ({
		token: undefined,
		user: undefined,
	});

	useEffect(() => {
		const checkLoggedIn = async () => {
			let token = localStorage.getItem("auth-token");
			if (token == null) {
				localStorage.setItem("auth-token", "");
				token = "";
			}
			const tokenRes = await Axios.post(
				"http://rona.cards:4000/users/tokenIsValid",
				null,
				{ headers: { "x-auth-token": token } }
			);
			if (tokenRes.data) {
				const userRes = await Axios.get("http://rona.cards:4000/users/", {
					headers: { "x-auth-token": token },
				});
				setUserData({
					token,
					user: userRes.data,
				});
			}
		};

		checkLoggedIn();
	}, [])
	return (
		<>
			<BrowserRouter>
				<UserContext.Provider value={{ userData, setUserData }}>
					<Header />
					<div className="container">
						<Switch>
							<Route exact path = "/" component={Home} />
							<Route path = "/login" component={Login} />
							<Route path = "/register" component={Register} />
							<Route path = "/collection" component={Collection} />
							<Route path = "/reset" component={ResetPassword} />
							<Route path = "/sent" component={EmailSent} />
							<Route path = "/verify" component={VerifyEmail} />
						</Switch>
					</div>
				</UserContext.Provider>
			</BrowserRouter>
		</>
	);
}
