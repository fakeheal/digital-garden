---
title: Walk (Graph)
enableToc: false
tags:
- graph-theory
- definition
---
*маршрут*

For the [[notes/math/discrete-math/graph-theory/Graph|graph]] $G$, and vertices $v$ and $w$, a **walk** from $v$ to $w$ is a finite alternating sequence of [[notes/math/discrete-math/graph-theory/Adjacency (Graph)|adjacent vertices and edges]]  of $G$.

The **length of a walk** is the number of [[notes/math/discrete-math/graph-theory/Edge|edges]] in a walk.

Walks that start and end at different vertices are called *open walks*.

Walks that start and end at the same vertex are called *closed walks*.

## Types

| properties | $v_o \neq v_k$ | $v_o = v_k$ |
|-----------|---------|-------|
| repeats edges | [[notes/math/discrete-math/graph-theory/Walk (Graph)\|walk (маршрут)]] | [[notes/math/discrete-math/graph-theory/Walk (Graph) \|closed walk (затворен маршрут)]]|
| repeated vertices | [[notes/math/discrete-math/graph-theory/Trail (Graph)\|trail (верига)]] | closed trail / curcuit (затворена верига) 
| no repeated edges / vertices | [[notes/math/discrete-math/graph-theory/Path (Graphs) \| path (път)]] | [[notes/math/discrete-math/graph-theory/Cycle (Graph)\|cycle (цикъл)]]  

