---
title: Cramer's rule
tags: 
- linear-algebra
---
**Cramer’s rule** is a simple little rule that lets us use [[notes/math/linear-algebra/Determinant|determinants]] to solve a [[notes/math/linear-algebra/Linear systems|system of linear equations]].

The rule says that you can solve for any variable in the system by calculating
$$
\frac{D_v}{D}$$
where $D_v$ is the determinant of the coefficient matrix with the answer column values in the variable column you're trying to solve, and where $D$ is the determinant of the coefficient [[notes/math/linear-algebra/Matrix|matrix]].

Which means that if we want to find $x$ and $y$ we need to find $D_x/D$ and $D_y/D$ respectively.

### Two unknowns
Given the linear system of two equations in two unknowns,

$$
\begin{align}
a_1x + b_1y = d_1 \\
a_2x+b_2y = d_2
\end{align}
$$
we can say that 

$$
x = \frac{D_x}{D}, y = \frac{D_y}{D}, \text{ with } D \neq 0
$$
where
$$
D = \begin{bmatrix}
a_1 & b_1 \\
a_2 & b_2 \end{bmatrix},
D_x = \begin{bmatrix}
d_1 & b_1 \\
d_2 & b_2 \end{bmatrix},
D_y = \begin{bmatrix}
a_1 & d_1 \\
a_2 & d_2 \end{bmatrix}
$$

### Three unknowns

Given the linear system of three quations in three unknowns,
$$
\begin{align}
a_1x + b_1y + c_1z  = d_1 \\
a_2x + b_2y + c_2z = d_2 \\
a_3x + b_3y + c_3z = d_3 \\
\end{align}
$$
we can say that
$$
x = \frac{D_x}{D}, y = \frac{D_y}{D}, z = \frac{D_z}{D} \text{ with } D \neq 0
$$
where 
$$
D = \begin{bmatrix}
a_1 & b_1 & c_1 \\
a_2 & b_2 & c_2 \\ 
a_3 & b_3 & c_3 \end{bmatrix},
D_x = \begin{bmatrix}
d_1 & b_1 & c_1 \\
d_2 & b_2 & c_2 \\ 
d_3 & b_3 & c_3 \end{bmatrix},
D_y = \begin{bmatrix}
a_1 & d_1 & c_1 \\
a_2 & d_2 & c_2 \\
a_3 & d_3 & c_3 \end{bmatrix},
D_z = \begin{bmatrix}
a_1 & b_1 & d_1 \\
a_2 & b_2 & d_2 \\
a_3 & b_3 & d_3 \end{bmatrix}
$$
