---
title: Proof of Nested Interval Theorem
enableToc: true
tags: 
- fundamentals
- proof
- calculus
---  

## Theorem

For each $n \in N$ assume we are given a closed interval $I_n = [a_n, b_n] = \{x \in R: a_n \leq x \leq b_n \}$. Also assume each $I_n$ contains $I_{n+1}$. Then the nested sequence of closed intervals $I \supseteq I_2 \supseteq I_3 \supseteq \dots \supseteq I_n$ has a non-empty intersection.

## Proof

We need an $x$, so $x \in I_n$ for every $n \in \mathbb{N}$.

$$
A = \{a_n: n \in \mathbb{N}\}
$$

Every $b_n$ is an upper bound of $A$. Thus, by [[notes/math/Axiom of Completeness|Axiom of Completeness]], $sup\{A\}$ exists. Let $x = sup\{A\}$ . Consider $I_n = [a_n, b_n]$.

$a_n \leq x \leq $b_n \implies x \in I_n$
