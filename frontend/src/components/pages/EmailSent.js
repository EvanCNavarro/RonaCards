import React from "react";
import emojiMailBox from '../../images/email_sent.png';

export default function Home() {

	return (
		<div className="page">
			<div className = "notification">
				<h2>SUCCESS! We've just sent you an email.</h2>
				<h4>Please go to your inbox, and click the link inside.</h4>
				<img src={ emojiMailBox } alt="Thumbs Up" />
			</div>
		</div>
	)
}



