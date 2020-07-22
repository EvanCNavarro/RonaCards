import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
	const { userData } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		if (!userData.user) history.push("/login");
	});

	return (
		<div className="page">
			<div className = "homepage">
				<h1>Welcome!</h1>
				<div className="hometext">
					<p>Curious about COVID-19 symptoms? In search of some wholesome family fun?</p>
					<p>Well you have the demand and we have your supply!</p>
					<p>Introducing <b>"<u>Rona Cards</u>"</b>, a fun and interactive way to:</p>
					<li>
						Collect AR-Compatible trading cards
					</li>
					<li>
						Learn about <b><u>C</u></b>ommon, <b><u>U</u></b>ncommon, <b><u>R</u></b>are, and <b><u>E</u></b>xclusive symptoms.
					</li>
					<p>We hope the by collecting all of our Symptom Cards, you will be well equipped to identify any future signs of COVID-19 while you’re in the company of loved ones, family, and friends.</p>
					<p><b>STOP THE SPREAD</b> of the Coronavirus by collecting all of the cards, and teaching others of your newly gained knowledge!</p>
				</div>

				<a href="https://www.github.com/EvanCNavarro/RonaCards" target="_blank"><button><input type="submit" value="View on GitHub" /></button></a>
			</div>
		</div>
	)
}



