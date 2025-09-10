// let subscriptionType = "Premium"; // Change this to "Standard" or any other value to test different outputs

// if(subscriptionType === "Premium"){
//     console.log("You have access of all content")
// }else if(subscriptionType === 'Standard'){
//     console.log("You have access to limited content")
// }else{
//     console.log("Not a valid subscription");
// }



let hasSubscription = true;
let subscriptionType = "Premium";

if(hasSubscription){
    if(subscriptionType === "Premium"){
        console.log("You have access to all content");
    }else if(subscriptionType === "Standard"){
        console.log("You have access to limited content");
    }else{
        console.log("Unknown Subscription Type");
    }
} else {
    console.log("You do not have a subscription , Please subscribe to access content");
}