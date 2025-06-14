---
title: Euclid's Theorem
enableToc: false
tags: 
- number-theory
- definition
---
**Euclid's Theorem** is a fundamental, that asserts that there are infinitely many [[notes/math/discrete-math/number-theory/Prime numbers|prime numbers]].

## Proof by Euclid

Consider any finite list of prime numbers:

$$p_1, p_2, ..., p_n$$

It will be shown that at least one additional prime number not in this list exists.  Let $P$ be the product of all the prime numbers in the list:
$$
P = p_1 \cdot p_2 \cdot p_3 \cdot p_4 ... p_n
$$

Let $q = P + 1$. Then $q$ is either prime or not:

- if $q$ is prime, then there is at least one more prime that is not in the list, namely, $q$ itself;
- if $q$ is not a prime, then some prime factor $p$ divides $q$. If this factor $p$ were in our list, then it would divide $P$ (since $P$ is the product of every number in the list); but $p$ also divides $P + 1 = q$, as just stated. If $p$ divides $P$ and also $q$, then $p$ must also [[notes/math/discrete-math/number-theory/Divisibility#^9c52fd|divide the difference of the two numbers]], which is $(P+1) - P$ or just $1$. Since no prime number divides $1$, $p$ cannot be in the list. This means that at least one more prime number exists beyond those in the list.
