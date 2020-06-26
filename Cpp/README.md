# C++ Programming Language

- C++ is a general-purpose, procedural and object oriented programming language. 
- C++ was created by Bjarne Stroustrup at 1985.
- C++ is similar to C language with classes.
- Modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation

---

## Runing simpleProgram.c file

1. First we must have g++ compiler to compile c program into machine code
    ```bash 
    $ sudo apt install g++
    ```

1. Create .cpp extension file and write cpp program. Refer code- [simpleProgram](./simpleProgram.cpp)

1. Now we will compile c program to machine code(out.exe)
    ```bash
    $ g++ simpleProgram.cpp -o out.exe
    ```

1. Run executable file ie. out.exe

    ```bash
    $ ./out.exe 
    ```

## C++ Language Features

1. __Object-oriented:__ C++ is an object-oriented programming language. This means that the focus is on “objects” and manipulations around these objects.

2. __Rich library support:__ Through C++ Standard Template Library (STL) many functions are available that help in quickly writing code. For instance, there are standard libraries for various containers like sets, maps, hash tables, etc.

3. __Speed:__ C++ is the preferred choice when latency is a critical metric. The compilation, as well as the execution time of a C++ program, is much faster than most other general purpose programming languages.

4. __Compiled:__ A C++ code has to be first compiled into low-level code and then executed, unlike interpreted programming languages where no compilation is needed.

5. __Pointer Support:__ C++ also supports pointers which are widely used in programming and are often not available in several programming languages


## Application and Real-World Example
- Operating System (Kernal, Device Driver) -> MacOS, Windows and Linux.
- Graphics (OpenGL) -> Games, Editing s/w
- Embedding Syste -> IOT devices
- Build Framework -> nodejs, tensorflow
- Database -> mysql is wriiten in cpp
- Browsers -> Chorme, Firefox ..etc
- Compilers of various high level languages

## Advantage

- Speed
- Close to hardware

## Disadvantage

- We have to explicitly handle all dynamic memory this can lead to memory leak problem.