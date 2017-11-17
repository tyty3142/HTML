var students = [];


students[0] = [];

students[0][0] = "John Doe";
students[0][1] = 25;
students[0][2] = "Malarky";

students[1] = [];
students[1][0] = "Yukki";
students[1][1] = 698;
students[1][2] = "11111111111";



document.write(students[0][0]);


for(var i = 0; i < students.length; i++){
	document.write("<h2>" + students[i][0] + "</h2>");
}


// var list1 = [];
// list1[0] = "Me";
// list1[1] = "25";
// list1[2] = "851652594";
// 
// 
// var list2 = ["Mark", "Frank", "Cris", "Bob"];
// 
// document.write(list2);
// 
// var size = list2.length;
// document.write("<p>" + size);
// 
// var search = prompt("Enter the name to search", "Bob");
// 
// var pos = list2.indexOf(search);
// document.write("<p>" + pos);
// 
// list2.push("Sergio");
// document.write("<p>" + list2);
// 
// list2.splice(1,3, "Tony");
// document.write("<p>" + list2);
// 
