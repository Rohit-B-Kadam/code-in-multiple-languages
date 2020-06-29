// Importing standard C io header file
#include<stdio.h>

// Function which greet user
void greeting( char* name)
{
    printf("Hi, %s\n", name);    // 
    printf("Congrats you have successfully run the c program\n");
}


// Entry function of c
int main()
{
    printf("Welcome to the C World\n");
    char name[20]; // declare a string variable to store a user name
    
    printf("Enter your name: ");    // display a message(Enter your name) on console 
    scanf("%s", name);               // accept user inputs

    greeting(name);    // call user defined function - greeting
}