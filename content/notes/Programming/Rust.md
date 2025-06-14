## Memory
### Stack 

Special region of the process memory that stores variables created by each function.

For every function call a new **stack frame** is allocated on top of the current one.

The size of every variable on the stack has to be known at compile time.

When a function exists its stack frame is released. 

The stack is limited in size.

**Stack frame** is the amount of memory allocated to a function, which is used to store all of the local variables and function parameters.

In the example below the **stack frame** will be large enough to store the two `int` values and the single `float32` type. Once the `main` has exited, the stack frame allocated on entry will be released.

```rust
fn main() 
{ 
	let a = 10; 
	let b = 20; 
	let pi = 3.14f32; 
}
```

Stack overflow is achieved when we run out of stack space by allocating stack frames.

### Heap

Region of the process memory that is **NOT** automatically managed.

The heap has no size restrictions, it's only limited by the system's resources.

The heap is is accessible by any function, anywhere in the program. 

Heap allocations are expensive and slow. Avoid them when possible.

### Smart Pointers

Wrapper around the raw `Pointer` adding additional capabilities to it.

Common smart pointers in the standard library:

-   `Box<T>` for allocating values on the heap
-   `Rc<T>`, a reference counting type that enables multiple ownership
-   `Ref<T>` and `RefMut<T>`, accessed through `RefCell<T>`, a type that enforces the borrowing rules at runtime instead of compile time

## Data Types

- Numbers: 
	- `u8`, `u16`, `u32`, `u64`, `u128` - unsigned integer
	- `i8`, `i16`, `i32`, `i64`, `i128` - signed integers
	- `usize` / `isize`: unsigned/signed pointer-sized integers, thus its actual size depends on the architecture your are compiling your program for
	- `f32`: float numbers
	- `f64`: float with double precision
- Boolean: `bool`
- Single Unicode value: `char` (always 4 bytes)

## Functions

Function parameters must have their typed specified.

Functions must have their return type specified.

The last line without a semicolon at the end is considered the `return` expression.

Example:

```rust
fn calculate_weight_on_mars(weight: f32) -> f32{  
    weight  // same as return weight;
}
```

## Macros

In short, rust code that generates more rust code. Quite powerful, but very complex and usually hard to maintain.

To distinguish a macro from a function call, look for the `!` 👀

Example:

```rust
fn main() {
	println!("Hello world! From a macro.")
}
```

## Mutability

Variables in Rust are immutable by default.

To make a variable mutable, use the keyword `mut`:

Example:

```rust
let mut weight = 51.14;
```

## Ownership

Rules of ownership, concept absent from most programming languages:
1. Each value in Rust is owned by a variable
2. When the owner goes out of scope, the value will be deallocated
3. There can only be **ONE** owner at a time

Example:

```rust
fn main() {  
    let input: String = String::from("test");  
  
    some_fn(input);  
  
    println!("Input is: {}", input);  
}  

fn some_fn(s: String) {  
    s;  
}
```

The value of `input` is not available to the `println!`  macro, because its ownership is transfered to `s` (of `some_fn`) and when `s`  goes out of scope it's deallocated and so is the value of `input`.

### References & Borrowing

Improving on the example above, we can actually pass `input` to `some_fn` without losing its value, by telling Rust we are going to pass it by reference:

```rust
fn main() {  
    let input: String = String::from("test");  
    
    some_fn(&input);  
    
    println!("Input is: {}", input);  
}

fn some_fn(s: &String) {  
    s;  
}
```

However `s` in `some_fn` is immutable and if we want to update its value, the compiler won't let us.

To change that behaviour, we need not only to tell that we are passing reference to `some_fn`, but also tell it's going to be a mutable reference using `&mut`.

Final code:

```rust
fn main() {  
    let mut input: String = String::from("test");  
    some_fn(&mut input);  
    println!("Input is: {}", input);  
}  
  
fn some_fn(s: &mut String) {  
    s.push_str("!");  
}
```

In the same scope, we can have only one mutable borrow or as many as we want immutable borrows.

The compiler won't let us have an immutable and mutable borrow at the same time.