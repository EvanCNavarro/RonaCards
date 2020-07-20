import React from "react";
import blueLips_present from '../../images/icons/blueLips_present.png';

export default function Home() {
	const blueLips = blueLips_present;

	return (
		<div className="page">
			<div className = "notification">
				<h2>SUCCESS! We've just sent you an email.</h2>
				<h4>Please go to your inbox, and follow the link inside of it.</h4>
				<img src={ blueLips } alt="Thumbs Up" />
			</div>
		</div>
	)
}



