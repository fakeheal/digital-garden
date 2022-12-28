---
title: Equivalence Class
enableToc: false
tags: 
- set-theory
- definition
---
When the elements of some [[notes/math/discrete-math/set-theory/Set|set]] $S$ have a notion of [[notes/math/discrete-math/set-theory/Equivalence Relation|equivalence]], then one may naturally split the set $S$ into **equivalence classes**. These equivalence classes are constructed so that elements $a$  and $b$ belong to the same **equivalence class** iff they are equivalent.

Formally, given a set $S$ and an equivalence relation $\sim$ on $S$, the equivalence class of an element $a$ in $S$, denoted by $[a]$, is the set

$$
\{x \in S : x \sim a\}
$$
of elements which are equivalent to $a$. The equivalence classes form a [[notes/math/discrete-math/set-theory/Partition of a set|partition]] of $S$ and is sometimes called the **quotient set** or the **quotient space** of $S$ by $\sim$ , and is denoted by $S / \sim$.

**Example**:

If $X$ is the set of all cars, and $\sim$ is the equivalence relation of "has the same color as", then one particular equivalence class would consist of all green cars, and $X / \sim$ could be naturally identified with the set of all car colors.
