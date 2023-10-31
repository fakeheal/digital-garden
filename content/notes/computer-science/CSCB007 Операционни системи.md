---
title: CSCB007 Операционни системи
tags:
  - computer-science
---

> [!info]  
> 
> Записки от лекциите по [CSCB007 Операционни системи](https://ecatalog.nbu.bg/default.asp?V_Year=2019&YSem=3&Spec_ID=&Mod_ID=&PageShow=coursepresent&P_Menu=courses_part1&Fac_ID=3&M_PHD=&P_ID=832&TabIndex=&K_ID=30896&K_TypeID=10), водени от доц. Росица Голева  д-р.

## Въведение

> An Operating System is a program that acts as an intermediate interface between a user of a computer and the computer hardware.

Ако разделим ресурсите (диск, памет, мрежа, периферия, процесор) от консуматорите (потребители и програми), ОС се грижи за връзката между двете.

![диаграма на архитектурата на ОС](notes/assets/os-architecture.png#invert_B)

**Преимущества на UNIX ОС:**
- малко по размер
- гъвкава
- евтина

**Недостатъци на UNIX ОС:**
- няма поддръжка
- съдържа бъгове
- малко (или често никаква) документация

Преимуществата са надделяли на времето над недостатъците.

### Services на OS

![диаграма на услугите на ОС](notes/assets/services-of-os.png#invert_B)

**Services в помощ на потребителя:**
- User Interface
- Program Execution
- I/O operations
- File-system manipulation
- Communications
- Error detection

**Services за разпределение на ресурсите:**
- Resource allocation: when multiple users or multiple jobs running concurrently, resources must be allocated to each of them;
- Accounting: to keep track of which users use how much and what kinds of computer resources;
- Protection & Security:
	- Protection: involves ensuring that all access to system resources is controlled;
	- Security: of the system from outsiders requires user authentication, extends to defending external I/O devices from invalid access attempts

###  Command Line Interface

Command interpreter allows direct command entry. Primarily fetches a command from user and executes it. It can be implemented directly in kernel, or alternatively by systems program - `shell`. Several shells are possible.

Commands of a shell can be built-in, or be just names of programs. If the latter, adding new features doesn’t require shell modification.


### End-user and end-device interfaces

#### GUI

User-friendly **desktop** metaphor interface. Usually needs mouse, keyboard, and monitor. **Icons** represent files, programs, actions, etc. Various mouse buttons over objects in the interface cause various actions (provide information, options, execute function, open directory (known as a **folder**).

#### System calls

**System Calls** provide *Programming interface* to the services of the OS. Mostly, they are accessed by programs via a high-level *Application Program Interface* (API) rather than direct system call use.

Typically, a number is associated with each system call. This number is often, but not always, **called PID – Process Identifier**.

System-call interface maintains a table indexed according to these numbers. The system call interface invokes intended system call in OS kernel and returns status of the system call and any return values.

![диаграма на system call в OS](notes/assets/system-call-of-an-os.png#invert_B)

Three methods used to **pass parameters to the OS**:
- *(simplest)* pass the parameters in **registers**. In some cases, may be more parameters than registers (pass by value in C)
- Parameters stored in a **block**, or table, in memory, and address of block passed as a parameter in a **register** (pass by pointer in C)
- Parameters are placed, or **pushed onto the stack by the program** and **popped off the stack** by the operating system;

> Block and stack methods do not limit the number or length of parameters being passed.

### OS as a...

#### Resource Manager

- **Manages and protects multiple computer resources**: CPU, Processes, Internal/External memory, Tasks, Applications, Users, Communication channels, etc;
- **Handles and allocates resources to multiple users** or multiple programs running at the same time and space (e.g., processor time, memory, I/O devices);
- Decides between conflicting requests for **efficient and fair resource use** (e.g., maximize throughput, minimize response time);

#### Control Program

- Manages all the components of a complex computer system in an integrated manner;
- Controls the execution of user programs and I/O devices to prevent errors and improper use of computer resources;
- Looks over and protects the computer: Monitor, Supervisor, Executive module, Controller, Master, Coordinator, etc;

#### Command Executer

- Interfaces between the users and machine.  
- Supplies services/utilities to users.  
- Provides the users with a convenient CLI (Command Line Interface), also called a Shell (in UNIX), for entering the user commands.

#### Virtual Machine

An interface between the user and hardware that hides the details of the hardware (e.g., I/O).  Constructs higher-level (virtual) resources out of lower-level (physical) resources (e.g., files).

**Definition**: OS is a collection of software enhancements, executed on the bare hardware, culminating in a high-level virtual machine that serves as an advanced programming environment.

virtual machine = software enhancement = extended machine = abstract machine = layer = level.

### Mainframe Systems

#### Simple Batch System

A simple batch system consists of:
- **Monitor**: resident software that controls the sequence of events;
- **Memory protection**: some memory areas are accessible only to the monitor
- **Privileged mode instructions**: only accessible to the monitor
- **Interrupts** (early machines did not have this)

Such a system reduces setup time by batching similar jobs:
- Initially control is given to the monitor;
- The monitor automatically transfers control from one job to another;
- When a job completes control is transferred back to the monitor.

#### Uniprogramming vs Multiprogramming

**Uniprogramming**: one job (program) at a time; Processor must wait for I/O instructions to complete before proceeding

**Multiprogramming**: switching between jobs when possible; When one job needs to wait for I/O, the processor can switch to the other job; **event driven and time slotted**;

##  Архитектура и организация

![[notes/computer-science/GENB005 Основи на информатиката#Компютри с фон Нойманова архитектура|GENB005 Основи на информатиката]]

## Процеси

> A **process** is a single unit consisting of sequentially implemented events. The term is also used for the description of such unit.

The operating system must:
- allocate resources to processes,  
- enable processes to share and exchange information,
- protect the resources of each process from other processes,
- enable synchronisation among processes.

To meet these requirements, the operating system have to maintain an appropriate **data structure** for each process that describes the state and resource ownership of that process and that enables the operating system to exert process control.

The data structure is called "**process control block**":
- **identifier**: to distinguish it from all other processes
- **state**: is the process *running*, *ready*, *blocked*, etc
- **priority**: priority level relative to other processes
- **program counter**: the address of the next instruction to be executed
- **memory pointer**: includes pointers to the program code and associated data
- **context data**: data present in registers in the process while the process is executing
- **I/O status**: outstanding I/O requests, I/O devices assigned to this process, a list of files in use by the process, etc
- **accounting**: running time used, time limits, account numbers, etc

All this information allows for the process to be interrupted  and then resumed, as if the interruption had not occurred.

In order to create a new process the OS builds a data structure to manage it, allocates memory and assigns the process to the queue. OS takes the process out of the queue, de-allocates and deletes the data structure associated with the process.

Five State models & transition of states:
- Null -> New
- New -> Ready
- Ready -> Running
- Running -> Exit
- Running -> Ready
- Running -> Blocked
- Blocked -> Ready
- Ready -> Exit (user terminated)
- Blocked -> Exit (user terminated)

Processor is faster than I/O so many processes could be waiting for I/O. The idea of swapping is to move these processes to disk to free up more memory and use processor on more processes.

**Suspended Processes**:

A new state – ”*suspend*” must be introduced to describe the situation **Blocked** state becomes **suspend** state when swapped to disk. Processes in **Ready**, **Running** or **Blocked** state are in the main memory.

Reasons for suspending: 
- swapping
- other os reason
- interactive user request
- timing
- parent process request

Suspending Processes with 2 suspend states:
- Blocked/Suspended
- Ready/Suspended

Process control with the 2 new states:
- New -> Ready:  if there are enough available resources
- New -> Ready/Suspended: if higher priority processes are consuming the available resources
- Ready -> Ready/Suspended: can be moved between Ready and Ready/Suspend state depending on their priority
- Blocked/Suspended -> Ready/Suspended: if the unblocking event has occurred
- Blocked/Suspend -> Blocked: depending on priority or expectations of soon unblocking
- Running -> Ready/Suspended: if higher priority processes need the available resources

Complete specification of a process is kept in a **process image**. For managing different processes OS maintains a **primary process table** with one entry for each process. Each entry contains, at least, a pointer to a process image.

### Management tables

**Memory tables** are used to keep track of both main and secondary memory.
Must include information for:
- **Allocation** of main/secondary memory to processes
- Protection attributes for access to **shared memory** regions 
- Information needed to manage **virtual** memory

**I/O Tables** are used by the OS to manage the I/O devices of the computer.
The OS needs to know:
- Whether the I/O device is **available** or assigned  
- The **status** of I/O operation  
- The **location** in main memory being used for the I/O transfer

**File tables** provide information about: 
- Existence of files
- Location on secondary memory 
- Current Status  
- Other attributes.
Sometimes this information is maintained by a **file management system**.

### Process Image

A complete process specification consists of:
- **A program or set of programs** to be executed
- Associated with these programs set of data locations for **variables and constants** (thus, a process will consist of at least sufficient memory to hold the programs and data of that process)
- Associated with programs stacks used to keep track of **procedure calls** and **parameter** passing between **procedures**  
- Finally, each process has associated with it a number of **attributes** that are used by the OS for **process control**

> The collection of program, data, stack, and attributes associated with a process is referred as the **process image**. The collection of attributes is referred to as a **process control block**.

![process image in virtual memory](notes/assets/process-image-in-virtual-memory.png#invert_B)


Numeric identifiers that may be stored with the process control block include:  
- Identifier of the process: each process is assigned a unique numeric identifier, which may simply be an index into the primary process table.  
- Identifier of the process that created this process (parent process)  
- User identifier indicates the user responsible for the job

Processor State information consists of the contents of: 
- Processor registers: while a process is running, of course, the information is in the registers. When a process is interrupted, all of this register information must be saved so that it can be restored when the process resumes execution.
- Stack pointers

#### Process Control Information

Process Control Information is the additional information needed by the OS to control and coordinate the various active processes.

- **Scheduling and State Information:** is the information that is needed by the OS to perform its scheduling function. Typical items of information are:
	- **Process state**: Defines the readiness of the process to be scheduled for execution (e.g., running, ready, waiting, halted).  
	- **Priority**: One or more fields may be used to describe the scheduling priority of the process.  
	- **Scheduling-related information**: This will depend on the scheduling algorithm used. Examples are the amount of time that the process has been waiting and the amount of time that the process executed the last time it was running.  
	- **Event**: Identity of event the process is awaiting before it can be resumed

- **Interprocess Communication**: various flags, signals, and messages may be associated with communication between two independent processes.  
- **Memory Management**: this section may include pointers to segment and/or page tables that describe the virtual memory assigned to the process.
- **Resource Ownership Resources**, such as opened files, controlled by the process may be indicated.  
- **Process Privileges Processes** are granted privileges in for the memory that may be used or for the use of system utilities and services.