var age = prompt("What is your age?");

function calcyearBorn(age) {
	return 2016 - age;
}

function greetings() {
	var today = new Date;

	var hour = today.getHours();
	var message = "";
	if (hour > 1 && hour < 2)
		message = "good morning";
	else if (hour >= 12 && hour < 18)
		message = "good afternoon";
	else if (hour >= 17)
		message = "good evening";
	return hour;

	document.getElementById('greet').innerHTML = message;
	//looks for DIV on html form and puts it in there.
}