import React from "react";
import thumbsUp from '../../images/thumbsup.png';

export default function Home() {

	return (
		<div className="page">
			<div className = "notification">
				<h2>SUCCESS! We've just sent you an email.</h2>
				<h4>Please go to your inbox, and follow the link inside of it.</h4>
				<img src={ thumbsUp } alt="Thumbs Up" />
			</div>
		</div>
	)
}



