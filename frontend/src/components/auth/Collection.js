import React, { useState } from "react";

export default function Collection() {
        const [user, setUsername] = useState("");
	var [card1, setCard1] = useState('');
	var [card2, setCard2] = useState('');
	var [card3, setCard3] = useState('');
	var [card4, setCard4] = useState('');
        var [card5, setCard5] = useState('');
        var [card6, setCard6] = useState('');
	var [card7, setCard7] = useState('');
	var [card8, setCard8] = useState('');
	var [card9, setCard9] = useState('');
	var [card10, setCard10] = useState('');

        fetch('http://www.rona.cards:4000/users/', {
                        method: "GET",
                        headers: {
                                "x-auth-token": localStorage.getItem("auth-token")
                        }
                })
                .then(res => res.json())
                .then((data) => {
                        setUsername(data.username);
			setCard1(data.card1);
			setCard2(data.card2);
                        setCard3(data.card3);
                        setCard4(data.card4);
                        setCard5(data.card5);
                        setCard6(data.card6);
                        setCard7(data.card7);
                        setCard8(data.card8);
                        setCard9(data.card9);
                        setCard10(data.card10);
                })
	.catch(err => console.log(err));

	var collection = [
		card1,
		card2,
		card3,
		card4,
		card5,
		card6,
		card7,
		card8,
		card9,
		card10
	];

	var counter;
	for (counter = 0; counter < 10; counter++) {
		collection[counter] = collection[counter].toString();
	}

        return (
                <div className = "page">
			<div className = "greeting">
				<h1>Hey { user }!</h1>
				<h2>Welcome to your <b>Rona Cards</b> collection:</h2>
			</div>
			<div className = "collection">
				<h4>Card 1: { collection[0] }</h4>
				<h4>Card 2: { collection[1] }</h4>
				<h4>Card 3: { collection[2] }</h4>
				<h4>Card 4: { collection[3] }</h4>
				<h4>Card 5: { collection[4] }</h4>
				<h4>Card 6: { collection[5] }</h4>
				<h4>Card 7: { collection[6] }</h4>
				<h4>Card 8: { collection[7] }</h4>
				<h4>Card 9: { collection[8] }</h4>
				<h4>Card 10: { collection[9] }</h4>
			</div>
                </div>
        );
};
