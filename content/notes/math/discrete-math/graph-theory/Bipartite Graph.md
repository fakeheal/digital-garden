---
title: Bipartite Graph
enableToc: false
tags:
- graph-theory
- definition
---
*двуделен граф, bigraph*

A **bipartite graph** is a [[notes/math/discrete-math/graph-theory/Graph|graph]] whose vertices can be divided into two [[notes/math/discrete-math/set-theory/Disjoint sets|disjoint]] and independent sets $U$ and $V$, that is every [[notes/math/discrete-math/graph-theory/Edge|edge]] connectes a [[notes/math/discrete-math/graph-theory/Vertex|vertex]] in $U$ to one in $V$.

A bipartite graph is a graph that doesn't contain any odd-length [[notes/math/discrete-math/graph-theory/Cycle (Graph)|cycles]].

If the set of edges of bipartite graph contains all vertices from $X$ and all vertices from $Y$ it is called *complete bipartite graph*.

$$
\begin{align}
V = X \cup Y \\
E = \{xy | x \in X, y \in Y \}
\end{align}
$$
If $|X| = m$ and $|Y| = n$ then the complete bipartite graph is denoted by $K_{n,m}$.

$K_{n,m}$ contains $m+n$ vertices and $m \times n$ edges.

A graph $G$ is bipartite iff all of its [[notes/math/discrete-math/graph-theory/Cycle (Graph)|cycles]] are of even length.
