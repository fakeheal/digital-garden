---
title: Eulerian Graph
enableToc: false
tags:
- graph-theory
- definition
---
A [[notes/math/discrete-math/graph-theory/Graph|graph]] $G = (V, E)$ is an **Eulerian Graph** if it contains a [[notes/math/discrete-math/graph-theory/Euler Circuit|Euler Circuit]].

A [[notes/math/discrete-math/graph-theory/Connected Graph|connected graph]] $G$ is **Eulerian Graph** iff the [[notes/math/discrete-math/graph-theory/Degree (Vertex)|degree]] of each [[notes/math/discrete-math/graph-theory/Vertex|vertex]] is an even number.

![an eulerian graph diagram](notes/assets/euler-graph.png#invert_B)


An [[notes/math/discrete-math/graph-theory/Oriented Graph|oriented graph]] is Eulerian iff $d^+(v) = ^-(v)$ for all vertices and the undirected graph it is derived from has only one [[notes/math/discrete-math/graph-theory/Components|component]].