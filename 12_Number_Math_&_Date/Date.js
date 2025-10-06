// DATES in JavaScript

// Fundamentals

// 1: GMT (Greenwich Means Time) Time Zone

// 2: UTC (Coordinated Universal Time)

// 3: ISO Standard (International Organisation for Standarization)

/*
let date = new Date();
console.log(date); // UTC (Z represent UTC Time)
console.log(date.toString()); // IST
console.log(date.toISOString());
*/

// UNIX Time and UNIX Epoch
// Unix Epoch is the zero point for time in most computer systems , especially those based on Unix (including Linux , macOS, and modern Operating System).

//  So, the UNIX Epoch is the starting Point.

// January 1 , 1970 , 00:00:00 UTC

// Unix Time (or Epoch Time) = Number of seconds (or milliseconds) sice that moment

// Date.now(); // gives milliseconds since epoch

// Used in almost every programming language (including JavaScript).

// Creating a Date:

// 1: No Arguments (Current Date and Time)
/*
let now  = new Date(); // Current Date and Time
*/

// 2: Date String (ISO or Other Formats)
/*
let date1 = new Date ("2025-08-08-19T12:00:00"); ISO FORMAT (RECOMMENDED)
// let date2 = new Date("May 19, 2025 12:00:00") // Long Format
// Let date3 = new Date("2025/08/08 12:00:00"); // SLash Format (less reliable)
*/

// 3: Numbers: new Date(year , onthIndex , day , hours , minutes , seconds , ms)
/*
let date4 = new Date ("2025, 4, 19, 12, 0, 0") // May 19 , 2025 , 12:00:00
*/

// 4: Milliseconds , since Epoch 9(Unix timestamp)
/*
let date5 = new Date(1247632000000); // Milliseconds since Jan1 , 1970
*/

// 5: Copy Another Date
/*
let original = new Date("2025-05-19");
let copy = new Date(original);
*/

// Getting Parts of The Date

/*
let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());// Due to indexing method it show (month -1) so according to this 11 months
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTimezoneOffset());
*/

// Setting Parts of the date
/*
now.setFullYear('2026');
now.setMonth(0);
now.setDate(12);
*/

// Working with Timestamp
/*
let date = new Date();
console.log(date.getTime()/1000/60/60/24/365)
*/

// Formatting Dates

/*
let date = new date();
console.log()
date.toISOString();
date.toString();
date.toDateString();
date.toTimeString();
date.toLocaleDataString();
date.toLocaleTimeString();
*/

// Custom Formatting (like dd/mm/yyyy):

/*
let d = new Date();
let formatted = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
*/

// Method  ----> What it returns

// 1: toISOString() ---> Standard UTC Format(ISO 8601)

// 2: toString() --> Full date and time string.

// 3: toDateString() ---> Date only (weekdays , month , year).

// 4: toTimeString() ---> Time only with time zone.

// 5: toLocaleDateString() ---> Local date format (e.g DD/MM/YYYY).

// 6: toLocaleTimeString() ---> Local Time Format (e.g., 12 hour).

// NOTES :

// 1: Months are zero indexed in JS 0 = January, 11 = December
// 2: JS Date is bsed on UTC internally , but display in local time.
// 3: Date calculations can be tricky - Consider liabraies like luxon , Day.js or date-fns for advanced use.

// Calculations on Time Stamps.

// 1: What is timestamps?
// A timestamp is the number of milliseconds since the UNIX Epoch(Jan 1 , 1970UTC)
// In JS , Date , Object iternally store time as timestamp

// 2: Getting The Current Timestamp
// Use Date.now() to get current timestamp.
// Const now = Date.now(); // milliseconds since Jan 1, 1970

// 3 Convert Date to TimeStamp
// use getTime() on a Date Object:
/*const date = new Date();
const timestamp = date.getTime();*/

// 4: Convert TimeStamp to date
// Pass the timestamp to the Date Constructor:

/*
const date = new Date(171328472393);
console.log(date);
console.log(date.toLocaleDateString());
*/



// 5: Adding or Subsracting Time
// Timestamps are in milliseconds , so you can add or suntract directly.

// 1 Sec = 1000ms
// 1 Minute = 60*1000ms
// 1 Hour = 60*60*1000ms

// example:
// const oneHourLater = Date.now() + 60 * 60 * 1000;

// 6: Calculating Differences Between Dates.

// Subtract timestamps to find duration.
/*
const start = new Date("2025-05-20T10:00:00Z");
const end = new Date("2025-05-20T12:00:00Z");
const diffMs = end - start; // in milliseconds
const diffHours = diffMs / (1000 * 60 * 60);
*/
// 7: Converting Milliseconds to Human Units

// Convert Milliseconds into readable time:
/*
const ms = 5405000;
const minutes = Math.floor(ms / 1000 / 60);
const seconds = (ms % 60000) / 1000;
console.log(`${minutes} min ${seconds} sec`);


let milli = 65000;
let min = Math.round(milli/1000/60);
milli % (1000/60);
milli % (1000*60)/1000;
console.log(min);
*/

