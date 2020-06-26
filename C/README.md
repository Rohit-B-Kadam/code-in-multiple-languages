# C Program

- C is a general-purpose, procedural computer programming language. 
- C was originally developed at Bell Labs by Dennis Ritchie between 1972 and 1973 to construct utilities running on Unix.
- C is static typed language.
- C is compiled to direct machine code. So it is use mostly in system programming.

---

## Run a simple C program

1. First we must have g++ compiler to compile c program into machine code
    ```bash 
    $ sudo apt install g++
    ```

1. Create .c extension file and write c program. Refer code- [simpleProgram.c](./simpleProgram.c)

1. Now we will compile c program to machine code(out.exe)
    ```bash
    $ g++ simpleProgram.c -o out.exe
    ```

1. Run executable file ie. out.exe

    ```bash
    $ ./out.exe 
    ```

## Application and Real-World Example
- Operating System (Kernal, Device Driver) -> MacOS, Windows and Linux.
- Graphics (OpenGL) -> Games, Editing s/w
- Embedding Syste -> IOT devices
- Build Framework -> nodejs, tensorflow
- Database -> mysql is wriiten in cpp
- Browsers -> Chorme, Firefox ..etc
- Compilers of various high level languages