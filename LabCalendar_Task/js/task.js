var tasks = [];
var index = 0;

function addTask() {
	
	var tempdate = new Date(document.getElementById("taskdate").value+" 00:00");
	var temptask = document.getElementById("taskinfo").value;

	tasks[index] = [];
	tasks[index]["date"] = tempdate ; 
	tasks[index]["task"] = temptask;
	index++;
	
	tasks.sort(function(a,b){return b["date"] - a["date"];});
	
	var tablecode = "<table class='tasktable'>" +
					"<tr><th>Date</th>" +
					"<th>Task</th></tr>";
					
	var count = 0;
	while (count < index)
	{
		var tempCountDate = tasks[count]["date"].toDateString();
		tablecode = tablecode + "<tr><td class='tableDate'>" + tempCountDate +
		"</td><td class='tableTask'>" + tasks[count]["task"] + "</td></tr>";
		count++;
	}
	
	tablecode = tablecode + "</table>";
	
	document.getElementById("BottomRight").innerHTML = tablecode; 
	
	clearForm();
	
	buildCalendar();
	
	return false;
}

function clearForm() {
	document.getElementById("taskdate").value = "";
	document.getElementById("taskinfo").value = "";
}
