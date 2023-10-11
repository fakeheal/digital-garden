---
title: Fleury's Algorithm
enableToc: false
tags:
- graph-theory
- algorithm
---
**Fleury's Algorithm** is used to find [[notes/math/discrete-math/graph-theory/Euler Circuit|Euler circuits]] or [[notes/math/discrete-math/graph-theory/Euler Trail|Euler trails]].

Consider a graph known to have all edges in the same component and at most two vertices of odd degree. 

The algorithm starts at a vertex of odd degree, or, if the graph has none, it starts with an arbitrarily chosen vertex. At each step it chooses the next edge in the path to be one whose deletion would not disconnect the graph, unless there is no such edge, in which case it picks the remaining edge left at the current vertex. It then moves to the other endpoint of that edge and deletes the edge. At the end of the algorithm there are no edges left, and the sequence from which the edges were chosen forms an Eulerian cycle if the graph has no vertices of odd degree, or an Eulerian trail if there are exactly two vertices of odd degree.