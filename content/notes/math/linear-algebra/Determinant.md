---
title: Determinant
tags: 
- linear-algebra
- definition
---
**Determinants** are mathematical objects that are very useful in the analysis and solution of [[notes/math/linear-algebra/Linear systems|systems of linear equations]]. The **determinant** of a [[notes/math/linear-algebra/Matrix|matrix]] defines whether the matrix is invertible or not/has a unique solution.

## Finding the determinant

### 2x2 Matrix

Given matrix $A$:

$$A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$$
we write the determinant of the matrix as any of these:

$$
Det(A) = |A| = \begin{bmatrix} a & b \\ c & d  \end{bmatrix} = a \times d - b\times c
$$


### 3x3 Matrix

$$
A = \begin{bmatrix} 
a & b & c \\
d & e & f \\
g & h & i
\end{bmatrix}
$$

$$
Det(A) = |A| = \begin{bmatrix} 
a & b & c \\
d & e & f \\
g & h & i
\end{bmatrix} = a \times \begin{bmatrix} e & f \\ h & i\end{bmatrix} - b \times \begin{bmatrix} d & f \\ g & i \end{bmatrix} + c \times \begin{bmatrix} d & e \\ g & h\end{bmatrix}
$$
We are breaking the matrix into three smaller matrices. Each element from the first row is multiplied by a matrix constructed by all elements that are outside of the row and column of the element. Signs before the elements are determined in a alternating pattern:$+, −, +, −, \dots$  

In fact, we can chose any row/column from the matrix and use the its elements as coefficients. The benefit of this flexibility is that we can try to choose rows that have the most zero values, to make our calculation simpler.

#### Rule of Sarrus

If we add the first two columns of the matrix $A$ as new columns on the right side of the matrix,
$$
A = \begin{bmatrix} 
a & b & c & a & b\\
d & e & f & d & e\\
g & h & i & g & h
\end{bmatrix}

$$
![vectors drawn on a plane](/notes/assets/rule-of-sarrus.png#invert_B)

Adding up the blue set of diagonal products, and then subtracting from that the yellow set of diagonal products results in:
$$
Det(A) = aei + bfg + cdh - adh - bdi - ceg
$$
#### Cramer's rule

[[notes/math/linear-algebra/Cramer's rule|Cramer’s rule]] is a simple little rule that lets us use determinants to solve a system of linear equations.

### Lower/Upper Triangular Matrices

The determinant of matrices in [[notes/math/linear-algebra/Upper and Lower triangular matrix|lower/upper triangular form]] can be found easily by multiplying the entries along the main diagonal.

$$
\begin{align}
&A = \begin{bmatrix} -2 & 4 & 0 \\ 0 & -1 & 4 \\ 0 & 0 & -4 \end{bmatrix}\\\\ &|A| = -2 \times -1 \times -4 = -8
\end{align}
$$

## Modifying the determinant

### Multiplication by scalar
Let $A$ be a matrix and we multiply any of its rows by a scalar $k$ then the determinant is also multiplied by the scalar $k$.

$$
\begin{align}
&A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} = |A| \\\\ & 
A = \begin{bmatrix} k \cdot a &  k \cdot b \\ c & d \end{bmatrix} = k\cdot|A|\\\\ & 
A = \begin{bmatrix} k \cdot a &  k \cdot b \\ k \cdot c &  k \cdot d \end{bmatrix} = k^2\cdot|A|
\end{align}
$$
> If you multiply $n$ rows by the constant $k$, then the determinant of the new matrix will be $k^n \cdot |A|$.

### Sum of two rows

Let $A, B, C$ be $2\times2$ matrices (and this works for any set of $n \times n$ matrices), except that one row in each matrix is different, and that different row is the sum of the different rows from the first and second matrices, then we know the sum of the determinants of the first and second matrices is equal to the determinant of the third matrix.

**Example:**

$$
A = \begin{bmatrix} 1 & 0 \\ 3 & 2 \end{bmatrix},
B = \begin{bmatrix} 1 & 0 \\ -2 & 1 \end{bmatrix},
C = \begin{bmatrix} 1 & 0 \\ 1 & 3 \end{bmatrix}
$$
$$
\begin{align}
& C = \begin{bmatrix} 1 & 0 \\ A_{(2,1)} + B_{(2,1)} = C_{(2,1)} & A_{(2,2)} + B_{(2,2)} = C_{(2,2)} \end{bmatrix} \\\\
& C = \begin{bmatrix} 1 & 0 \\ 3 + (-2) = 1 & 2+1 = 3 \end{bmatrix}
\\ \\
& C = \begin{bmatrix} 1 & 0 \\ 1 & 3 \end{bmatrix}
\end{align}
$$
When we have this specific case, $$|A| + |B| = |C|$$
### Swapped/duplicate rows

Let $A$ be a matrix and if we switch any row with any other row in $A$, the determinant of the new "swapped-row matrix" $B$ is equal to the negative determinant of $A$. In other words,
$$|B| = - |A|$$
> It works for any $n \times n$ matrices.

Based on that rule any matrix with two identical rows or columns has determinant of $0$. And if the matrix determinant is $0$ then any matrix with any two identical rows/columns is not invertiable.

### Row operations
[[notes/math/linear-algebra/Simple row operation|Simple row operations]] do not change the value of the determinant, unless we are multiplying by a scalar (see above).