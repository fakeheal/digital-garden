Any [[notes/Mathematics/Linear Algebra/Matrix|matrix]] that's full of only zeros, regardless of the dimensions of the matrix, we call a *zero matrix*. We always name the zero matrix with a capital $O$.

[[notes/Mathematics/Linear Algebra/Matrix Scalar Multiplication|Multiplying a matrix by scalar]] $0$ results in a *zero matrix*.
$$
0 \cdot
\begin{bmatrix}
a & b & c \\ 
d & f & e
\end{bmatrix}
=
\begin{bmatrix}
0 & 0 & 0 \\ 
0 & 0 & 0
\end{bmatrix}
$$

Adding or subtracting the zero matrix to any other matrix doesn’t change the matrix’s value.
$$
\begin{align}
A + O = A\\
A - O = A
\end{align}
$$

Adding **opposite matrices** always results in the zero matrix. Matrices $K$ and $−K$ are opposite matrices. To get the oppposite of a matrix, multiply it by a scalar of $-1$: $-K = (-1)\cdot K$.

$$
K + (-K) = O
$$
