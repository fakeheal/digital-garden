---
title: C++ Pointers & Arrays
tags:
  - programming
  - cpp
---
## Pointers

Data & functions used in a program are stored inside the operative memory of the computer.

Every **byte** of the operative memory has a label, called *address*, represented by a hexadecimal number, prefixed with `0x`. Example: `0x6dfed4`. The first byte of the memory has address of `0x000000`, the next one's address is `0x000001`, 256th byte of the memory's address is `0x0000FF` = $255_{(10)}$ 

Variables, created to store addresses, are called pointers. Pointers are defined using a data type and the `*` operator, placed infront of the name of the variable:

```cpp
int *myPointer;
```

The `&` prefix causes the statement to evaluate to the memory address of the identifier, **so long as the identifier is a primitive type**.

```cpp
int x;
&x; // gets the address of x
```

The address is **the first byte** of the sequence of bytes required to store the data of the specific type.

```cpp
double myVar = 4.00;
&d; // 0x0000C9 (201(10)) + 8 bytes = 0x0000D0 (208(10))
```

The `&` operator cannot be applied to unnamed constants or an arithmetic operation: `&5`, `&(a-5)`.

To get the value of the variable the pointer is referrencing to use the `*` operator:

```cpp
std::string food = "Pizza"; // Variable declaration  
std::string *ptr = &food;// Pointer declaration  
  
// Reference: Output the memory address of food with the pointer (0x6dfed4)  
std::cout << ptr << "\n";  
  
// Dereference: Output the value of food with the pointer (Pizza)  
std::cout << *ptr << "\n";
```

> If a pointer has the value of `0` or `NULL`, it does not point to data in the memory.

A pointer can have the value of another pointer, provided they are of the same type.

```cpp
int *p1 = 0, *p2 = NULL;  
int h = 10;  
p1 = &h; p2 = p1;  
std::cout << *p2 << std::endl;
```

Pointers can be assigned to data of the type they were defined with, unless they were defined as `void`. **Void pointers** can be assigned to pointers of all types, **with casting**. Pointers of all types can be assigned to void pointers **without casting**.

```cpp
void *v;  
int *p;  
int i = 0, j = 1;  
v = &i;  
p = (int *) v;  
std::cout << *p << std::endl;  
p = &j;  
v = p;  
std::cout << *(int *) v << std::endl;
```

In the **constant pointers to constants**, the data pointed to by the pointer is constant and cannot be changed. The pointer itself is constant and cannot change and point somewhere else.

```cpp
const int ci = 3; 
const int *q = &ci;
```

In **constant pointers**, the pointer points to a fixed memory location, and the value at that location can be changed because it is a variable, but the pointer will always point to the same location because it is made constant here.

In the **pointers to constant**, the data pointed by the pointer is constant and cannot be changed. Although, the pointer itself can change and points somewhere else (as the pointer itself is a variable).

We can create a pointer to a pointer that in turn may point to data or another pointer. The syntax simply requires the unary operator `*` for each level of indirection while declaring the pointer.

```cpp
char a;
char *b;
char **c;
a = 'g';
b = &a;
c = &b;
```

**Pointer comparison** is done by comparing the addresses. **Incrementing** or **decrementing** the pointer, changes its address by the specified value multiplied by the number of bytes needed for its data type.

## Arrays
**Arrays** are made of multiple sequently ordered objects of the same data type. The name of the array is actually a **pointer**, that points to the first byte of the **first element**.
