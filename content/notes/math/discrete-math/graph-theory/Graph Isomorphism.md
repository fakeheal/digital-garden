---
title: Graph Isomorphism
enableToc: false
tags:
- graph-theory
- definition
---
An **isomorphism** of [[notes/math/discrete-math/graph-theory/Graph|graphs]] $G$ and $H$ is a [[notes/math/discrete-math/set-theory/Bijective Function|bijection]]  between the [[notes/math/discrete-math/graph-theory/Vertex|vertex]] [[notes/math/discrete-math/set-theory/Set|sets]] of $G$ and $H$
$$
f: V(G) \longrightarrow V(H)
$$

such that any two vertices $u$ and $v$ of $G$ are [[notes/math/discrete-math/graph-theory/Adjacency (Graph)|adjacent]] in $G$ iff $f(u)$ and $f(v)$ are adjacent in $H$. 

This kind of bijection is commonly described as "edge-perserving bijection".

If an isomorphism exists between two graphs, then the graphs are called **isomorphic** and denoted as $G \simeq H$.

In case when the bijection is a maping of a graph onto itself, i.e. when $G$ and $H$ are one and the same graph, the bijection is called an **automorphism** of $G$.

Graph isomorphism is an [[notes/math/discrete-math/set-theory/Equivalence Relation|equivalence relation]] on graphs and as such it partitions the [[notes/math/discrete-math/set-theory/Class (Set Theory)|class]] of all graphs into equivalance classes.

![graph isomorphism diagram](notes/assets/graph-isomorphism.png#invert_W_C)
