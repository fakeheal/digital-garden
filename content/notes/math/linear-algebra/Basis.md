---
title: Basis
enableToc: false
tags: 
- linear-algebra
- definition
---
The concept of **basis** is closely connected to the idea of [[notes/math/linear-algebra/Linear (In)dependence|linear independence]].

A [[notes/math/linear-algebra/Vector|vector]] [[notes/math/discrete-math/set-theory/Set|set]] is a basis for a space if it:
1. spans the space, and
2. is linearly independent.

**The basis of the subspace**

If any [[notes/math/linear-algebra/Subspace|subspace]] $Q$ is given as the [[notes/math/linear-algebra/Span of a vector set|span]] of a set of vectors (whic means the subspace is made up of all of the linear combinations of the set of vectors), and if all the vectors in the set are linearly dependent, then the set of vectors is a **basis** for the subspace $Q$.

Said a different way, if a set of vectors forms the basis of a subspace $Q$, it means the span of those vectors forms a subspace (which means you can "get to" any vector in the subspace using a linear combination of the vectors in the set), and that the vectors in the set are linearly independent.

Think about the basis of a subspace as the smallest, or minimum, set of vectors that can span the subspace. There are no “redundant” or “unnecessary” vectors in the set.

**Standard basis**
You can pick any two linearly independent vectors in $\mathbb{R}^2$, and as a set, they will form a basis for $\mathbb{R}^2$.

We call the standard basis of $\mathbb{R}^2$ the set of [[notes/math/linear-algebra/Unit Vector|unit vectors]].