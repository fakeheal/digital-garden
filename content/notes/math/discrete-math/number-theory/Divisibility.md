---
title: Divisibility
enableToc: false
tags: 
- number-theory
- definition
---
An integer $N$ is divisible by another integer $M$ if there exists an integer $K$ such that $K \cdot M = N$.

**Example 1**.

$$
\begin{align}
& N = 10 \quad M = 2 \quad M | N \\
& \text{since there exists a } K = 5 \text{ such that } 2 \times 5 = 10
\end{align}
$$

**Example 2**.

$$
\begin{align}
& N = -88 \quad M = 4 \quad M | N \\
& \text{since there exists a } K = -22 \text{ such that } 4 \times -22 = -88
\end{align}
$$

**Example 3**.

$$
\begin{align}
2 \not | 3
\text{, because there is no such integer } K \text{ such that } K \times 2 = 3
\end{align}
$$

## Properties

### if $a | b$ and $b | c \rightarrow a|c$

$$
\begin{align}
& a = 2 \quad b = 4 \quad c = 16\\
& a|b = 2 | 4 = 2 \text{ and } b | c = 4 | 16 = 4 \rightarrow a|c = 2 | 16 = 8
\end{align}
$$

### if $a|b$ and $b|a \rightarrow a = b \text{ or } a = -b$

$$
\begin{align}
& a = 3 \quad b = -3 \\
& a|b = -1 \quad b|a = -1
\end{align}
$$

### if $a|b \rightarrow a | bc$

$$
a = 3, b = 6 \quad a|b = 3|6 = 2 \quad a|bc = 3 | 18 = 6
$$

### if $a|b$ and $a|c \rightarrow a | (b-c)$

^9c52fd

