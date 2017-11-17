var index = 0;
var people = [];
var emails = [];

function addRecruit(){
	var testcode = "";
	var recruited = 0;
	
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var date = document.getElementById("gradDate").value;
	var checkbox = document.getElementById("recruiter").checked;
	
	if (emailExist(email) == true){
		alert("Email already entered");
	}
	if (emailExist(email) == false){
		emails[index] = email;
		
		people[index] = [];
		people[index]["name"] = name;
		people[index]["email"] = email;
		people[index]["date"] = date;
		people[index]["checkbox"] = checkbox;
		
		index++;
		
		testcode+= "<table>";
			
		for (i=0; i<index; i++){
			if (people[i]["checkbox"] == true){
				recruited ++;
			}
			testcode += "<tr><td><a href='mailto:" + people[i]['email'] + "'>" + people[i]['name'] + "</a></td></tr>";
		}
		testcode += "</table>";
		testcode += "<p>Total Number of people wanting to be recruited " + recruited + "</p>";
		document.getElementById("Vistable").innerHTML = testcode;
	}
	
	return false;
}

function emailExist(email) {
	for (i=0; i<index; i++){
		if (email == emails[i]){
			return true;
		}
	}
	return false;
}