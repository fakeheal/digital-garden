---
title: Adjacency (Graph)
enableToc: false
tags:
- graph-theory
- definition
---
Two distinct [[notes/math/discrete-math/graph-theory/Incidence (Graph)|incidences]] $(u, e)$ and $(v, f)$ are **adjacent** if either the vertices $u, v$ or the edges $e, f$ are adjacent, which is the case if one of the following holds:

- $u = v$ and $e \neq f$
- $e = f$ and $u \neq v$, or
- $e = \{u, v\}, f = \{v, w\}$, and $u \neq w$

In simpler terms:
- two vertices that are connected by an edge are *adjacent*
- two edges that share a vertex are *adjacent*
