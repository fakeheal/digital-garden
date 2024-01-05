---
title: Minor and cofactor of a matrix
enableToc: false
tags:
  - linear-algebra
---

In linear algebra, a minor of a [[notes/math/linear-algebra/Matrix|matrix]] $A$ is the determinant of some smaller square matrix, cut down from $A$ by removing one or more of its rows and columns. 

If **A** is a square matrix, then the _minor_ of the entry in the $i$- th row and $j$- th column is the [[notes/math/linear-algebra/Determinant|determinant]] of the sub-matrix formed by deleting the $i$-th row and $j$- th column. This number is often denoted $M_{(i,j)}$. The $(i, j)$ cofactor is obtained by multiplying the minor by $(-1)^{i+j}$.

Example:

$$
A = \begin{bmatrix}
1 & 4 & 7 \\
3 & 0 & 5 \\
-1 & 9 & 11
\end{bmatrix}
$$

To compute the minor $M_{2,3}$ and the cofactor $C_{2,3}$, we find the determinant of the above matrix with row 2 and column 3 removed.

$$
M_{2,3} = det\begin{bmatrix}
1 & 4 & \square \\
\square & \square & \square \\
-1 & 9 & \square
\end{bmatrix}
= det\begin{bmatrix}
1 & 4 \\
-1 & 9
\end{bmatrix}
= 9 - (-4) = 13
$$

So the cofactor of the (2,3) entry is:
$$
C{2,3} = (-1)^{(2+3)}(M_{2,3}) = -13
$$