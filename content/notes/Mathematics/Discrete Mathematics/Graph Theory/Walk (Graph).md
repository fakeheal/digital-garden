---
title: Vertex Connectivity
enableToc: false
tags: 
- discrete-mathematics
- graph-theory
- definition
---
*маршрут*

For the [[notes/Mathematics/Discrete Mathematics/Graph Theory/Graph|graph]] $G$, and vertices $v$ and $w$, a **walk** from $v$ to $w$ is a finite alternating sequence of [[notes/Mathematics/Discrete Mathematics/Graph Theory/Adjacency (Graph)|adjacent vertices and edges]]  of $G$.

The **length of a walk** is the number of [[notes/Mathematics/Discrete Mathematics/Graph Theory/Edge|edges]] in a walk.

Walks that start and end at different vertices are called *open walks*.

Walks that start and end at the same vertex are called *closed walks*.

## Types

| properties | $v_o \neq v_k$ | $v_o = v_k$ |
|-----------|---------|-------|
| repeats edges | [[notes/Mathematics/Discrete Mathematics/Graph Theory/Walk (Graph)\|walk (маршрут)]] | [[notes/Mathematics/Discrete Mathematics/Graph Theory/Walk (Graph) \|closed walk (затворен маршрут)]]|
| repeated vertices | [[notes/Mathematics/Discrete Mathematics/Graph Theory/Trail (Graph)\|trail (верига)]] | closed trail / curcuit (затворена верига) 
| no repeated edges / vertices | [[notes/Mathematics/Discrete Mathematics/Graph Theory/Path (Graphs) \| path (път)]] | [[notes/Mathematics/Discrete Mathematics/Graph Theory/Cycle (Graph)\|cycle (цикъл)]]  

