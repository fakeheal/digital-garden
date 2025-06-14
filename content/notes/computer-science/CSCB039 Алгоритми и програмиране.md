---
tags:
  - computer-science
  - algorithms
title: CSCB039 Алгоритми и програмиране
---

> [!info]  
> 
> Записки от лекциите по [CSCB039 Алгоритми и програмиране](https://ecatalog.nbu.bg/default.asp?V_Year=2022&YSem=4&Spec_ID=&Mod_ID=&PageShow=coursepresent&P_Menu=courses_part1&Fac_ID=3&M_PHD=0&P_ID=832&TabIndex=1&K_ID=48853&K_TypeID=10&l=0), водени от доц. д-р Ласко Ласков.

## Лекция №1

**Algorithm:**
- A well-defined computational procedure that has an **input** (set of) value(s) and produces an **output** (set of) value(s).
- A tool to solve a well-specified computational problem.

**Selecting an algorithm & correctness**:
- depending on the size of the input 
- the complexity of the input  
- restrictions on the input values

**Correct algorithms stop** with correct output for every input instance and solve the computational problem. **Incorrect algorithms** can still be useful, if we can control their _incorrect algorithms_.

> **NP-Complete problems**
> - No efficient algorithm has been found, but it has never been proved that an efficient algorithm doesn't exist.
> - If an efficient algorithm exists for any problem, then efficient algorithms exist for all of them
> - A small change in a problem can turn it into a NP-complete

**Pseudocode:**
Formalised, self-explanatory notation that represents algorithms. Language-specific constructions are reduced as much as possible. Not concerned with issues of *software engineering*.

**Analysing algorithms:**
Predicting the resources an algorithm requires memory storage, communication bandwidth, hardware, but most often **computational time**. Model RAM (random-access machine) has generic one processor, instructions are executed one after another, without concurrent operations. The model allows for arithmetic, data movement, control statements, each instruction in constant amount of time. It also has integer and floating point data type, limits on the size of each word of data is also applied.

In general, the **running time** of an algorithm is a function of the size of its input. The input size is defined by the problem being solved by an algorithm:
- sorting, discrete Fourier transforms: _the number of items_
- multiplying two integers: *the number of bits that represent them*
- graph algorithm: *the number of vertices and the number of edges*

The running time is:
- number of primitive operations that are executed by the algorithm
- primitive operation must be as machine-independent as possible

**Pseudo code for insertion sort & running time**

```
procedure Insertion-Sort(A)
	for j = 2 to A.length do
		key = A[j]
		i = j - 1
		while i > 0 and A[i] > key do
			A[i + 1] = A[i]
			i = i - 1
		end while
		A[i + 1] = key
	end for
end procedure
```

Lets assume the execution of the line $i$ takes time $c_i = const$.

$$
T(n) = c_2n+c_3(n-1)+c_4(n-1)+c_5\sum_{j=2}^nt_j+c_6\sum_{j = 2}^n(t_j-1)+c_7\sum_{j=2}^n(t_j-1)+c_9(n-1)
$$
In the case of the input being already sorted:
$$
\begin{align*}
 T(n) &= c_2n+c_3(n-1)+c_4(n-1)+c_5(n-1)+c_9(n-1) = \\
&=(c_2+c_3+c_4+c_5+c_9)n - (c_3 + c_4+c_5+c_9) =\\
& = an +b
\end{align*}
$$

In the case of the input being sorted in reverse order:

$$
\begin{align*}
T(n) &= c_2n + c_3(n-1)+c_4(n-1)+c_5\bigg(\frac{n(n1+1)}{2} -1 \bigg) + c_6\bigg(\frac{n(n-1)}{2}\bigg) \\
& +c_7\bigg(\frac{n(n-1)}{2}\bigg) + c_9(n-1) \\
& = a^2n+bn+c
\end{align*}
$$
![[notes/programming/Sorting#Insertion sort|Insertion sort]]

**Divide-and-conquer**

Many algorithms have recursive structure, breaking the problem into several subproblems that are similar to the original, but with smaller size. The idea is to solve the subproblems recursively and combine their solutions.

On each level of the recursion three steps are involved:
- **Divide** the problem into subproblems that are smaller instances
- **Conquer** the subproblems by solving them recursively
- **Combine** the solutions to the subproblems in to the general solution

```
procedure MERGE-SORT(A, p, r)
	if p < r then
		q = ⌊(p + r )/2⌋ 
		MERGE-SORT(A, p, q) 
		MERGE-SORT(A,q + 1,r) 
		MERGE(A,p,q,r)
	end if
end procedure
```

*note:* $\lg n$ stands for $log_2n$

$$
\begin{equation*}
T(n) = \begin{cases}
\Theta(1) &&\text{ if } n =1\\
\\
2T(\frac{n}{2}) + \Theta(n) && \text{ if }n > 1
\end{cases}
\end{equation*}

$$

![[notes/programming/Sorting#Merge sort]]


**Asymptotic notation**
- **Best Case**: $\Omega$ (Big Omega)
- **Average Case**: $\Theta$ (Big Theta)
- **Worst case**: $O$ (Big O)
## Лекция №2
