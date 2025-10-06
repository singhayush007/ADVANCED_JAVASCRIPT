let ojb = {
    FirstName: "Ayush",
    middleName : "Pratap",
    lastName : "Singh"
}

let convertToFullName = (param)=> {
    return `Full name is ${param.FirstName} ${param.middleName} ${param.lastName}`
}

let fullName = convertToFullName(obj)
console.log(fullName);