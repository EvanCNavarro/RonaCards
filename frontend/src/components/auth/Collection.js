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
	
	var one = "hidden_hover1";
	var two = "hidden_hover2";
	var three = "hidden_hover3";
	var four = "hidden_hover4";
	var five = "hidden_hover5";
	var six = "hidden_hover6";
	var seven = "hidden_hover7";
	var eight = "hidden_hover8";
	var nine = "hidden_hover9";


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
		if(collection[0] === 'true')
		{
			fever = fever_present;
			one = 'HoverBox1';
		}

		if(collection[1] === 'true')
		{
			cold = cold_present;
			two = 'HoverBox2';

		}

		if(collection[2] === 'true')
		{
			breathingDifficulty = breathingDifficulty_present;
			three = 'HoverBox3';

		}
        
		if(collection[3] === 'true')
		{
			senseOfTaste = senseOfTaste_present;
			// one = 'HoverBox4';
			four = 'HoverBox4';

		}
        
		if(collection[4] === 'true')
		{
			diahrrea = diahrrea_present;
			five = 'HoverBox5';

		}
        
		if(collection[5] === 'true')
		{
			blueLips = blueLips_present;
			six = 'HoverBox6';

		}
        
		if(collection[6] === 'true')
		{
			feet = feet_present;
			seven = 'HoverBox7';

		}
        
		if(collection[7] === 'true')
		{
			heartbeat = heartbeat_present;
			eight = 'HoverBox8';

		}
        
		if(collection[8] === 'true')
		{
			respiration = respiration_present;
			nine = 'HoverBox9';

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
			  <div className={one}>
			 	 <img class="Card" src={card1_fever} alt="common_1" />
					<div class="card_text">
						<p class="card_heading">FEVER</p>
						<p class="card_details"> LEVEL 1</p>
						<p class="card_details"> You're Burning Up!</p>
					</div>	 
			  </div>
              <img class="common_2" src={cold} alt="common_1" />
			  <div class={two}>
			 	 <img class="Card" src={card2_nose} alt="common_1" />
				  <div class="card_text">
					<p class="card_heading">Runny Nose</p>
					<p class="card_details"> LEVEL 2</p>
					<p class="card_details"> That's a lot of mucus!</p>

				  </div>
				 
			  </div>
              <img class="common_3" src={breathingDifficulty} alt="common_1" />
			  <div class={three}>
			 	 <img class="Card" src={card3_breath} alt="common_1" />
				  <div class="card_text">
					<p class="card_heading">Shortness of Breath</p>
					<p class="card_details"> LEVEL 3</p>
					<p class="card_details"> Your lungs are struggling!</p>

				  </div>
				 
			  </div>
            </div>

            <div class="uncommon_box">
            <p class="common">UNCOMMON</p>
              <img class="uncommon_1" src={senseOfTaste} alt="uncommon_1" />
			  	<div class={four}>
			 	 <img class="Card" src={card4_taste} alt="common_1" />
				  <div class="card_text">
					<p class="card_heading">Loss of Taste</p>
					<p class="card_details"> LEVEL 4</p>
					<p class="card_details"> Don't Bother Licking..</p>
				  </div>
				</div>
              <img class="uncommon_2" src={diahrrea} alt="uncommon_1" />
			  <div class={five}>
			 	 <img class="Card" src={card5_diarrhea} alt="common_1" />
				  <div class="card_text">
					<p class="card_heading">Diarrhea</p>
					<p class="card_details"> LEVEL 5</p>
					<p class="card_details"> The toilet is your new mansion!</p>
				  </div>
				</div>
              <img class="uncommon_3" src={blueLips} alt="uncommon_1" />
			  <div class={six}>
			 	 <img class="Card" src={card6_blue} alt="common_1" />
				  <div class="card_text">
					<p class="card_heading">Blue Lips</p>
					<p class="card_details"> LEVEL 6</p>
					<p class="card_details"> That's not lipstick, is it?</p>
				  </div>
				</div>
            </div>

            <div class="rare_box">
            <p class="common">RARE</p>

              <img class="rare_1" src={feet} alt="common_1" />
			  <div class={seven}>
			 	 <img class="Card" src={card7_toe} alt="common_1" />
				  <div class="card_text">
					<p class="card_heading">COVID Toe</p>
					<p class="card_details"> LEVEL 7</p>
					<p class="card_details"> Toe-tally not normal!</p>
				  </div>
				</div>
              <img class="rare_2" src={heartbeat} alt="common_1" />
			  <div class={eight}>
			 	 <img class="Card" src={card8_heart} alt="common_1" />
				  <div class="card_text">
					<p class="card_heading">Cardiovascular Distress</p>
					<p class="card_details"> LEVEL 8</p>
					<p class="card_details"> Your heart is struggling!</p>
				  </div>
				</div>
              <img class="rare_3" src={respiration} alt="common_1" />
			  <div class={nine}>
			 	 <img class="Card" src={card9_oxygen} alt="common_1" />
				  <div class="card_text">
					<p class="card_heading">Happy Hypoxia</p>
					<p class="card_details"> LEVEL 9</p>
					<p class="card_details"> Your breathing feels.. normal?</p>
				  </div>
				</div>
            </div>
			</div>
                </div>
        );
};
