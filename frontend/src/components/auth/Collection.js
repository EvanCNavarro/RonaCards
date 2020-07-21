import React, { useState } from "react";
// Importing inage icons
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
// importing image cards
import card1_fever from '../../images/cards/card1_fever.png';
import card2_nose from '../../images/cards/card2_nose.png';
import card3_breath from '../../images/cards/card3_breath.png';
import card4_taste from '../../images/cards/card4_taste.png';
import card5_diarrhea from '../../images/cards/card5_diarrhea.png';
import card6_blue from '../../images/cards/card6_blue.png';
import card7_toe from '../../images/cards/card7_toe.png';
import card8_heart from '../../images/cards/card8_heart.png';
import card9_oxygen from '../../images/cards/card9_oxygen.png';
import card10_cure from '../../images/cards/card10_cure.png';


export default function Collection() {

	var blueLips = blueLips_absent;
	var breathingDifficulty = breathingDifficulty_absent;
	var cold = cold_absent;
	var fever = fever_absent;
	var feet = feet_absent;
	var diahrrea = diahrrea_absent;
	var heartbeat = heartbeat_absent;
	var senseOfTaste = senseOfTaste_absent;
	var respiration = respiration_absent;

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
		if(collection[1] === 'true')
		{
			fever = fever_present;
		}

		if(collection[2] === 'true')
		{
			cold = cold_present;
		}

		if(collection[3] === 'true')
		{
			breathingDifficulty = breathingDifficulty_present;
		}
        
		if(collection[4] === 'true')
		{
			senseOfTaste = senseOfTaste_present;
		}
        
		if(collection[5] === 'true')
		{
			diahrrea = diahrrea_present;
		}
        
		if(collection[6] === 'true')
		{
			blueLips = blueLips_present;
		}
        
		if(collection[7] === 'true')
		{
			feet = feet_present;
		}
        
		if(collection[8] === 'true')
		{
			heartbeat = heartbeat_present;
		}
        
		if(collection[9] === 'true')
		{
			respiration = respiration_present;
		}
        
        return (
            <div className = "page">
			<div className = "greeting">
				<h1>Hey { user }!</h1>
				<h2>Welcome To Your <b>Rona Cards</b> Collection:</h2>
			</div>
			<div className = "collection">
			<div class="common_box">
              <p class="common">COMMON</p>
              <img class="common_1" src={fever} alt="common_1" />
			  <div class="HoverBox1">
			 	 <img class="Card" src={card1_fever} alt="common_1" />
				  <div class="card_text">
					<p class="card_heading">FEVER</p>
					<p class="card_details"> LEVEL 1</p>
				  </div>
				 
			  </div>
              <img class="common_2" src={cold} alt="common_1" />
			  <div class="HoverBox2">
			 	 <img class="Card" src={card2_nose} alt="common_1" />
				  <div class="card_text">
					<p class="card_heading">FEVER</p>
					<p class="card_details"> LEVEL 1</p>
				  </div>
				 
			  </div>
              <img class="common_3" src={breathingDifficulty} alt="common_1" />
			  {/* <div class="HoverBox">
			 	 <img class="Card" src={card1_fever} alt="common_1" />
				  <div class="card_text">
					<p class="card_heading">FEVER</p>
					<p class="card_details"> LEVEL 1</p>
				  </div>
				 
			  </div> */}
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
