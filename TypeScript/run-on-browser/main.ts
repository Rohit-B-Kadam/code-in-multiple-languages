// This is TypeScript simple program

/**
 * NOTE:
 *  - You can mention datatype of variable 
 *  - but if your initialing that variable with an value it is not neccessary to write the datatype
 *         it will consider datatype depending upon value provider  
 */

// Get Html element reference
let welcomeMessageRef:HTMLElement = document.getElementById("welcomeMessage")
let nameRef = document.getElementById("name") as HTMLInputElement
let displayMessageRef = document.getElementById("displayMessage")

// Display message on Html page
welcomeMessageRef.textContent = "Welcome to the TypeScript World"

// Callback function which will call when user submit the form
function onSubmit()
{
    let greetMessage:string = ""
    let name = nameRef.value        // get value
    if(name)                    // not empty
    {
        greetMessage = `Hi, ${name}. Congrats you have successfully run the TypeScript program`
    }
    else
    {
        greetMessage = "Please enter your name"
    }

    displayMessageRef.textContent = greetMessage    // Displaying message
}