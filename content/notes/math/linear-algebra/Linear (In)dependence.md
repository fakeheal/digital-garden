---
title: Linear (In)dependence
enableToc: true
tags: 
- linear-algebra
- definition
---
## Independence

- Any $2$ two-dimensional linearly independent vectors will span $\mathbb{R}^2$. The two-dimensional [[notes/math/linear-algebra/Basis vectors|basis vectors]] $\hat{i}$ and $\hat{j}$ are linearly independent, which is why they span $\mathbb{R}^2$.
- Any $2$ two-dimensional linearly independent vectors will span $\mathbb{R}^3$. The two-dimensional basis vectors $\hat{i}$, $\hat{j}$ and $\hat{k}$ are linearly independent, which is why they span $\mathbb{R}^3$.
- Any $n$ $n$-dimensional linearly independent vectors will span $\mathbb{R}^n$. The $n$-dimensional basis vectors are linearly independent, which is why they span $\mathbb{R}^n$.

> There's no linear independent set that conaints the zero vector.

## Dependence

- When $2$ two-dimensional vectors lie along the same line (or along parallel lines), they're called **collinear**, they're linearly dependent, and they won't span $\mathbb{R}^2$.
- When $3$ two-dimensional vectors lie along the same plane, they're called **coplanar**, they're linearly dependent, and they won't span $\mathbb{R}^3$.
- When $n$ $n$-dimensional vectors lie along the same $(n - 1)$-dimensional space, they're linearly dependent, and they won't span $\mathbb{R}^n$.

## (In)dependence in two dimensions

A set of vectors are **linearly dependent**  when one vector in the set can be represented by a linear combination of the other vectors in the set. Put in another way, if one or more of the vectors in the set doesn't add any new information or directionality, then the set is linearly dependent.

In $\mathbb{R}^2$ $2$ and a set of $3$ two-dimensional vectors, the set will **always be linearly dependent**, since at least one of the vectors could be made from some linear combination of the other two.

### Linearly Dependent Example

$$
\vec{v_1} = \begin{bmatrix} 1 \\ 1 \end{bmatrix} \text{ and } \vec{v_2} = \begin{bmatrix} 4 \\ 4 \end{bmatrix}
$$

When the only difference between two vectors is a scalar, then they liee on the same line, they're **collinear**, and we say that they're linearly dependent.

> It’s also helpful to think about linear dependence as the existence of one or more redundant vectors.

### Linearly Independant Example

$$
\vec{w_1} = \begin{bmatrix} 1 \\ 1 \end{bmatrix} \text{ and } \vec{w_2} = \begin{bmatrix} 2 \\ 3 \end{bmatrix}
$$
There’s no scalar you can multiply by $w_1$ that’ll give you $w_2$, and there’s no scalar you can multiply by $w_2$ that’ll give you $w_1$.

Which means these vectors aren’t collinear, and they therefore span $\mathbb{R}^2$ as a pair of linearly independent vectors.

## Testing for linear (in)dependence

### In a plane

We set up a system of equations that include the vectors in the set, and one constant term for each vector.

For example, given the vectors
$$
\vec{v_1} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} \text{ and } \vec{v_2} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
$$
we'd setup the equation
$$
c_1 \cdot \begin{bmatrix} 1 \\ 0 \end{bmatrix} + c_2 \cdot \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
$$
Then we can break the equation into a system of equations,
$$
c_1(1) + c_2(0) = 0
c_1(0) + c_2(1) = 0
$$
then solve the system. In this case, we find $c_1 = 0$ and $c_2 = 0$.

Whether the system is linearly dependent or independent is determined by the values of $c_1$ and $c_2$. If the only values that can make the system true are $c_1 = 0$ and $c_2 = 0$, then the vectors are **linearly independent**.

### In three-dimensional plane

To test for linear independence in three dimensions, we can use the same method we used in two dimensions, which was setting the sum of the linear combination of the vectors equal to the zero vector, and then solving the system.
