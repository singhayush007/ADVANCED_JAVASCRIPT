let obj = {
    firstName: "Ayush",
    middleName : "Pratap",
    lastName : "Singh"
}

let convertToFullName = (obj)=> {
    return `${obj.firstName} ${obj.middleName} ${obj.lastName}`
}


let fullName = convertToFullName(obj)
console.log(obj);