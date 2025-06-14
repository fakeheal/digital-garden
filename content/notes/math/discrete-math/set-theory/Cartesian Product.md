---
title: Cartesian Product
enableToc: false
tags: 
- set-theory
- definition
---
*(декартово произвдение)*

Given [[notes/math/discrete-math/set-theory/Set|sets]] $A$ and $B$, the cartesian product of $A$ and $B$, denoted $A \times B$ and read as "$A$ cross $B$" is the set of all [[notes/math/discrete-math/set-theory/Ordered Pairs|ordered pairs]] $(a,b)$, where $a \in A$ and $b \in B$.

$$A \times B = \{(a,b) | a \in A \wedge b \in B\}$$

Examples: 

$$A = \{1,2\}, B = \{c,d\}, A \times B = \{(1,c),(1,d),(2,c),(2,d)\}$$

$$A = \{1,2\}, B = \{\$,1\}, C= \{x, y\}$$

$$A \times B \times C = \{(1, \$, x), (1, \$, y), (1, !, y), (2, \$, x), (2, \$, y), (2, !, x), (2, !, y)\}$$

The number of pairs is derived from multiplying the cardinality of the sets ($n(A) \times n(B)$).

> **Cartesian Plane (декартова равнина)**
> To find all the points on the cartesian plane, do the cartesian product of $R - R \times R$.

## Properties

- **Distributive**: $A \times (B \cup C) = (A \times B) \cup (A \times C)$ or $A \times (B \cap C) = (A \times B) \cap (A \times C)$
- $\text{if } A \times A = B \times B \text{, then } A = B$

The cartesian product of two sets is also a [[notes/math/discrete-math/set-theory/Relation|relation]].
