---
title: Parallelogram
tags: 
- linear-algebra
- definition
---
*успоредник*

Let $A$ be a [[notes/math/linear-algebra/Matrix|matrix]] if you separate it into its [[notes/math/linear-algebra/Vector|column vectors]], and call them $v_1$ and $v_2$, then you can plot $v_1$ and $v_2$ in the $xy$-plane, and create a **parallelogram** using them as two of its adjacent sides.

$$
\begin{align}
& A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \\ \\
& v_1 = \begin{bmatrix} a \\ c \end{bmatrix}, v_2 = \begin{bmatrix} b \\ d \end{bmatrix}
\end{align}
$$
The area of that parallelogram is simply the absolute value of the [[notes/math/linear-algebra/Determinant|determinant]] of the matrix $A$.

$$Area = \lvert Det(A) \rvert$$
![paralellogram xy-plane of vectors](/notes/assets/parallelogram-vectors-determinant.png#invert_B)

## Transformation

Let $F$ be a matrix that defines $f$  a figure in the $xy$-plane, $T$ be a transformation matrix applied to $f$ and $g$ - the new figure derived from the transformation of $f$. We know the area of $f$ will be $Area_f = |Det(F)|$.

But we also can describe the area of $g$ in terms of $f$ and the transformation matrix $T$:
$$
Area_g = |Area_f \times Det(T)| $$

> In other words, we can find the area of $g$ before we even have the matrix that defines $g$.
