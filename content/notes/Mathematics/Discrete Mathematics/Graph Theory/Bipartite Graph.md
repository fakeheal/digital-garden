*двуделен граф, bigraph*

A **bipartite graph** is a [[notes/Mathematics/Discrete Mathematics/Graph Theory/Graph|graph]] whose vertices can be divided into two [[notes/Mathematics/Discrete Mathematics/Set Theory/Disjoint sets|disjoint]] and independent sets $U$ and $V$, that is every [[notes/Mathematics/Discrete Mathematics/Graph Theory/Edge|edge]] connectes a [[notes/Mathematics/Discrete Mathematics/Graph Theory/Vertex|vertex]] in $U$ to one in $V$.

A bipartite graph is a graph that doesn't contain any odd-length [[notes/Mathematics/Discrete Mathematics/Graph Theory/Cycle (Graph)|cycles]].

If the set of edges of bipartite graph contains all vertices from $X$ and all vertices from $Y$ it is called *complete bipartite graph*.

$$
\begin{align}
V = X \cup Y \\
E = \{xy | x \in X, y \in Y \}
\end{align}
$$
If $|X| = m$ and $|Y| = n$ then the complete bipartite graph is denoted by $K_{n,m}$.

$K_{n,m}$ contains $m+n$ vertices and $m \times n$ edges.

A graph $G$ is bipartite iff all of its [[notes/Mathematics/Discrete Mathematics/Graph Theory/Cycle (Graph)|cycles]] are of even length.