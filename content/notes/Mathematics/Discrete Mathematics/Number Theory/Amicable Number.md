**Amicable Numbers** are two numbers such that each is equal to the sum of all the natural proper [[notes/Mathematics/Discrete Mathematics/Number Theory/Divisibility|divisor]] of the other, *including $1$*.

$$
\begin{align}
& 220, 284 && \\ \\
& D(284) = 1, 2, 4, 71 \text{ and } 142 && \\
& 1 + 2 + 4 + 71 + 142 = 220 && \\ \\
& D(220) = 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 \text{ and } 110  && \\
& 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284 &&

\end{align}
$$

Other amicable numbers: 

$$(220, 284), (1184, 1210), (2620, 2924), (5020, 5564), (6232, 6368), (10744, 10856), (12285, 14595), ...$$

## Thābit ibn Qurra theorem

If: 
- $p = 3 \times 2^{n-1} - 1$
- $q = 3 \times 2^n -1$
- $r = 9 \times 2^{2n-1} - 1$

Such that $n$ is an integer $>1$ and $p, q, r$ are prime numbers, then $2^n \times p \times q$ and $2^n \times r$ are a pair of **amicable numbers**.
