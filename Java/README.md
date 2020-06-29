# Java Programming Language

- Java is a general-purpose programming language. Its purely object-oriented. 
- Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle) and released in 1995
- Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture

---

## Run a simple Java Program

1. First we must have java-sdk to build and run java program. Below I have install openjdk-java14
    ```bash 
    $ sudo apt install openjdk-14-jdk
    ```

1. Create .java extension file and write java program. Refer code- [SimpleProgram.java](./SimpleProgram.java)

1. Now we will compile java program to bytecode(SimpleProgram.class)
    ```bash
    $ javac SimpleProgram.java 
    ```

1. Now, We run bytecode on JVM

    ```bash
    $ java SimpleProgram
    ```

## Java Language Features

1. __Object Oriented__
1. __Platform Independent__
1. __Secure__
1. __Multithreaded__ 
1. __Auto Garbage Collector__


## Application and Real-World Example
- __Graphic User Interface(GUI) Application__ -> (JAVAX)
- __Server-side Programming__ -> (Frame-work: spring-boot)
- __Database Framework__ -> Hibernate
- __Android Development__
- __Automation__

## Advantage

- Portable (can run any platform and architecture)
- No Memory leak problem.

## Disadvantage

- Performance slow than cpp because it run on JVM.
- We have to write more boilplated code.
