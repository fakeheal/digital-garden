---
title: Euler's Theorem
enableToc: false
tags:
- graph-theory
- theorem
---
Let $G$ be a [[notes/math/discrete-math/graph-theory/Connected Graph|connected]] [[notes/math/discrete-math/graph-theory/Planarity|planar]] graph with $|V| = v$ and $|E| = e$. Let $r$ be the number of [[notes/math/discrete-math/graph-theory/Region (Graph)|regions/faces]] determined by the [[notes/math/discrete-math/graph-theory/Planar embedding|planar embedding]][^1]. Then we conclude that
$$
v - e + r = 2
$$

> **Imporant**: *Euler's Theorem* can be only used for proving some graphs are non-planar. Cannot be used to prove a graph is planar.

### Corollary 1

Let $G$ be a [[notes/math/discrete-math/graph-theory/Planarity|planar graph]] with $k$ [[notes/math/discrete-math/graph-theory/Components|components]]. Then in any planar embedding of $G$ the number of regions equals:
$$
|F| = |E| - |V| + k + 1
$$

![corollary 2 drawing](/notes/assets/graph-euler-theorem-planar-k-component-graph.png#invert_B)

### Corollary 2

Let $G$ is a planar graph with $|V| \geq 3$ . Then
$$
|E| \leq 3 |V| - 6
$$

### Corollary 3
Let $G$ is a planar [[notes/math/discrete-math/graph-theory/Bipartite Graph|bipartite graph]] with $|V| \geq 3$, then
$$
|E| \leq 2|V| - 4
$$

[^1]: If the graph isn't presented in its planar embedding, the theorem doesn't hold.