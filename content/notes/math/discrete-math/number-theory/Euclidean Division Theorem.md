---
title: Euclidean Division Theorem
enableToc: false
tags: 
- number-theory
- theorem
---
## Theorem

Given two integers $a$ and $b$, with $b \neq 0$, there exists unique integers $q$ and $r$ such that: $$a = bq + r \text{ and } 0 \leq r \lt |b|$$

where $q$ is the quotient and $r$ is the remainder, $b$ is the divisor and $a$ is the dividend.

## Long Divison

$$
\require{enclose}
\begin{array}{rll}
    125 && \hbox{(Explanations)} \\[-3pt]
   4 \enclose{longdiv}{500}\kern-.2ex \\[-3pt]
      \underline{4\phantom{00}} && \hbox{($4 \times 1 = 4$)} \\[-3pt]
      10\phantom{0} && \hbox{($5 - 4 = 1$)} \\[-3pt]
      \underline{\phantom{0}8\phantom{0}} && \hbox{($4 \times 2 = 8$)} \\[-3pt]
      \phantom{0}20 && \hbox{($10 - 8 = 2$)} \\[-3pt]
      \underline{\phantom{0}20} && \hbox{($4 \times 5 = 20$)} \\[-3pt]
      \phantom{00}0
  \end{array}
$$
