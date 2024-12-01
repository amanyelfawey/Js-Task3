// Exercise 1:
//  • Ask the user to enter a string
//  • Create a function that accepts a string and returns the number of vowels in that string
// (vowel characters are : a,e,o,u,i)
//  • Count the number of vowels in that string using the created function

// var strText = prompt("Please Enter a String");
// var strArr = strText.toLowerCase().split("");
// var Count = 0;

// function getVowelsNum(strArr) {
//   for (var i = 0; i < strArr.length; i++) {
//     if (
//       strArr[i] == "a" ||
//       strArr[i] == "e" ||
//       strArr[i] == "o" ||
//       strArr[i] == "u" ||
//       strArr[i] == "i"
//     ) {
//       Count++;
//     } else {
//     }
//   }
//   return Count;
// }
// console.log("The Count of the vowels in the string = " + getVowelsNum(strArr));

// -----------------------------------------------------------------------------------------------------------------------------------

// Exercise 2:

// var empNames = prompt(
//   "Please Enter Names of Employees in a Comma Separated format"
// );
// var empArr = empNames.split(",");

// var empSalary = prompt(
//   "Please Enter Salary of Employees in a Comma Separated format"
// );
// var salArr = empSalary.split(",");

// for (var i = 0; i < empArr.length; i++) {
//   if (empArr.length == salArr.length) {
//     var nameOfEmp = document.getElementById("emp");
//     nameOfEmp.innerHTML += `Name : ${empArr[i]} <br/> salary : ${salArr[i]} <hr/>`;
//   } else {
//     alert("ERROR !! the count does not match ");
//   }
// }

// var EmployeeSearch = prompt("Enter a name of an employee");
// EmployeeSearch = EmployeeSearch.toLowerCase();

// var searchedEmp = document.getElementById("searchemp");
// function SearchforEmployee(EmployeeSearch) {
//   for (var i = 0; i < empArr.length; i++) {
//     if (EmployeeSearch.includes(empArr[i])) {
//       return (searchedEmp.innerHTML = ` ${empArr[i]} <br/> ${salArr[i]}`);
//     }
//   }
// }

// SearchforEmployee(EmployeeSearch);

// ----------------------------------------------------------------------------------------------
// •Exercise 3:

// var studArr = [];

// var studUl = document.createElement("ul");
// for (var i = 0; i < 5; i++) {
//   var names = prompt(`Enter name ${i + 1}:`);
//   var studLi = document.createElement("li");
//   studLi.innerHTML = `${i + 1} - ${names}`;
//   studUl.appendChild(studLi);
//   studArr.push(names);
// }
// console.log(studArr);

// var studentsListSection = document.getElementById("studentsList");
// studentsListSection.appendChild(studUl);

// ----------------------------------------------------------------------------------------------
// •Exercise 4:


// var SearchStud = prompt("Enter a Student Name to Search for ");
// SearchStud = SearchStud.toLowerCase();
// var res = document.getElementById("result");

// function getSearchedStud(SearchStud) {
//   for (let i = 0; i < studArr.length; i++) {
//     if (SearchStud.includes(studArr[i])) {
//       return (res.innerHTML = `<p> Found </p> and it's order is ${i+1}`);
//     }
//   }
//   return (res.innerHTML = `<p>Not Found</p>`);

// }
// getSearchedStud(SearchStud);

// ----------------------------------------------------------------------------------------------
// •Exercise 5:


// var RandomNumber =document.getElementById("randomNumber");
// function getRandomNumber(){
//   var RndmNum=Math.floor(Math.random()*6) + 1
//   return (RandomNumber.innerHTML =`<p>The Number :</p>` + RndmNum);
 
// }

// function RemoveNumbers(){
//   return (RandomNumber.innerHTML =`<p> </p>` );
// }

// var yesBtn=document.getElementById("yes-btn")
// yesBtn.addEventListener('click',getRandomNumber)

// var noBtn=document.getElementById("no-btn")
// noBtn.addEventListener('click',RemoveNumbers)


// ----------------------------------------------------------------------------------------------

// •Exercise 6 :


// var image =document.getElementById("image")
// var button =document.getElementById("button")
// function toggleBtn(){
//   if(button.innerText === "Turn on"){
//     image.src="./assets/on.jpg"
//     button.style.backgroundColor ="yellow";
//     button.innerText='Turn Off'
//   }else{
//     image.src="./assets/off.jpg"
//     button.style.backgroundColor ="gray";
//     button.innerText='Turn on'
//   }
// }
// button.addEventListener('click',toggleBtn)