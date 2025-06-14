---
title: Simple row operation
enableToc: false
tags: 
- linear-algebra
---
Performing simple row operations leads to finding solution to linear systems represented as a [[notes/math/linear-algebra/Matrix|matrix]] or finding the inverse of a [[notes/math/linear-algebra/Matrix|matrix]].

### I. Switching rows $R_1 \leftrightarrow R_2$

$$
\begin{bmatrix}
3 & 2 &\bigm| & 7\\ 
1 & -6 &\bigm| & 0 
\end{bmatrix} 
\rightarrow
\begin{bmatrix}
1 & -6 &\bigm| & 0 \\ 
3 & 2 &\bigm| & 7
\end{bmatrix}
$$

### II. Multiplying a row by a constant $n * R_1 \rightarrow R_1, n \neq 0$

$$
\begin{bmatrix}
3 & 2 &\bigm| & 7\\ 
1 & -6 &\bigm| & 0 
\end{bmatrix} 
\rightarrow
\begin{bmatrix}
2 * 3 & 2 * 2 &\bigm| & 2 * 7\\ 
1 & -6 &\bigm| & 0 
\end{bmatrix} 
\rightarrow
\begin{bmatrix}
6 & 4 &\bigm| & 14\\ 
1 & -6 &\bigm| & 0 
\end{bmatrix} 
$$

### III. Adding a row to another row $R_1 + R_2 \rightarrow R_1$

$$
\begin{bmatrix}
3 & 2 &\bigm| & 7\\ 
1 & -6 &\bigm| & 0 
\end{bmatrix} 
\rightarrow
\begin{bmatrix}
3 + 1 & 2 + (-6) &\bigm| & 7 + 0\\ 
1 & -6 &\bigm| & 0 
\end{bmatrix} 
\rightarrow

\begin{bmatrix}
4 & -4 &\bigm| & 7 \\ 
1 & -6 &\bigm| & 0 
\end{bmatrix} 
$$
