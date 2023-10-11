---
title: Identity matrix
enableToc: false
tags: 
- linear-algebra
---
**The indentity matrix** is a square [[notes/math/linear-algebra/Matrix|matrix]] that when multiplied by another matrix you don't change the value of the other matrix. It's common to abbreviate it it as just $I_{2\times2}$ as $I_2$, $I_{3\times3}$ as just $I_3$, etc, and they look like this:

$$
\begin{align}
I_2 = \begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix} 

\quad

I_3 = \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}

\quad

I_4 = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
\end{align}
$$

### Proof that I is a square matrix

$$  
\begin{align}  
A = \begin{bmatrix}  
4 & -6 \\  
1 & 1 \\  
-2 & 9  
\end{bmatrix} \\ \\  
I \cdot  \begin{bmatrix}  
4 & -6 \\  
1 & 1 \\  
-2 & 9  
\end{bmatrix}  
= \begin{bmatrix}  
4 & -6 \\  
1 & 1 \\  
-2 & 9  
\end{bmatrix}  
\end{align}   
$$

The dimensions of $A$ are  $3 ×\times 2$, so let’s substitute those into the equation to get a visual picture of the dimensions.

$$
\begin{align}
I \cdot 3 \times 2 = 3 \times 2 \\
R \times C \cdot 3 \times 2 = 3 \times 2
\end{align}
$$

We know the identity matrix must have $3$ columns:

$$
R \times 3 \cdot 3 \times 2 = 3 \times 2 
$$

We also know that the dimensions of the result matrix on the right comes from the rows of the first matrix and the columns of the second matrix.

$$
3 \times 3 \cdot 3 \times 2 = 3 \times 2 
$$

### Properties of $I$

$$
\begin{flalign}
&I \cdot A = A, \text{ but } I \text{ must have the same number of columns as }A \text{ has rows} \\
&A \cdot I = A, \text{ but } I \text{ must have the same number of columns as }A \text{ has columns}
\end{flalign}
$$
