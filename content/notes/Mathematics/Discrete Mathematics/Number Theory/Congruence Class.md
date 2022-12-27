**Congruence Class** $[a]_n$ is the set of all integers that are [[notes/Mathematics/Discrete Mathematics/Number Theory/Congruence|congruent]] to $a \bmod n$.

$$
[5]_8 = ..., -11, -3, 5, 13, 21,... \equiv 5 \bmod 8
$$

$$
[1]_8 = ..., -15, -7, 1, 9, 17, ... \equiv 1 \bmod 8
$$

## Operations

- **Addition** - $[a]_n + [b]_n = [a + b]_n$
- **Subtraction**: $[a]_n - [b]_n = [a-b]_n$
- **Multiplication**: $[a]_n * [b]_n = [a * b]_n$

## Theorems

A pair of congruence classes $[a]_n$ and $[b]_n$ are zero divisors if and only if both $[a]_n$ and $[b]_n$ are non-zero, but $[a]_n \times [b]_n = [0]_n$.

If [[notes/Mathematics/Discrete Mathematics/Number Theory/gcd]](a, n) $>1$ then $[a]_n$ has (and is) a zero-divisor.

------

A pair of congruence classes $[a]_n$ and $[b]_n$ are **inverses** if and only if $[a]_n \times [b]_n = [1]_n$. A congruence class with an inverse is called "**invertible**".

$[a]_n$  is invertible if and only if $gcd(a,n) = 1$.