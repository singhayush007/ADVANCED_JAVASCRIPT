/*
 Q: 44 Guess the output: 
 let date = new Date(0);
 console.log(date.toString());


 let date = new Date(0);
console.log(date.toString()); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
 */

/*
 Q:45 Validate that user's selected date range is no longer than 30 days. 


 let nowDate = new Date("2025-04-23");

let userDate = new Date("2025-08-25");

let diff = userDate - nowDate;
let numOfDays = Math.floor(diff / 1000 / 60 / 60 / 24);

if (numOfDays > 30) {
  console.log("Date is Expired!");
} else {
  console.log("Congratulations ! You have successfuly submitted your form.");
}
 */

/*
 Q: 46 Calculate difference between two dates in the format of"_years_months_days_hours_minutes_sec"

 let startingDate = "2000-09-27T05:40:13Z";
let endingDate = "2025-10-17T07:40:13Z";


function takeDifference(start , end){
    let startDate = new Date(start);
    let endDate = new Date(end);

    let diff = Math.floor((endDate - startDate)/1000);
    let years = Math.floor(diff/(60*60*24*365));
    diff %= 60*60*24*365
   let months = Math.floor(diff/(60*60*24*30));
   diff %= 60*60*24*30

   let days = Math.floor(diff/(60*60*24));
   diff %= 60*60*24;
   let hours = Math.floor(diff/(60*60));
   diff %= 60 * 60;
   let minutes = Math.floor(diff/60);
   diff %= 60;

   let seconds = diff;

   return `${years}_Years_${months}_months_${days}_days_${hours}_hours_${minutes}_minutes_${seconds}_seconds`;
}
   console.log(takeDifference(startingDate , endingDate));
*/

/*
 Q: 47 Add or substract n days from a given date(E.G Add 7 days to "2025-05-01")

 let n = 5;
let startingDate = new Date ('2024-04-28T08:23:13.234Z')

let newDateTimeStamps = startingDate.getTime() + 5 *24 * 60 * 60 * 1000
let newDate = new Date(newDateTimeStamps);
console.log(newDate);
 */

/*
 Q: 48 Calculate the user's age from their date of birth.

 let dob = new Date("2000-09-27");
let currentDate = new Date();
let age = currentDate.getFullYear() - dob.getFullYear();
let monthDiff = currentDate.getMonth() - dob.getMonth();
let daysDiff = currentDate.getDate() - dob.getDate();

if (monthDiff < 0 || (monthDiff === 0 && daysDiff < 0)) {
  age--;
}
console.log(age);
*/

/* 
 Q: 49 Wite a format Date(date str)funcion that return a user-friendly format liek JAN 1 , 2025 . Why is it better to centralize this logic in a utility.
 */

let date = "2025-10-18T12:12:12.234Z";

function formatDate(dateStr) {
  let date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

let formatedDate = formatDate(date);
console.log(formatedDate)

/*
 Q:50 What are the different options and parameters available in toLocaleString and toLocaleDateString etc to 
 */
