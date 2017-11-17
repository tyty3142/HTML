function flyTrans(){
	var typeTrans = document.forms['Lab05']['transport'].value;
	var code = "";

	if (typeTrans == 'Flight') {
		code = code + "<input type='radio' name='Way' value='oneWay' onclick='oneWay()' id='oneway'> One way";
		code = code + "<input type='radio' name='Way' value='twoWay' onclick='twoWay()' id='twoway'> Two way";
	}
	document.getElementById('Trans').innerHTML = code;
}

function carTrans() {
	var typeTrans = document.forms['Lab05']['transport'].value;
	var code = "";

	if (typeTrans == 'Car') {
		code = code + "Pickup from what City/Airport: <input type='text' name='pickup' id='pickup'>";
		code = code + "<p>Please enter the date and time to be picked up<input required type='datetime-local' name='pickup' id='pickup'>";
		code = code + "<p>Drop off at what City/Airport: <input type='text' name='dropOff' id='dropOff'>";
		code = code + "<p>Please enter the date and T\time to be dropped off<input required type='datetime-local' name='dropoff' id='dropoff'>";
		code = code + "";
	}
	document.getElementById('Trans').innerHTML = code;
}

