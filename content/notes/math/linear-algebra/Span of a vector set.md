---
title: Span of a vector set
enableToc: false
tags: 
- linear-algebra
- definition
---
The **span** of a [[notes/math/discrete-math/set-theory/Set|set]] of [[notes/math/linear-algebra/Vector|vectors]] is the collection of all vectors which can be represented by some [[notes/math/linear-algebra/Linear combinations of the basis vectors|linear combination]] of the set.

In simple terms, if you choose *absolutely* any vector, anywhere in $\mathbb{R}^2$, you can get to that vector using a linear combination of $\hat{i}$ and $\hat{j}$. And because of that, you can say specifically that $\hat{i}$ and $\hat{j}$ **span** $\mathbb{R}^2$. If a set of vectors spans a space, it means you can use a linear combination of those vectors to reach any vector in the space.

In the same way, we can get to any vector, anywhere in $\mathbb{R}^3$, using a linear combination of the basis vectors $\hat{i}$, $\hat{j}$ and $\hat{k}$ **span** $\mathbb{R}^3$, the entirety of three-dimensional space.

These facts are denoted by:
$$
Span(\hat{i}, \hat{j}) = \mathbb{R}^2
$$
$$
Span(\hat{i}, \hat{j}, \hat{k}) = \mathbb{R}^3
$$
We cannot span $\mathbb{R}^n$ with fewer than $n$ vectors.

> Given **any** two linearly independent vectors, we can use them to define the entire real plane ($\mathbb{R}^2$)!