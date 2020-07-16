// Go lang simple program which greet the user

// Every go file must specify it package
package main // If specify package main Go compiler create exe file

// import required package
import "fmt" // formating package

/**
Syntax

func FunctionName( Parameter ) Returntype{}
*/
func greeting(name string) {
	fmt.Println("Hi, " + name)
	fmt.Println("Congrats you have successfully run the Go program")
}

// Go entry point function
func main() {
	fmt.Println("Welcome to Golang World")

	var name string // declaring variable
	fmt.Print("Enter your name: ")
	fmt.Scanln(&name) // accepting user input

	greeting(name)
}
