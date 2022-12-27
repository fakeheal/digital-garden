---
title: Graph Isomorphism
enableToc: false
tags: 
- discrete-mathematics
- graph-theory
- definition
---

An **isomorphism** of [[notes/Mathematics/Discrete Mathematics/Graph Theory/Graph|graphs]] $G$ and $H$ is a [[notes/Mathematics/Discrete Mathematics/Set Theory/Bijective Function|bijection]]  between the [[notes/Mathematics/Discrete Mathematics/Graph Theory/Vertex|vertex]] [[notes/Mathematics/Discrete Mathematics/Set Theory/Set|sets]] of $G$ and $H$
$$
f: V(G) \longrightarrow V(H)
$$

such that any two vertices $u$ and $v$ of $G$ are [[notes/Mathematics/Discrete Mathematics/Graph Theory/Adjacency (Graph)|adjacent]] in $G$ iff $f(u)$ and $f(v)$ are adjacent in $H$. 

This kind of bijection is commonly described as "edge-perserving bijection".

If an isomorphism exists between two graphs, then the graphs are called **isomorphic** and denoted as $G \simeq H$.

In case when the bijection is a maping of a graph onto itself, i.e. when $G$ and $H$ are one and the same graph, the bijection is called an **automorphism** of $G$.

Graph isomorphism is an [[notes/Mathematics/Discrete Mathematics/Set Theory/Equivalence Relation|equivalence relation]] on graphs and as such it partitions the [[notes/Mathematics/Discrete Mathematics/Set Theory/Class (Set Theory)|class]] of all graphs into equivalance classes.

![[notes/Mathematics/assets/graph isomorphism.png#invert_B_C]]