---
title: Unit Vector
enableToc: false
tags: 
- linear-algebra
- definition
---
Any [[notes/math/linear-algebra/Vector|vector]] of a magnitude of $1$ is called a **unit vector**, $\overrightarrow{u}$. In general, a unit vector doesn't have to point in a particular direction. As long as the vector is one unit long, it's a unit vector.

Every vector $\overrightarrow{v}$ in space will have a corresponding unit vector. It will be the vector that points in exactly the same direction as $\overrightarrow{v}$, but is only one unit long.

Oftentimes the unit vector is written as $\hat{u}$ rather than with typical vector notation, $\vec{u}$.

The unit vector that points to a vector could be found by using:
$$
\vec{u} = \frac{1}{||\vec{v}||}\cdot \vec{v}$$

where $||v||$ is the magntitude (length) of the $\vec{v}$. If $\vec{v}$ is an $n$-dimensional vector, then its length is the square root of the sum of all its squared components.
$$
||\vec{v}|| = \sqrt{v_1^2+v_2^2+v_3^2 +\dots+v_n^2}$$

**Example:** If we are to find the **unit vector** $\vec{v} = (1, 4, -2)$, first find the length of $\vec{v}$.
$$
||\vec{v}|| = \sqrt{1^2 + 4^2 + (-2)^2} = \sqrt{1 + 16 + 4} = \sqrt{21}$$
then plug $||\vec{v}||$ into the formula for $\vec{u}$ to find the direction of $\vec{v}$.

$$
\vec{u} = \frac{1}{||\vec{v}||}\cdot \vec{v} = \frac{1}{\sqrt{21}}\cdot \begin{bmatrix} 1 \\ 4 \\ -2 \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{21}} \\ \frac{4}{\sqrt{21}} \\ -\frac{2}{\sqrt{21}} \end{bmatrix}
$$