// Let's Build a Project

// Fetch : Fetch is a built in javascript function used to make HTTP requests (like GET, POST , PUT , DELETE) to a server or API . (It is like "Hey Server please give me a some data!")

// What is CRUD?

// CRUD Stands For:

//1: CREATE
//2: READ
//3: UPDATE
//4: DELETE

// These are the 4 basic operations we perform on data.

let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector(".addBtn");
let todoContainer = document.querySelector(".todoContainer");

let API = "https://685beda389952852c2db8b2a.mockapi.io/api/v1/todos";

addBtn.addEventListener("click", postData);

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();

  if (data) {
    todoContainer.innerHTML = "";

    data.forEach((obj) => {
      let div = document.createElement("div");
      div.className = "todo";
      div.innerHTML = `
            <p class='paraText'>${obj.text}</p>
            <input id="editInput" type="text" placeholder="Enter your task..!!" value='${obj.text}'>
            <div>
                <button class='deleteBtn'>Delete</button>
                <button class='editBtn'>Edit</button>
                <button class='saveBtn'>Save</button>
            </div>
            `;

      let deleteBtn = div.querySelector(".deleteBtn");
      let editBtn = div.querySelector(".editBtn");
      let saveBtn = div.querySelector(".saveBtn");
      let paraText = div.querySelector(".paraText");
      let editInput = div.querySelector("#editInput");

      deleteBtn.addEventListener("click", function () {
        deleteData(obj.id);
      });

      editBtn.addEventListener("click", function () {
        editBtn.style.display = "none";
        saveBtn.style.display = "inline";
        paraText.style.display = "none";
        editInput.style.display = "inline";
      });

      saveBtn.addEventListener("click", async function () {
        let editValue = editInput.value;
        let response = await updateData(obj.id, editValue);
        if (response.status === 200) {
          editBtn.style.display = "inline";
          saveBtn.style.display = "none";
          paraText.style.display = "inline";
          editInput.style.display = "none";
        }
      });

      todoContainer.append(div);
    });
  }
}

async function postData() {
  let value = taskInput.value;

  let objData = {
    text: value.trim(),
  };

  let response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });

  if (response.status === 201) {
    fetchData();
    taskInput.value = "";
  }
}

async function updateData(id, value) {
  let objData = {
    text: value.trim(),
  };

  let response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });

  return response;
}

async function deleteData(id) {
  let response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  if (response.status === 200) {
    fetchData();
  }
}

fetchData();

// JavaScript is not asynchronous, it is synchronous by default.


// API call return promises and said when i get the data i'll send you, but don't block the code.

// ASYNC AWAIT : 

// but agar apne function async bana diya hai to async function ka behaviour kuch aaisa hota hai ki agar aap uske andar fetch waigera use karte ho  and await karte ho to aage ka task wo tabtak nahi karega jabtak apka async task complete nahi ho jaata...





