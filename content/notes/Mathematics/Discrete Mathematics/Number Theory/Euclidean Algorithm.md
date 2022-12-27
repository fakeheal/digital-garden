This algorithm finds [[notes/Mathematics/Discrete Mathematics/Number Theory/gcd]] by performing repeated division starting from the two numbers we want to find the [[notes/Mathematics/Discrete Mathematics/Number Theory/gcd]] of **until we get a remainder of** $0$.

- If $A = 0$ then $gcd(A, B) = B$, since the $gcd(0, B) = B$, and we can stop
- If $B = 0$ then $gcd(A, B) = A$, since the $gcd(A, 0) = A$, and we can stop
- Write $A$ in quotient remainder form $A = B \cdot Q  + R$
- Find $gcd(B, R)$, using the Euclidean Algorithm since $gcd(A, B) = GCD(B, R)$

**Example**

$$
\begin{flalign}
&A = 270 \quad B = 192 \quad A \neq 0 \text{ and } B \neq 0 \\ 
&192 | 270 = 1 \text{ and remainder of } 78 <=> 270 = 192 \times 1 + 78\\ 
&gcd(192, 78) \text{, since } gcd(270, 192) = gcd(192, 78)\\

& ...

\end{flalign}
$$