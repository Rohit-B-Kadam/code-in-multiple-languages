# This is python simaple program

# For this program we not required any imports

####NOTE#####
#   1. Since python is interpreted language so their is no entry function it runs from starting line
#   2. Indentation is very important in python.  


def greeting(name: str):
    print(f"Hi, {name}")
    print("Congrats you have successfully run the python program")


if __name__ == "__main__":  # Here I check is this file main run file
    print("Welcome to the Python World")       # display a message on console

    name = input("Enter your name: ")        # accepting string value from user inputs
    greeting(name)                           # Calling user defined function
