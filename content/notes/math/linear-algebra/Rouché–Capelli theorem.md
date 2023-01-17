---
title: Rouché–Capelli theorem
enableToc: false
tags: 
- linear-algebra
- theorem
---
A [[notes/math/linear-algebra/Linear systems|system of linear equations]] with $n$ variables has a solution if and only if the [[notes/math/linear-algebra/Matrix Rank|the rank]] of its coefficient matrix $A$ is equal to the rank of its [[notes/math/linear-algebra/Matrix|augmented matrix]] $[A | b]$. In particular:
- if $n = rank(A)$, the solution is unique
- otherwise there are infinitely many solutions.

**Example 1**:
System of equations:
$$
\begin{align}
x + y + 2z = 3 \\
x + y + z  = 1 \\
2x + 2y + 2z = 2
\end{align}
$$

Coefficient matrix:
$$
A = \begin{bmatrix} 1 & 1 & 2 \\ 1 & 1 & 1 \\ 2 & 2 & 2 \end{bmatrix}
$$
Augmented matrix:
$$
(A|B) =\left[\begin{array}{rrr|r}
    1 & 1 & 2 & 3 \\
    1 & 1 & 1 & 1 \\
    2 & 2 & 2 & 2
\end{array}\right]
$$
Since both of these have the same rank, namely $2$, *there exists at least one solution*; and since their rank is less than the number of unknowns, the latter being $3$, there are *infinitely many solutions*.

**Example 2**:
System of equations:
$$
\begin{align}
x + y + 2z = 3 \\
x + y + z  = 1 \\
2x + 2y + 2z = 5
\end{align}
$$

Coefficient matrix:
$$
A = \begin{bmatrix} 1 & 1 & 2 \\ 1 & 1 & 1 \\ 2 & 2 & 2 \end{bmatrix}
$$
Augmented matrix:
$$
(A|B) =\left[\begin{array}{rrr|r}
    1 & 1 & 2 & 3 \\
    1 & 1 & 1 & 1 \\
    2 & 2 & 2 & 5
\end{array}\right]
$$
In this example the coefficient matrix has rank $2$, while the augmented matrix has rank $3$; so this system of equations *has no solution*. Indeed, an increase in the number of linearly independent columns has made the system of equations [[notes/math/linear-algebra/(In)Consistency|inconsistent]].