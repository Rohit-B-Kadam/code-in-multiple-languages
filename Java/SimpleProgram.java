// This is java simaple program

// Importing Required packages 
import java.util.Scanner;                                   // Import the Scanner class


// Entry class : class name should be same as a file name
class SimpleProgram
{
    // static function
    public static void greeting(String name)
    {
        System.out.println("Hi, " + name);
        System.out.println("Congrats you have successfully run the java program");
    }

    // Entry function of java
    public static void main(String[] args)
    {
        String name;                                        // declare a string variable to store a user name

        System.out.println("Welcome to the JAVA World");    // display a message on console
        
        System.out.print("Enter your name: ");
        Scanner sc = new Scanner(System.in);                // creating object of scanner class to accept user input from console
        name = sc.next();                                   // accepting string value from user inputs
        
        greeting(name);                                  // Calling user defined function
    }
}