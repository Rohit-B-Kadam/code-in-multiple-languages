// Importing standard C io header file
#include<stdio.h>

// Function which greet user
void greeting( char* name)
{
    printf("Hi, %s\n", name);    // 
    printf("Welcome to World of C\n");
}


// Entry function of c
int main()
{
    char name[20]; // declare a string variable to store a user name
    
    printf("Enter your name: ");    // display a message(Enter your name) on console 
    scanf("%s", name);               // accept user inputs

    greeting(name);    // call user defined function - greeting
}