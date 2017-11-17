function checkSub() {
	var messType = document.forms['Contact']['MessSub'].value;
	var code = "";

	if (messType == 'Existing Request') {
		code = code + "<tr>";
		code = code + "<td>";
		code = code + "Request ID: <input type='text' name='ReqID' pattern='([a-zA-z0-9]{5})' required/>";
		code = code + "</td>";
		code = code + "</tr>";
	};
	document.getElementById('checkSub').innerHTML = code;
}

function altEmail() {
	var code = "";

	code = code + "Alternative Email: <input type='email' name='altemail' required/>";
	document.getElementById('CopyEmail').innerHTML = code;
}

function showValue(newValue) {
	document.getElementById("range").innerHTML = newValue;
	document.getElementById("hoursleft").innerHTML = (120 - newValue);
	document.getElementById("bar").value = newValue;
}

