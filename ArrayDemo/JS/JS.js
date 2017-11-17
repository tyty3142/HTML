var participantList = [];

function addParticipant(){
	var name = document.getElementById("name").value;
	if(name!= ''){
		participantList.push(name);
		document.getElementById("name").value="";
		
	}
		displayList();
}

function deleteItem(item){
	participantList.splice(item, 1);
	displayList();
}

function displayList(){
	var code = "";
	if(participantList.length > 0){
		participantList.sort();
		code = "<table border=1><tr><th>Name</th><th>Action</th></tr>";
		for(var i = 0; i < participantList.length; i++){
			code = code + "<tr>" + "<td>" + participantList[i] + "</td>" +
			"<td><button onclick='deleteItem("+i+")'>delete</button></td>"+
			"</tr>";
			
		}
		code = code + "</table>";
	}
	document.getElementById("demo").innerHTML = code;
}
