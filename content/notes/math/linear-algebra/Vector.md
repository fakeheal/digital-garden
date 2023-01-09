---
title: Vector
enableToc: true
tags: 
- linear-algebra
- definition
---
A **vector** has two pieces of infromation contained within it:
- the direction in which the vector points
- the **magnitude** of the vector *(which is just the length of the vector)*

Vector expressions:
$$
\overrightarrow{a} = (3, 4)
$$
$$
\overrightarrow{b} = (3, 4, 5)
$$
### Column Vectors
$$
\overrightarrow{a} = \begin{bmatrix} 3 \\ 4 \end{bmatrix}
$$
### Row Vectors
$$
\overrightarrow{a} = \begin{bmatrix} 3 & 4 \end{bmatrix}
$$

### Spaces
In fact, for any matrix, each column in the matrix is technically a **column vector**. For example, in matrix $A$,
$$
A = \begin{bmatrix}
4 & -6 & 1 & -8 & 5 \\
1 & 1 & -2 & 9 & 0
\end{bmatrix}
$$
there are five **column vectors**:

$$
a_1 = \begin{bmatrix} 4 \\ 1 \end{bmatrix},
a_2 = \begin{bmatrix} -6 \\ 1 \end{bmatrix},
a_3 = \begin{bmatrix} 1 \\ -2 \end{bmatrix}, 
a_4 = \begin{bmatrix} -8 \\ 9 \end{bmatrix}, 
a_5 = \begin{bmatrix} 5 \\ 0 \end{bmatrix}
$$

Because each of these column vectors has two components, it means they are vectors in two-dimensional space, $\mathbb{R}^2$.

Similarly, we could also say that $A$ has two **row vectors**:
$$
a_1 = \begin{bmatrix} 4 & -6 & 1 & -8 & 5 \end{bmatrix},
a_2 = \begin{bmatrix} 1 & 1 & -2 & 9 & 0 \end{bmatrix}
$$
Whe we look at a set of row vectors or column vectors, it's important to understand the space that the vectors occupy. There are two aspecst we want to consider: first, the space $\mathbb{R}^n$ in which the vectors lie, and second, the dimension of the "surface" or "space" formed by the vectors specifically.

For instance, the given **two row vectors** above:
- because they each have $5$ components, they are vectors in $\mathbb{R}^5$, and
- because there are $2$ vectors, they form a two dimensioal plane in $\mathbb{R}^5$

### Vectors can be moved
To sketch a vector, we often start at the origin and move out to the "coordinate point" that's expressed by the vector. Placing the starting point of the vector at the origin means that you're sketching the vector in standard position.

For instance, the two-dimensional vectors:
$$
a_1 = \begin{bmatrix} 4 \\ 1 \end{bmatrix},
a_2 = \begin{bmatrix} -6 \\ 1 \end{bmatrix},
a_3 = \begin{bmatrix} 1 \\ -2 \end{bmatrix}, 
a_4 = \begin{bmatrix} -8 \\ 9 \end{bmatrix}, 
a_5 = \begin{bmatrix} 5 \\ 0 \end{bmatrix}
$$
could all be sketched together in $\mathbb{R}^2$:

![vectors drawn on a plane](/notes/assets/vectors-on-a-plane.png#invert_B)

Each of these vectors has its **initial point** at the origin (each vector "starts" at $(0, 0)$), and its **terminal point** at the location described by the vector.

The information contained in a vector is only its direction and its length, whic means vectors don't always have to start at the origin.