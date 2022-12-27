[[notes/Mathematics/Linear Algebra/Linear systems]] can have: 

### One solution (called _the unique solution_)

$$
\begin{bmatrix}
1 & 0 & 0 & \bigm| & a\\
0 & 1 & 0 & \bigm| & b\\
0 & 0 & 1 & \bigm| & c
\end{bmatrix}
\rightarrow 
(x, y, z) = (a, b, c)
$$

### Infinitely many solutions

$$
\begin{bmatrix}
1 & 0 & 0 & \bigm| & a\\
0 & 1 & 0 & \bigm| & b\\
0 & 0 & 0 & \bigm| & c
\end{bmatrix}
\text{ and } 
c = 0
$$

### No solutions

$$
\begin{bmatrix}
1 & 0 & 0 & \bigm| & a\\
0 & 1 & 0 & \bigm| & b\\
0 & 0 & 0 & \bigm| & c
\end{bmatrix}
\text{ and } 
c \neq 0
$$