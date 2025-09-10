// LOCAL STORAGE AND SESSION STORAGE

/*
-->Both Local Storage and Session Storage are part of web Storage . API used to store key value pairs in the browser.
-->Store Data in the Browser (No server Needed).
-->Improve User Experience (keep user setting and user Specific).
-->Fast and Easy Access.
-->Easy to use API.
-->Foundation for advanced Topics (IndexDB , Cookies , PWA).
*/

// Setting Data

localStorage.setItem("username", "Ayush");

sessionStorage.setItem("sessionId", "Ayush123");

// Getting Data

localStorage.getItem("username");
sessionStorage.getItem("sessionId");

// Note : We can also get and set item using dot notation similar to objects.

// Removing Data.

localStorage.removeItem("username");
sessionStorage.removeItem("sessionId");

// Clearing all data

localStorage.clear();
sessionStorage.clear();

// Storing Object

const user = {
  name: "Ayush Singh",
  partner: "Coding",
};

localStorage.setItem("userData", JSON.stringify(user));
JSON.parse(localStorage.getItem("userData"));

console.log(getUser.name);
console.log(getUser.partner);

// Getting Key : Get the key name at given index:

localStorage.key(1);
// get the name of key at the 1st Index.

// Getting Length : Getting the length of local Storage using "length" property.

localStorage.length;

/*
1: Browser Limitations

--> Most Modern browser allow around 5 to 10 MB per origin.
--> Trying to exceed it throws a QuotaExceedError.
*/

/*
2:Data Type Limitation

-->Only String can be stored.
-->You must JSON.stringyfy() complex data types(arrays, objects)
*/

/*
3: Security

-->Not secure for sensitive data(passwords , tokens)- accessible via JavaScript.
-->Vulnerable to Cross-Site Scripting (xss) if not properly sanitized.
*/

/*
ORIGIN BASED STORAGE

1: You cannot access local Storage or Session storage data across origins.

-->Data stored on https://siteA.com is not accssible on https://siteB.com

2: The data is only available to: 
--> That specific domain.
--> On that browser.
--> On that device.
--> In that user profile(Chrome profiles are separate)

3: Even if you open "example.com" in incognito mode , its local storage will be separated from the normal browser window.
*/
