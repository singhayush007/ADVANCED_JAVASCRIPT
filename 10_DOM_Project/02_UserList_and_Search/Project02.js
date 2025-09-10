// Step 1: HTML ke andar jis element mein users dikhane hain (cards format mein),
// uss container ko JavaScript mein select kar rahe hain using querySelector.
// '.userContainer' ka matlab hai — class="userContainer"
let userContainer = document.querySelector('.userContainer');


// Step 2: Users ka data ek array of objects ke form mein diya gaya hai.
// Har object ek user ko represent karta hai, jisme profile image, name, aur email diya gaya hai.
const arr = [
    {
        profileUrl : "https://blackhattalent.com/wp-content/uploads/2023/08/Pankaj-Tripathi6.jpg",
        name : "Pankaj Tripathi",
        email : "pankajtripathi01@gmail.com"
    },
    {
        profileUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntxIVWX_0_C9zG10soI9nq-hHgnsFH6kgYw&s",
        name : "Ali Fazal",
        email : "alifazal1@gmail.com"
    },
    {
        profileUrl : "https://img.mensxp.com/media/content/2020/Sep/Untitled-design-78_5f719721a4e97.png",
        name : "Divyenndu Sharma",
        email : "divyenndusharma01@gmail.com"
    },
    {
        profileUrl : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/vikrant-massey-131233151-3x4.jpg?VersionId=gDtpgfsrM3a_GGozVtnW9rb8NWgJ268",
        name : "Vikrant Massey",
        email : "vikrantmassey01@gmail.com"
    },
    {
        profileUrl : "https://i.pinimg.com/736x/ba/d7/67/bad767bb57f7f4093320927679e8f230.jpg",
        name : "Shweta Tripathi Sharma",
        email : "shwetatripathisharma01@gmail.com"
    },
    {
        profileUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboos3ZSI_NFrfI3lM18XGXTZJRxj7LuEqrw&s",
        name : "Rasika Dugal",
        email : "rasikadugal01@gmail.com"
    }
]

// Step 3: renderUsers() function banaya gaya hai jo HTML mein users ko dikhata hai.
// is function ko data (arr) pass kiya jaata hai.

function renderUsers(arr) {
    // Pehle se jo users display ho chuke hain, unhe clear kar do.
    userContainer.innerHTML = '';

    // Har user ke liye ek naya card (div) create karo.
    arr.map(function (obj) {
        // Object destructuring: profileUrl, name, aur email ko obj se extract kar rahe hain
        let { profileUrl, name, email } = obj;

        // Ek naya div element banao user ke liye
        let divElem = document.createElement('div');
        divElem.className = 'userItem'; // CSS class add ki jaa rahi hai (styling ke liye)

        // Us div ke andar inner HTML set kar rahe hain:
        // - ek image (profile)
        // - naam
        // - email
        divElem.innerHTML = `
            <div class="image">
                <img src=${profileUrl} alt="error loading image">
            </div>
            <div class="userDetails">
                <h3>${name}</h3>
                <p>${email}</p>
            </div>
        `;

        // Jo div banaya hai usse userContainer ke andar append kar rahe hain.
        userContainer.append(divElem);
    });
}



// Step 4: Jab page load hota hai, to pehle se sabhi users ko dikhana hai.
// Isliye renderUsers(arr) call kar diya.
renderUsers(arr);



// Step 5: Jab user search kare (input type kare), tab filtering hona chahiye.
// handleSearch() function input box se value uthakar uske according users filter karta hai.

function handleSearch(e) {
    // User jo type kar raha hai uska value le rahe hain
    let searchValue = e.target.value;

    // Original users array (arr) ko filter kar rahe hain
    // Agar name ya email input ke andar typed text ko include kare to use match samjhte hain
    let filteredUsers = arr.filter(obj => {
        return (
            obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            obj.email.toLowerCase().includes(searchValue.toLowerCase())
        );
    });
    

    // Filtered list ke according users ko dikhana
    renderUsers(filteredUsers);
}


// Step 6: Jab user input field mein kuch type kare, tab 'input' event trigger hoga.
// Us par handleSearch() function ko call kar rahe hain.

searchInput.addEventListener('input', handleSearch);
