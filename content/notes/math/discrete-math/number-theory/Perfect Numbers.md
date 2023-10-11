---
title: Perfect Numbers
enableToc: false
tags: 
- number-theory
- number-pattern
---
*/съвършени числа/*

## Definition 1

**Perfect Number** is a positive [[notes/math/discrete-math/number-theory/Integer|integer]] that equals the sum of its divisors *(except itself)*.

$$
\begin{align}
& 6 && 28 \\
& 1, 2, 3 | 6 && 1, 2, 4, 7, 14 | 28 \\
& 1 + 2 + 3 = 6 && 1 + 2 + 4 + 7 + 14 = 28 \\
\end{align}
$$

## Definition 2

**Perfect number** is positive integer that is half the sum of all its divisors *(including itself)*.

$$
\begin{align}
& 496 && 8128 \\
& 1, 2, 4, 8, 16, 31, 62, 124, 248 | 496 && 1, 2, 4, 8, 16, 32, 64, 127, 254, 508, 1016, 2032, 4064 | 8128 \\
& \frac{1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 + 496}{2} = 496 
	&& \frac{1 + 2 + 4 + 8 + 16 + 32 + 64 + 127 + 254 + 508 + 1016 + 2032 + 4064}{2} = 8128 \\
\end{align}
$$

> **We don't know**:
> - if there are infinite number of perfect numbers
> - if there are any odd perfect numbers

