const loadButton = document.getElementById("load-user-btn");
loadButton.addEventListener("click", loadusers);

const clearbtn = document.getElementById("clear-btn");
clearbtn.addEventListener("click", clearUsers);

async function fetchUsers () {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
}

function makeUserList(params) {
  let lists = params.map(each => {
    const item = document.createElement("li");
    item.textContent = each.name;
    return item;
  })
  return lists;
}

function loadusers () {
  const employeesContent = document.querySelector("#employees");
  const loading = document.createElement("span");
  loading.textContent = "Loading...";
  employeesContent.appendChild(loading)
  
  fetchUsers().then(result => {
    let userList = makeUserList(result);
    clearUsers();
    userList.forEach(each => employeesContent.appendChild(each))
  }).catch(error => {
    console.log("Getting User Data failed", error.message);
  })
  console.log(employeesContent);
}

function clearUsers () {
  const employeesContent = document.querySelector("#employees");
  employeesContent.replaceChildren();
}


<div id="main">
  <button id="load-user-btn" type="button">Load Users</button>
  <button id="clear-btn" type="button">Clear</button>
  <ul class="employee-list" id="employees"></ul>
</div>
