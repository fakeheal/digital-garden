---
title: Matrix Rank
enableToc: false
tags: 
- linear-algebra
---
Тhe **rank** of a [[notes/math/linear-algebra/Matrix|matrix]] $A$ is the dimension of the [[notes/math/linear-algebra/Vector|vector]] space generated (or [[notes/math/linear-algebra/Span of a vector set|spanned]]) by its columns. This corresponds to the maximal number of [[notes/math/linear-algebra/Linear (In)dependence|linearly independent]] columns of $A$.

A common approach to finding the rank of a matrix is to reduce it to a simpler form, generally [[notes/math/linear-algebra/Row-echelon form|row echelon form]], by [[notes/math/linear-algebra/Simple row operation|elementary row operations]]. 

A fundamental result in linear algebra is that the column rank and the row rank are always equal.

A matrix is said to have **full rank** if its rank equals the largest possible for a matrix of the same dimensions, which is the lesser of the number of rows and columns.

A matrix is said to be **rank-deficient** if it does not have full rank. The **rank deficiency** of a matrix is the difference between the lesser of the number of rows and columns, and the rank.