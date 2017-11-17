var participantList = [];
var index =0;

function newParticipant() {
	var name = document.getElementById("name").value;

	var bdate = document.getElementById("bdate").value;

	var email = document.getElementById("email").value;

	if (name != '', bdate !='', email != '') {
		participantList[index] = [];
		participantList[index]['Name'] = name;
		participantList[index]['BDate'] = bdate;
		participantList[index]['Email'] = email;
		index++;
	}
		sortArray('Name');
		clearForm();
		displayList();

}

function sortArray(column) {
	participantList.sort(function(a, b) {
		return a[column] > b[column];
	});
}

function removeParticipant(item) {
	participantList.splice(item, 1);
	index--;
	displayList();
}

function editParticipant(item){
	document.getElementById("name").value = participantList[item]['Name'];
	document.getElementById("bdate").value = participantList[item]['BDate'];
	document.getElementById("email").value = participantList[item]['Email'];
	document.getElementById("edit").innerHTML = "Update Participant";
	document.getElementById("edit").setAttribute('onclick', 
"updateParticipant("+item+")");
}

function clearForm() {
	var name = document.getElementById("name").value = "";
	var bdate = document.getElementById("bdate").value = "";
	var email = document.getElementById("email").value = "";
	displayList();
}

function updateParticipant(item){
	var name = document.getElementById("name").value;
	var bdate = document.getElementById("bdate").value;
	var email = document.getElementById("email").value;
	
	if(name, bdate, email !=""){
		participantList[item]['Name'] = name;
		participantList[item]['BDate'] = bdate;
		participantList[item]['Email'] = email;
	}
	sortArray('Name');
	clearForm();
	displayList();
}

function displayList() {
	var code = "";
	if (participantList.length > 0) {
		participantList.sort();
		code = "<table border=1><tr><th>Name</th><th>Birth Date</th><th>Email</th><th>Action</th></tr>";
		for (var i = 0; i < participantList.length; i++) {

			code = code + "<tr>" + "<td>" + participantList[i]['Name'] + "</td>" +
			 "<td>" + participantList[i]['BDate'] + "</td>" 
			 + "<td><a href='#'>" + participantList[i]['Email'] + "</a></td>" +
			  "<td><button id='edit' onclick='editParticipant(" + i + ")'>Edit</button>" + 
			  "<button onclick='removeParticipant(" + i + ")'>Remove</button>" + 
			  "</td>" + "</tr>";

		}
		code = code + "</table>";
	}
	document.getElementById("Lab11").innerHTML = code;
}
