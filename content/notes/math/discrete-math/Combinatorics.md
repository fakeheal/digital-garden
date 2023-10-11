---
title: Combinatorics
tags: fundamentals, discrete-math, combinatorics
enableToc: true
---

## Basic Counting Principles

### The Product rule

Suppose that a procedure can be broken down into a sequence of two tasks. If there are $n_1$ ways to do the first task and for each of these ways of doing the first task, there are $n_2$ ways to do the second task, then there are $n_1 \cdot n_2$ ways to do the procedure.

### The Sum Rule

If a task can be done either in one of $n_1$ ways or in one of $n_2$ ways, where none of the set of $n_1$ ways is the same as any of the set of $n_2$ ways, then there are $n_1+n_2$ ways to do the task.

### The Subtraction Rule / Principle of inclusion–exclusion

If a task can be done in either $n_1$ ways or $n_2$ ways, then the number of ways to do the task is $n_1$ + $n_2$ minus the number of ways to do the task that are common to the two different ways.

### The Division Rule

There are $\frac{n}{d}$ ways to do a task if it can be done using a procedure that can be carried out in $n$ ways, and for every way $w$, exactly $d$ of the $n$ ways correspond to way $w$.

### The Pigeonhole Principle

If $k$ is a positive integer and $k + 1$ or more objects are placed into $k$ boxes, then there is at least one box containing two or more of the objects.


### The Generalized Pigeonhole Principle

If $N$ objects are placed into $k$ boxes, then there is at least one box containing at least $\lceil 
\frac{N}{k} \rceil$ objects.


## Combinations

The combination is selection of elements without repetition from a collection **when order doesn't matter**.


Without repetition:

$$
C(n, r) = \frac{n!}{r!\cdot(n-r)!}
$$

Also:
$$C(n, r) = C(n, n − r)$$

With repetition:

$$
C(n, r) = \frac{(r+n-1)!}{r!\cdot(n-1)!}
$$

##  Permutations

A permutation is a mathematical technique that determines the number of possible arrangements in a set **when the order
of the arrangements matters**.

With repetition:

$$ P = n^r $$

Without repetition, using all elements:
$$ P = n!$$ 

$n!$ is the notation of n [[notes/math/discrete-math/number-theory/Factorial|factorial]].

Without repetition, using *some* ($r$) elements:

$$ P(n, r) = n! \cdot (n-r)! = \frac{n!}{(n-r)!} $$
