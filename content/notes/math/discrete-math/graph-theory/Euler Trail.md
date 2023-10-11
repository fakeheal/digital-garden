---
title: Euler Trail
enableToc: false
tags:
- graph-theory
- definition
---
An **Euler Trail** is a [[notes/math/discrete-math/graph-theory/Trail (Graph)|trail]] that visits every [[notes/math/discrete-math/graph-theory/Edge|edge]] exactly once.

A **Euler Trail** exists in a [[notes/math/discrete-math/graph-theory/Graph|graph]] iff there are only two [[notes/math/discrete-math/graph-theory/Vertex|vertices]] of odd [[notes/math/discrete-math/graph-theory/Degree (Vertex)|degree]].

If a [[notes/math/discrete-math/graph-theory/Graph|graph]] has more than 2 [[notes/math/discrete-math/graph-theory/Vertex|vertices]] of odd [[notes/math/discrete-math/graph-theory/Degree (Vertex)|degree]] then it has **no Eulerian trail**.

To find an Euler trail in a graph using [[notes/math/discrete-math/graph-theory/Fleury's Algorithm|Fleury’s Algorithm]], start from an **odd** degree vertex and finish on an **odd** degree vertex.