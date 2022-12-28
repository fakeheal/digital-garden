---
title: Elimination matrix
enableToc: false
tags: 
- linear-algebra
---
The entire collection of all the [[notes/math/linear-algebra/Simple row operation|simple row operations]] we perform to change a [[notes/math/linear-algebra/Matrix|matrix]] into [[notes/math/linear-algebra/Row-echelon form#^3c454c| reduced row-echelon]] form can be brought together in one matrix, and we call that matrix the elimination matrix, $E$ (елементарна матрица).

$$
\begin{align}
A \cdot I = A \\
I \cdot A = A \\
A^-1 \cdot A = I \\
A \cdot A^-1 = I \\
{\color{green}{E \cdot A = I}} 
\end{align}
$$

### Proof that $E$ is square

$$
\begin{align}
& A = \begin{bmatrix}
2 & 4 \\
0 & -3 \\
\end{bmatrix}
\\ \\
& E \cdot A =  I \\ \\
& {\color{red}{2}} \times {\color{green}{2}} \cdot {\color{green}{2}} \times {\color{red}{2}} = {\color{red}{2}} \times {\color{red}{2}} \\
\end{align}
$$

### Example

Performing simple row operations on $A$ to get it to reduced row-echelon form:

$$
\begin{align}
A = \begin{bmatrix} 2 & 4 \\ 0 & -3 \\ \end{bmatrix} 
\xrightarrow{\frac{1}{2}R_1 \rightarrow R_1}
\begin{bmatrix} 1 & 2 \\ 0 & -3 \end{bmatrix}
\xrightarrow{-\frac{1}{3}R_2 \rightarrow R_2}
\begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} 
\xrightarrow{R_1 - 2R_2 \rightarrow R_1}
\begin{bmatrix} 1 & 0 \\ 0 & 1  \end{bmatrix}
\end{align}
$$


Representing the row operations with matrices, using $I$:

$$
\begin{flalign}
\frac{1}{2}R_1 \rightarrow R_1 
\longrightarrow 
E_1 = \begin{bmatrix} \frac{1}{2} & 0 \\ 0 & 1 \\ \end{bmatrix} \\
\\
-\frac{1}{3}R_2 \rightarrow R_2 
\longrightarrow
E_2 = \begin{bmatrix} 1 & 0 \\ 0 & -\frac{1}{3} \end{bmatrix} \\
\\
R_1 - 2R_2 \rightarrow R_1
\longrightarrow
E_2 \begin{bmatrix} 1 & -2 \\ 0 & 1  \end{bmatrix}
\end{flalign}
$$

To get the elimination matrix, multiply $E_n .... E_4 \cdot E_3 \cdot E_2 \cdot E_1 = E$ :

$$
\begin{flalign}
E_3 \cdot E_2 \cdot E_1 = \begin{bmatrix} 1 & -2 \\ 0 & 1  \end{bmatrix} \cdot \begin{bmatrix} 1 & 0 \\ 0 & -\frac{1}{3} \end{bmatrix} \cdot \begin{bmatrix} \frac{1}{2} & 0 \\ 0 & 1 \\ \end{bmatrix} = E = \begin{bmatrix} \frac{1}{2} & \frac{2}{3} \\ 0 & -\frac{1}{3} \end{bmatrix}
\end{flalign}
$$
