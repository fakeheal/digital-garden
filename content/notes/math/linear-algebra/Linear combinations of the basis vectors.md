---
title: Linear combinations of the basis vectors
enableToc: false
tags: 
- linear-algebra
---
Using the [[notes/math/linear-algebra/Basis vectors|basis vectors]] for $\mathbb{R}^2$ as a starting point, we can actually build every vector in two-dimensional space, simply by adding scaled combinations of $\hat{i}$ and $\hat{j}$. These scaled combinations are called **linear combinations**.

**Example**:
Given [[notes/math/linear-algebra/Vector|vector]] $\vec{a} = (6, 4)$, it "moves" $6$ units in the horizontal direction, or $6 \times \hat{i}$. It also "moves" $4$ units in the vectical direction, or $4 \times \hat{j}$ .

So we could write a linear combination that expresses the vector, where we scale $\hat{i} = (1, 0)$ by $6$, and scale $\hat{j} = (0, 1)$ by $4$.

$$
\vec{a} = (6, 4) = 6 \cdot \begin{bmatrix} 1 \\ 0 \end{bmatrix} + 4 \cdot \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 6 \\ 0 \end{bmatrix} + \begin{bmatrix} 0 \\ 4 \end{bmatrix} = \begin{bmatrix} 6 \\ 4\end{bmatrix}
$$
Which means we can define a new notation to express a vector:
$$
\vec{a} = (6, 4) = 6 \cdot \hat{i} + 4 \cdot \hat{j}
$$