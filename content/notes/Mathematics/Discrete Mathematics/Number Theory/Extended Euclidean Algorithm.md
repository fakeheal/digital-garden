The **extended Euclidean algorithm** is an algorithm to compute integers xx and yy such that

$$ax + by = gcd(a,b)$$

given $a$ and $b$.

The existence of such integers is guaranteed by [[notes/Mathematics/Discrete Mathematics/Number Theory/Bézout's Identity]].

The **extended Euclidean algorithm** can be viewed as the reciprocal of modular exponentiation.

By reversing the steps in the [[notes/Mathematics/Discrete Mathematics/Number Theory/Euclidean Algorithm]], it is possible to find these integers $x$ and $y$. The whole idea is to start with the $gcd$ and recursively work our way backwards. This can be done by **treating the numbers as variables** until we end up with an expression that is **a linear combination of our initial numbers**. 

Let's find $gcd(102, 38):$

$$
\begin{flalign}
& 102 = 2 \times 38 + 26 \\
& 38 = 1 \times 26 + 12 \\
& 26 = 2 \times 12 + 2 \\
& 12 = 6 \times 2 + 0
\end{flalign}
$$

We start with our GCD. We rewrite it in terms of the previous two terms:

$$2 = 26 - 2 \times 12$$

We replace for $12$ by taking our previous line $(38 = 1 \times 26 + 12)$ and writing it in terms of $12$:

$$2 = 26 - 2 \times (38 - 1\times 26)$$

Collect like terms, the $26$'s, and we have

$$2 = 3 \times 26 - 2 \times 38$$

Repeat the process:

$$2 = 3 \times (102 - 2\times 38) - 2\times 38$$

The final result is our answer:

$$2 = 3 \times 102 - 8 \times 38$$

Thus $x = 3$ and $y-8$.