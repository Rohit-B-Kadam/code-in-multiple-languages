// This is JavaScript simple program

// Get Html element reference
let welcomeMessageRef = document.getElementById("welcomeMessage")
let nameRef = document.getElementById("name")
let displayMessageRef = document.getElementById("displayMessage")

// Display message on Html page
welcomeMessageRef.textContent = "Welcome to the JavaScript World"

// Callback function which will call when user submit the form
function onSubmit()
{
    let greetMessage = ""
    name = nameRef.value        // get value
    if(name)                    // not empty
    {
        greetMessage = `Hi, ${name}. Congrats you have successfully run the JavaScript program`
    }
    else
    {
        greetMessage = "Please enter your name"
    }

    displayMessageRef.textContent = greetMessage    // Displaying message
}