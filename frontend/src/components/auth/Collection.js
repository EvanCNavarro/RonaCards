import React, { useState } from "react";


import blueLips_present from '../../images/icons/blueLips_present.png';
import blueLips_absent from '../../images/icons/blueLips_absent.png';
import breathingDifficulty_present from '../../images/icons/breathingDifficulty_present.png';
import breathingDifficulty_absent from '../../images/icons/breathingDifficulty_absent.png';
import cold_present from '../../images/icons/cold_present.png';
import cold_absent from '../../images/icons/cold_absent.png';
import diahrrea_present from '../../images/icons/diahrrea_present.png';
import diahrrea_absent from '../../images/icons/diahrrea_absent.png';
import feet_present from '../../images/icons/feet_present.png';
import feet_absent from '../../images/icons/feet_absent.png';
import fever_present from '../../images/icons/fever_present.png';
import fever_absent from '../../images/icons/fever_absent.png';
import heartbeat_present from '../../images/icons/heartbeat_present.png';
import heartbeat_absent from '../../images/icons/heartbeat_absent.png';
import respiration_present from '../../images/icons/respiration_present.png';
import respiration_absent from '../../images/icons/respiration_absent.png';
import senseOfTaste_present from '../../images/icons/senseOfTaste_present.png';
import senseOfTaste_absent from '../../images/icons/senseOfTaste_absent.png';

export default function Collection() {

	const blueLips = blueLips_absent;
	const breathingDifficulty = breathingDifficulty_absent;
	const cold = cold_absent;
	const fever = fever_absent;
	const feet = feet_absent;
	const diahrrea = diahrrea_absent;
	const heartbeat = heartbeat_absent;
	const senseOfTaste = senseOfTaste_absent;
	const respiration = respiration_absent;

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
		// only a test
		
		if(collection[0] == true)
		{
			blueLips = blueLips_present;
		}
        return (
                <div className = "page">
			<div className = "greeting">
				<h1>Hey { user }!</h1>
				<h2>Welcome to your <b>Rona Cards</b> collection:</h2>
			</div>
			<div className = "collection">
			<div class="common_box">
              <p class="common">COMMON</p>
              <img class="common_1" src={fever} alt="common_1" />
              <img class="common_2" src={cold} alt="common_1" />
              <img class="common_3" src={breathingDifficulty} alt="common_1" />
            </div>

            <div class="uncommon_box">
            <p class="common">UNCOMMON</p>

              <img class="uncommon_1" src={senseOfTaste} alt="uncommon_1" />
              <img class="uncommon_2" src={diahrrea} alt="uncommon_1" />
              <img class="uncommon_3" src={blueLips} alt="uncommon_1" />
            </div>

            <div class="rare_box">
            <p class="common">RARE</p>

              <img class="rare_1" src={feet} alt="common_1" />
              <img class="rare_2" src={heartbeat} alt="common_1" />
              <img class="rare_3" src={respiration} alt="common_1" />
            </div>
			</div>
                </div>
        );
};
