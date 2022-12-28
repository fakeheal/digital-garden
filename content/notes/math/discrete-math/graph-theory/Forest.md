---
title: Forest
enableToc: false
tags:
- graph-theory
- definition
---
A **forest** is an [[notes/math/discrete-math/graph-theory/Undirected Graph|undirected graph]] in which any two [[notes/math/discrete-math/graph-theory/Vertex|vertices]] are connected by at most one [[notes/math/discrete-math/graph-theory/Path (Graphs)|path]].

Equivalently, a **forest** is an [[notes/math/discrete-math/graph-theory/Undirected Graph|undirected graph]] with no [[notes/math/discrete-math/graph-theory/Cycle (Graph)|cycles]], all of whose [[notes/math/discrete-math/graph-theory/Components|connected components]] are [[notes/math/discrete-math/graph-theory/Tree (Graph)|trees]]; in other words, the graph consists of a disjoint union of *trees*.

**Theorem:** A [[notes/math/discrete-math/graph-theory/Graph|graph]] is a [[notes/math/discrete-math/graph-theory/Forest|forest]] if and only if each pair of distinct [[notes/math/discrete-math/graph-theory/Edge|edges]] $\{x, y\}$ there's only one [[notes/math/discrete-math/graph-theory/Path (Graphs)|path]] from $x$ to $y$.

**Theorem:** A **forest** with $n$ vertices and $k$ component has $n-k$ edges.

