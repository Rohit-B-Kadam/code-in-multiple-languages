// Importing standard Cpp io header file
#include<iostream>

using namespace std;

// Function which greet user
void greeting( string name)
{
    // display some greeting text which include user name
    cout << "Hi, " << name << endl;               
    cout << "Welcome to World of Cpp" << endl;
}


// Entry function of cpp
int main()
{
    string name;                    // declare a string variable to store a user name
    
    cout << "Enter your name: ";    // display a message(Enter your name) on console 
    cin >> name;                    // accept user inputs

    greeting(name);                 // call user defined function - greeting
}