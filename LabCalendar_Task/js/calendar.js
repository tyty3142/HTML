function setDate() {
	//Create a variable with today's date
	var today = new Date();											
	
	document.getElementById("myday").value = today.getDate();		//Set the input myday on load
	document.getElementById("mymonth").value = today.getMonth();	//Set the input mymonth on load
	document.getElementById("myyear").value = today.getFullYear();	//Set the input myyear on load
	
} // end of function setDate

function buildCalendar() {
	// get information from the input boxes
	var targetDay = document.getElementById("myday").value;
	var targetMonth = document.getElementById("mymonth").value;
	var targetYear = document.getElementById("myyear").value;
	
	// create a date for day 1 of the month and year selected
	var firstDate = new Date(targetYear, targetMonth, 1);		
	
	// get the week day for day 1	
	var weekDay = firstDate.getDay();					

	// set a date for the first day of the next month
	var newDay = new Date(firstDate); 
		newDay.setMonth(newDay.getMonth()+1);		
	
	// set the date of the last day of the previous month		
	var lastDate = new Date(newDay); 					
		lastDate.setDate(lastDate.getDate()-1);
	
	// get number of the day of lastDate(1-31)
	var lastDay = lastDate.getDate(); 					

	// Create the table and the table header
	var code = "<table class='caltable' border='1'>"+
				"<tr class='calmonth'>"+
					"<th colspan='7'>" + getMonthName(targetMonth) + " " + targetYear + "</th>"+
				"</tr>" + 
				"<tr class='calweekday'>"+
					"<th>Sun</th>" +
					"<th>Mon</th>" +
					"<th>Tue</th>" +
					"<th>Wed</th>" +
					"<th>Thu</th>" +
					"<th>Fri</th>" +
					"<th>Sat</th>"+
				"</tr>";
	
	// variable to control which column to print (Sun-Sat). Starts with Sunday
	var col = 0;				
	
	// calculate the number of empty space before printing the first day of the month
	var countDay = 1 - weekDay;		
	
	// loop fr all days of the target month
	while(countDay <= lastDay) {	
	
		var tempDate = new Date(document.getElementById("myyear").value, document.getElementById("mymonth").value, countDay);
		
		var dateExist = checkDate(tempDate);
	
		//Start the calendar row
		if(col == 0) {	
			code = code + "<tr>";
		}
			
		// create an empty TD if countDay is less then 1
		if(countDay < 1) {								
			code = code + "<td></td>";
		}
			
		// print the TD for the each day, when countDay is greather than 0 
		if (countDay > 0) {		
		
			if(countDay == targetDay){  // If countDay is equal to targetDay, add the id for style
				code = code + "<td id='dday'>" + countDay + "</td>";
			} 
			else if(dateExist){
					code = code + "<td id='tday'>" + countDay + "</td>";
			}
			else {					// If it is not the target day, create teh TD with style
				code = code + "<td>" + countDay + "</td>";
			} 
		}
		
		//increment the column to print
		col ++;										
		
		// if col is 7, reset to sunday	to print a new row
		if(col == 7) {								
			code = code + "</tr>";
			col = 0;
		}
		
		//increment loop variable
		countDay ++;									
	}
		
	//close the calendar table
	code = code + "</table>";
			
	//print the calendar inside the div BottomLeft
	document.getElementById("BottomLeft").innerHTML = code;

} // end of function buildCalendar

function checkDate(tempDate){
	for(var i = 0; i < index; i++){
		var temp1 = tempDate.toDateString();
		var temp2 = tasks[i]["date"].toDateString();
		if(temp1 == temp2){
			return true;
		}
	}
	return false;
}

function getMonthName(monthNumber) {
	// create an array with the name of the months
	var monthName = [];	
	monthName[0] = "January";
	monthName[1] = "February";
	monthName[2] = "March";
	monthName[3] = "April";
	monthName[4] = "May";
	monthName[5] = "June";
	monthName[6] = "July";
	monthName[7] = "August";
	monthName[8] = "September";
	monthName[9] = "October";
	monthName[10] = "November";
	monthName[11] = "December"; 

	// return the content of the month for position monthNumber
	return monthName[monthNumber];
	
} // end of function getMonthName

