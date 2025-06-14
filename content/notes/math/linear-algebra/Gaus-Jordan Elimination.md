---
title: Gaus-Jordan Elimination
enableToc: false
tags: 
- linear-algebra
- algorithm
---
An algorithm that uses [[notes/math/linear-algebra/Simple row operation|simple row operations]] to bring a [[notes/math/linear-algebra/Matrix|matrix]]  into [[notes/math/linear-algebra/Row-echelon form|row-echelon form]].

Steps:
1. *optional*: Pull out any scalars from each row in the matrix.
2. If the first entry in the first row is $0$, swap it with another row that has a non-zero entry in its first column. Otherwise, move to step 3.
3. Multiply through the first row by a scalar to make the leading entry equal to $1$.
4. Add scaled multiples of the first row to every other row in the matrix until every entry of the first column, other than the leading $1$ in the first row, is a $0$.
5. Go back to step 2 and repeat the process until the matrix is in **reduced row-echelon form**.
