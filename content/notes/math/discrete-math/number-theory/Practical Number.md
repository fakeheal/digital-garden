---
title: Practical Number
enableToc: false
tags: 
- number-theory
- number-pattern
---
*/практични числа/*

**Practical Number** is a positive integer $n$ such that all smaller positive integers can be represented as a sums of distinct divisors of $n$.

$$
\begin{align}
& 8 && \\
& 1, 2, 4 | 8 && \\
&1, 2, 3, 4, 5, 6, 7 < 8&& \\
&(1 + 2 = 3) < 8&& \\
&(2 + 4 = 6) < 8 \\
&(1 + 2 + 4 = 7) < 8&& \\
&... &&\\
\end{align}
$$

## Facts

1. Other than $1$ and $2$, all Practical numbers are divisible by $4$ or $6$
2. The [[notes/math/discrete-math/number-theory/lcm]] of any two practical numbers is also a practical number
3. The set of all practical numbers is **[[notes/math/discrete-math/number-theory/closed under...]]** multiplication
