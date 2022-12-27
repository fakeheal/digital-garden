An **adjacency matrix** is a square matrix used to represent a finite [[notes/Mathematics/Discrete Mathematics/Graph Theory/Graph]]. The elements of the [[notes/Mathematics/Linear Algebra/Matrix|matrix]] indicate whether pairs of [[notes/Mathematics/Discrete Mathematics/Graph Theory/Vertex|vertices]] are [[notes/Mathematics/Discrete Mathematics/Graph Theory/Adjacency (Graph)|adjacent]] or not in the graph.

If the graph is [[notes/Mathematics/Discrete Mathematics/Graph Theory/Undirected Graph|undirected]] the adjacency matrix is symmetric.

Example of an undirected graph and its adjecancy matrix:

![[notes/Mathematics/assets/adjacency-graph.svg#invert_B_C|200]]
$$ 
\begin{bmatrix}
1&1&0&0&1&0\\
1&0&1&0&1&0\\
0&1&0&1&0&0\\
0&0&1&0&1&1\\
1&1&0&1&0&0\\
0&0&0&1&0&0
\end{bmatrix}
$$
