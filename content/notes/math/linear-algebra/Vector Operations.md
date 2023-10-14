---
title: Vector Operations
enableToc: true
tags: 
- linear-algebra
---

## Sum of Vectors
To add vectors, just add their corresponding components. Given $\overrightarrow{a} = (3, 4)$ and $\overrightarrow{b} = (-1, 2)$, the sum of the vectors is
$$
\overrightarrow{a} + \overrightarrow{b} = (3 + (-1), 4 + 2) = (2, 6)
$$
Graphically, we can see that adding vectors means connecting the terminal point of one to the tail of the other.

![graphically sum of vectors](/notes/assets/sum-of-vectors.png#invert_B)

> Addition is **commutative**.

## Difference of Vectors
Given $\overrightarrow{a} = (3, 4)$ and $\overrightarrow{b} = (-1, 2)$, the difference of the vectors is
$$
\overrightarrow{a} - \overrightarrow{b} = (3 - (-1), 4 - 2) = (4, 2)
$$

> Subtraction is **not commutative**.

## Multiplying by a scalar

Multiplying a vector by a scalar is just like [[notes/math/linear-algebra/Matrix Scalar Multiplication|matrix scalar multiplication]]. For instance, if we multiply $\overrightarrow{a} = (3, 4)$ by 2, we get:
$$
2\overrightarrow{a} = 2 \begin{bmatrix} 3 \\ 4 \end{bmatrix} = \begin{bmatrix} 2(3) \\ 2(4) \end{bmatrix} = \begin{bmatrix} 6 \\ 8 \end{bmatrix}
$$
Graphically, we can see that the resulting column vector has the same direction, but its magnitutde is scaled by the absolute value of the scalar.

![vectors multiplied by a scalar](/notes/assets/vectors-multiplied-by-a-scalar.png#invert_B)

## Multiplying a vector by a vector

The product of two vectors is called **dot product**, and we find it by summing the products of the individual components.

$$
\overrightarrow{a} \cdot \overrightarrow{b} = (a_1, a_2)\cdot (b_1, b_2) = a_1 \cdot b_1 + a_2\cdot b_2
$$
We can also find the dot product when we write the vectors as matrices. So if we wrote $\overrightarrow{a}$ as the matrix $A$ and $\overrightarrow{b}$ as the matrix $B$, then we could have written the dot product as 
$$
A \cdot B = \begin{bmatrix} 3 & 4 \end{bmatrix} \cdot \begin{bmatrix} -1 \\ 2 \end{bmatrix}
$$
> When we express the vectors as matrices and then multiply them, it's important to multiply them as a **row matrix first**, multiplied by a **column matrix second.** 

Otherwise we'd get a result that is completely different from the dot product of the two vectors.