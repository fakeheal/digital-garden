---
title: Matrix Multiplication
enableToc: false
tags: 
- linear-algebra
---
[[notes/math/linear-algebra/Matrix]] multiplication is:

- **NOT commutative** - $A\cdot B \neq B\cdot A$ 
- **associative** - $(AB)C = A(BC)$
- **distributive** - $A(B + C) = AB + AC$


To multiply a matrix by another matrix **the number of columns in the first matrix must be equal to the number of rows in the second matrix**. That's because, when we multiply one matrix by another, we multiply the rows in the first matrix by the columns of the second matrix.

$$
\begin{align}
A = 
\begin{bmatrix}
2 & 6 \\ 
3 & -1 
\end{bmatrix}  
\qquad
B = 
\begin{bmatrix}
-4 & -2 \\ 
1 & 0
\end{bmatrix} \\ \\
A = 
\begin{bmatrix}
R_1 \rightarrow 2 & 6 \\ 
R_2 \rightarrow 3 & -1 
\end{bmatrix} 
\qquad
B = 
\begin{bmatrix}
C_1 & C_2 \\
\downarrow & \downarrow \\
-4 & -2 \\ 
1 & 0
\end{bmatrix} \\ \\
A \cdot B = \begin{bmatrix}
R_1 \cdot C_1 & R_1 \cdot C_2 \\ 
R_2 \cdot C_1 & R_2 \cdot C_2 
\end{bmatrix}
\end{align} \\
$$

The easy way to tell whether or not you can multiply matrices is to line up their dimensions.

$$
AB: 2 \times {\color{green}{\underline{3}} \quad \color{green}{\underline{3}}} \times 4
$$

If the middle numbers match like they do here (they’re both $3$), then you can multiply the matrices to get a valid result.

To get the **dimensions of the product**, take the rows of the first matrix and the columns of the second matrix: 

$$
AB: {\color{green}{\underline{2}}} \times 3 \quad 3 \times {\color{green}{\underline{4}}}
$$

### Dot product

For instance, we said before that when we take the product $A \cdot B$ for

$$
\begin{align}
A = 
\begin{bmatrix}
2 & 6 \\ 
3 & -1 
\end{bmatrix}  
\qquad
B = 
\begin{bmatrix}
-4 & -2 \\ 
1 & 0
\end{bmatrix} 
\end{align}
$$

the first entry we’ll need to find is the **dot product** of the first row in $A$ and the first column in $B$. The first row in $A$ is the ordered pair $(2,6)$, and the first column in $B$ is the ordered pair $(−4,1)$.

To take the dot product of these ordered pairs, we take the product of the first values, and then add that result to the product of the second values. In other words, the dot product of $(2,6)$ and $(−4,1)$ is

$$
\begin{align}
2 \cdot (-4) + 6 \cdot 1 \\
-8 + 6
-2 
\end{align}
$$

The product of two $2 \times 2$ matrices looks like this:

$$
\begin{align}
\begin{bmatrix}
R_{1,1} & R_{1,2} \\ 
R_{2,1} & R_{2,2} 
\end{bmatrix}
\cdot
\begin{bmatrix}
C_{1,1} & C_{1,2} \\ 
C_{2,1} & C_{2,2} 
\end{bmatrix}
= 
\begin{bmatrix}
R_{1,1}C_{1,1} + R_{1,2}C_{2,1} & R_{1,1}C_{1,2} + R_{1,2}C_{2,2} \\
R_{2,1}C_{1,1} + R_{2,2}C_{2,1} & R_{2,1}C_{1,2} + R_{2,2}C_{2,2} \\
\end{bmatrix}
\end{align}
$$

Therefore, to find the product of matrices $A$ and $B$, we get 

$$
\begin{align}
A \cdot B = 
\begin{bmatrix}
2 \cdot (-4) + 6 \cdot 1 & 2 \cdot (-2) + 6 \cdot 0 \\ 
3 \cdot (-4) + (-1) \cdot 1 & 3 \cdot (-2) + (-1) \cdot 0
\end{bmatrix} 
= 
\begin{bmatrix}
-2 &  -4\\ 
-13 & -6
\end{bmatrix} 
\end{align}
$$

### Zero matrix

Multiplying a matrix by the [[notes/math/linear-algebra/Zero matrix]], results in a zero matrix, but might have different dimensions. 
