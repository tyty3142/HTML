function flyTrans() {
	var typeTrans = document.forms['Lab05']['transport'].value;
	var code = "";

	if (typeTrans == 'Flight') {
		code = code + "<input type='radio' name='Way' value='oneWay' onclick='oneWay()' id='oneway'> One Way";
		code = code + "<input type='radio' name='Way' value='twoWay' onclick='twoWay()' id='twoway'> Round Trip";
	}
	document.getElementById('Trans').innerHTML = code;
}

function carTrans() {
	var typeTrans = document.forms['Lab05']['transport'].value;
	var code = "";

	if (typeTrans == 'Car') {
		code = code + "Pickup from what City/Airport: <input type='text' name='pickup' required id='pickup'>";
		code = code + "<p>Please enter the date and time to be picked up <input required type='datetime-local' name='pickup' id='pickup'>";
		code = code + "<p>Drop off at what City/Airport: <input type='text' name='dropOff' required id='dropOff'>";
		code = code + "<p>Please enter the date and time to be dropped off <input required type='datetime-local' name='dropoff' id='dropoff'>";
		code = code + "<p>Please select the type of vehicle: <input oninput='checkCar()' name='tcar' list='tcar'>";
		code = code + "<datalist id='tcar' name='carTrans'>";
		code = code + "<option value ='Economy'></option><option value='Compact'></option>";
		code = code + "<option value='Midsize'></option><option value='FullSize'></option><option value ='Van'></option>";
		code = code + "</datalist>";
		code = code + "<div id='carSeat'></div>";
	}
	document.getElementById('Trans').innerHTML = code;
}

function resetform() {
	document.forms['Lab05']['reset'].value = "";
}

function checkCar() {
		var car = document.forms['Lab05']['carTrans'].value;
		var code = "";
		if (car = 'Van')
		code = code + "<input type='radio' name='Seat7'> Seat 7";
		code = code + "<input type='radio' name='Seat8'> Seat 8";
		code = code + "<input type='radio' name='Seat15'> Seat 15";
	document.getElementById('carSeat').innerHTML = code;
}

function twoWay() {
	var code = "";
	code = code + "<p>What airport or city to fly from: ";
	code = code + "<input type='text' name='flyFrom' required>";
	code = code + "<p>What airport or city to fly to?";
	code = code + "<input type='text' name='depart' required>";
	code = code + "<p>What date are you departing?";
	code = code + "<input type='date' name='flyFrom' required>";
	code = code + "<p>What date will you return??";
	code = code + "<input type='date' name='flyreturn' required>";
	document.getElementById('Trans').innerHTML = code;
}

function oneWay() {
	var code = "";
	code = code + "<p>What airport or city to fly from: ";
	code = code + "<input type='text' name='flyFrom' required>";
	code = code + "<p>What airport or city to fly to?";
	code = code + "<input type='text' name='flyTo' required>";
	code = code + "<p>What date are you departing?";
	code = code + "<input type='date' name='depart' required>";
	document.getElementById('Trans').innerHTML = code;
}