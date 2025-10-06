// Q: 1 Write a regular function that takes a string and returns it with the first letter capitalized.

/* function capitalizeFirstLetter(str) {
  console.log(str.charAt().toUpperCase()+str.slice(1));
}

capitalizeFirstLetter("ayush")*/

// Q: 2 Show an alert message that says " Please login" after 5 seconds on your website.

/* setTimeout(()=>{
     console.log(" Please login")
}, 5000); */

// Q: 3 Make an arrow function that takes a price and a discount , and returns the Price after discount.

/* let calculateDiscountedPrice = (price , discount)=>{
    let discountedPrice = price - price*(discount/100)
    return discountedPrice
}

let result = calculateDiscountedPrice(1550 , 15)
console.log(result)*/

// Q: 4 Create a function that builds a username from a full name.

/* function generateUsername (fullName){
   return "@" + fullName
}
console.log(generateUsername('ayush'))*/

// Q: 5 Write a function that takes a traffic light color and gives the correct instruction (eg. "go" , for green , "stop" for red , "caution". for yellow, and "invalid color" for anything else).

/*
function generateInstructions(color) {
    if (color === 'green') {
        return "go"
    } else if (color === 'red') {
        return "stop"
    } else if (color === 'yellow') {
        return "caution"
    } else {
        return "invalid color"
    }
}

let inst = generateInstructions("aldsjflkdsj")
console.log(inst); 
*/

// Q: 6 Write a Function to count how many words are vowel and consonants from a given word.

/*
function vowelCount(string){ 
    let vowel = 0;
    let consto = 0;
    for(let i=0; i<string.length; i++){
        if(string[i] === 'a' || string[i] === 'e' || string[i]=== "i" || string[i]=== "o" || string[i]=== "u"){ 
        vowel++;
    }
    else{
        consto++;
    }
    }
    console.log("vowel:" + vowel);
    console.log("consto:" +consto);

}
vowelCount("hello");
*/

/* function countVowelsAndConsonants (word){
   let vowels = "aeiou";
   let vowelCount = 0;
   let consonantCount = 0;

   for (let i = 0; i < word.length; i++){
    let char = word[i].toLowerCase();

    if(char >= 'a'  && char <= 'z'){
        if(vowels.includes(char)){
            vowelCount++
        } else {
            consonantCount++;
        }
    }
   } 

   console.log("Vowels: " , vowelCount);
   console.log("Consonants: " , consonantCount);
}
countVowelsAndConsonants("Ayush123@");*/
