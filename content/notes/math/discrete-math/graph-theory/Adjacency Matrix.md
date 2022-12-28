---
title: Adjacency Matrix
enableToc: false
tags:
- graph-theory
- definition
---
An **adjacency matrix** is a square matrix used to represent a finite [[notes/math/discrete-math/graph-theory/Graph|graph]]. The elements of the [[notes/Mathematics/Linear Algebra/Matrix|matrix]] indicate whether pairs of [[notes/math/discrete-math/graph-theory/Vertex|vertices]] are [[notes/math/discrete-math/graph-theory/Adjacency (Graph)|adjacent]] or not in the graph.

If the graph is [[notes/math/discrete-math/graph-theory/Undirected Graph|undirected]] the adjacency matrix is symmetric.

Example of an undirected graph and its adjecancy matrix:

![adjacency graph](notes/assets/adjacency-graph.svg#invert_B_C|200)
$$ 
\begin{bmatrix}
1&1&0&0&1&0\\
1&0&1&0&1&0\\
0&1&0&1&0&0\\
0&0&1&0&1&1\\
1&1&0&1&0&0\\
0&0&0&1&0&0
\end{bmatrix}
$$
