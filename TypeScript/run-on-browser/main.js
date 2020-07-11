var welcomeMessageRef = document.getElementById("welcomeMessage");
var nameRef = document.getElementById("name");
var displayMessageRef = document.getElementById("displayMessage");
welcomeMessageRef.textContent = "Welcome to the TypeScript World";
function onSubmit() {
    var greetMessage = "";
    var name = nameRef.value;
    if (name) {
        greetMessage = "Hi, " + name + ". Congrats you have successfully run the TypeScript program";
    }
    else {
        greetMessage = "Please enter your name";
    }
    displayMessageRef.textContent = greetMessage;
}
//# sourceMappingURL=main.js.map