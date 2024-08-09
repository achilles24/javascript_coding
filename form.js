// Import stylesheets
import './style.css';

const formElement = document.getElementById("emp-form");
const userNameInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
formElement.addEventListener("submit", handleSubmit);
userNameInput.addEventListener("change", handleUserNameInput);
passwordInput.addEventListener("change", handlePasswordInput);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userName = formData.get("userName");
  const password = formData.get("password");
  const userNameError = document.querySelector(".validation-error.userName");
  const passwordError = document.querySelector(".validation-error.password");
  if (userName.length === 0) {
    userNameError.classList.remove("hidden");
    if (password.length === 0) {
      passwordError.classList.remove("hidden");
    }
  } else if (password.length === 0) {
      passwordError.classList.remove("hidden");
  } else if (userName.length > 0 && password.length > 0) {
      console.log({userName, password});
  }
}

function handleUserNameInput () {
  if (userNameInput.value.length > 0) {
    const userNameError = document.querySelector(".validation-error.userName");
    userNameError.classList.add("hidden");
  } 
}

function handlePasswordInput () {
  if (passwordInput.value.length > 0) {
    const passwordError = document.querySelector(".validation-error.password");
    passwordError.classList.add("hidden");
  }
}
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1, h2 {
  font-family: Lato;
}
.validation-error {
  color: red;
}
.validation-error.userName.hidden,
.validation-error.password.hidden {
  display: none;
}
```

```html
<div id="app">
  <form id="emp-form">
		<div>
			<label for="email">User Name:
        <input id="email" name="userName" type="text" placeholder="Enter User Name"/>
      </label>
      <p class="validation-error userName hidden">Please Enter UserName</p>
		</div>
		<div>
			<label for="password">Password: 
        <input id="password" name="password" type="password" placeholder="Enter Password"/>
      </label>
      <p class="validation-error password hidden">Please Enter Password</p>
		</div>
		<button type="submit">Submit</button>
	</form>
</div>
```
