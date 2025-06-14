---
title: Row-echelon form
enableToc: false
tags: 
- linear-algebra
---
A [[notes/math/linear-algebra/Matrix|matrix]] is in **row-echelon form (ref)** if:
- All the [[notes/math/linear-algebra/Pivot entries|pivot entries]] are equal to $1$
- Any row's that consist of only $0$s are at the bottom of the matrix
- The pivot in each row sists in a column to the right of the column that houses the pivot in the row above it. In other words, the pivot entries sit in a staircase pattern, where they stair-step down from the upper left corner to the lower right corner of the matrix.

If a matrix is in **row-echelon form**, and if, in each pivot column, the pivot entry is the only non-zero entry, then the matrix is in **reduced row-echelon form** (rref; редуцирана горно-триъгълна форма): ^3c454c

$$
\begin{bmatrix}
1 & -2 & 0 & 0 & \bigm| & 3\\
0 & 0 & 1 & 0 & \bigm| & 4\\
0 & 0 & 0 & 1 & \bigm| & -3
\end{bmatrix} 
$$
