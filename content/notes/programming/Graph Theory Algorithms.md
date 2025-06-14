---
title: Graph Theory Algorithms
enableToc: true
tags: 
- programming
- graph-theory
- algorithms
---
> [!info]  
>   
> Notes I wrote down while taking the [Graph Theory by William Fiest](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P) course on Youtube.

## Graph Theory Introduction
[*link to video*](https://www.youtube.com/watch?v=eQA-m22wjTQ&list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P&index=2)

### Types of graphs

- [[notes/math/discrete-math/graph-theory/Undirected Graph|Undirected Graph]]
- [[notes/math/discrete-math/graph-theory/Directed Graph|Directed Graph]]
- [[notes/math/discrete-math/graph-theory/Weighted Graph|Weighted Graph]]

**Special Graphs:**

- [[notes/math/discrete-math/graph-theory/Tree (Graph)|Tree (Graph)]]
- [[notes/math/discrete-math/graph-theory/Rooted Tree (Graph)|Rooted Tree (Graph)]]
- [[notes/math/discrete-math/graph-theory/Directed Acyclic Graph|Directed Acyclic Graph]]
- [[notes/math/discrete-math/graph-theory/Bipartite Graph|Bipartite Graph]]
- [[notes/math/discrete-math/graph-theory/Complete Graph|Complete Graph]]

### Representing Graphs in computers

#### Adjacency Matrix
Using an [[notes/math/discrete-math/graph-theory/Adjacency Matrix|adjacency matrix]], we can represent graphs inside 2-dimensional arrays.


| Pros | Cons |
|:---:|:---:|
| Space efficient for representing dense graphs | Require $O(V^2)$ space |
| Edge weight lookup is $O(1)$ | Iterating over all edges takes $O(V^2)$ time |
| Simplest graph representation||

#### Adjacency List
An adjacency list is a way to represent a graphs as a map from nodes to lists of edges.

![Example of an adjacency list representing graphs](notes/assets/adjacency-list.png#invert_B_W)

| Pros | Cons |
|:---:|:----:|
| Space efficient for representing sparse graphs| Less space efficient for denser graphs|
|Iterating over all edges is efficient|Edge weight lookup is $O(E)$|
||Slightly more complex graph representation|


#### Edge List
An edge list is a way to represent a graph simply as an unordered list of edges. Assume the notation for any triplet $(u,v,w)$ means: "the cost from node $u$ to node $v$ is $w$".

Example:

```
[(C, A, 4), (A, C, 1), (B, C, 6), (A, B, 4), (C, B, 1), (C, D, 2)]
```

| Pros | Cons |
|:---:|:----:|
| Space efficient for representing sparse graphs | Less space efficient for denser graphs|
|Iterating over all edges is efficient | Edge weight lookup is $O(E)$|
|Very simple structure| |

## Common Graph Theory Problems
[*link to video*](https://www.youtube.com/watch?v=87X57ldq1ok&list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P&index=3)

**Identifying a problem:**
- Is the graph directed or undirected?
- Are the edges of the graph weighted?
- Is the graph I will encounter likely to be sparse or dense with edges?
- Should I use an adjacency matrix, adjacency list, an edge list or other structure to represent the graph efficiently?

**Common problems:**
- **Shortest path problem:** BFS, Dijkstra's algorithm, Bellman-Ford, Floyd-Warsahll, A\* and many more
- **Connectivity**: Union find data structure or any search algorithm (BFS, DFS)
- **Negative cycles**: Bellman-Ford and Floyd-Warshall
- **Strongly connected components** (SCCs can be thought of as self-contained cycles within a directed graph where every vertex in a givencycle can reach every other vertex in the same cycle): Tarjan's and Kosaraju's algorithms
- **Traveling Salesman Problem**: Held-Karp, branch and bound and many approximation algorithms
- [[notes/math/discrete-math/graph-theory/Bridge|Bridges]]
- [[notes/math/discrete-math/graph-theory/Cut Vertex|Cut Vertex]]
- **Minimum spanning tree** (a MST is a subset of the edges of a connected, edge-weighted graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight): Kruskal's, Prim's & Borůvka's algorithm
- **Network flow: max flow** Ford-Fulkerson, Edmonds-Karp & Dinic's algorithm

> Bridges & cut vertices are important in graph theory because they often hint at weak points, bottlenecks or vulnerabilities in a graph

## Depth First Search
[*link to video*](https://www.youtube.com/watch?v=7fujbpJ0LB4&list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P&index=4)

Time complexity: $O(V+E)$

**Simple traversal:**
``` python
# Global or class scope variables
n = number of nodes in the graph
g = adjacency list representing graph
visited = [false, ..., false] #size n

def dfs(at):
	if visited[at]: return
	visited[at] = true

	neighbours = g[at]
	for next in neighbours:
		dfs(next)

# Start DFS at node zero
start_node = 0
dfs(start_node)
```

**Finding [[notes/math/discrete-math/graph-theory/Components|components]]:**
```python
# Global or class scope variables
n = number of nodes in the graph
g = adjacency list representing the graph
count = 0
components = empty integer array #size n
visited = [false, ..., false] #size n

def find_components():
	for(i = 0; i < n; i++):
		if !visited[i]:
			count++
			dfs(i)
	return (count, components)

def dfs(at):
	visited[at] = true
	components[at] = count
	for next in g[at]:
		if !visited[next]:
			dfs(next)
```

-----

**What else can DFS do?**
- compute a graph's minimum spanning tree
- detect and find cycles in a graph
- check if a graph is bipartite
- find strongly connected components
- topologically sort the nodes of a graph
- find bridges and cut vertices
- find augmenting paths in a flow network
- generate mazes

## Breadth First Search
[*link to video*](https://www.youtube.com/watch?v=oDqjPvD54Ss)

Time complexity: $O(E+V)$

Particularly useful for one thing: finding the shortest path on unweighted graphs.

A BFS starts at some arbitrary node of a graph and explores the neighbour nodes first, before moving to the next level neighbours. It uses a queue data structure to track which node to visit next. Upon reaching a new node the algorithm adds it to
the queue to visit it later.

```python
# Global/class scope variables
n = number of nodes in the graph
g = adjacency list representing unweighted graph

# s = start node, e = end node, and 0 <= e, s < n
function bfs(s, e):
	# Do a BFS starting at node s
	prev = solve(e)

	# Return constructed path from s -> e
	return reconstructPath(s, e, prev)

function solve(s):
	q = queue data structure with enqueue and dequeue
	q.enqueue(s)

	visited = [false, ..., false] # size n
	visited[s] = true

	prev = [null, ..., null] # size n

	while !q.isEmpty(): 
		node = q.dequeue()
		neighbours = g.get(node)

		for(next : neighbours):
			if !visited[next]:
				q.enqueue(next)
				visited[next] = true
				prev[next] = node
	return prev

function reconstructPath(s, e, prev):
	# Reconstruct path going backwards from e
	path = []
	for (at = e; at != null; at = prev[at]):
		path.add(at)

	path.reverse()

	# If s and e are connected return path
	if path[0] == s:
		return path
	return []
```


## BFS grid shortest path
[*link to video*](https://www.youtube.com/watch?v=KiCBXu4P-2Y)

**Problem:**
You are trapped in a 2D dungeon and need to find the quickest way out! The dungeon is composed of unit cubes which may or may not be filled with rock. It takes one minute to move one unit north, south, east, west. You cannot move diagonally and the maze is surrounded by solid rock on all sides.

Is an escape possible? If yes, how long will it take?

-----------
The dungeon has a size of $RxC$  and you start at cell $S$ and there's an exist at cell $E$. A cell full of rock is indicated by a $\#$ and empty cells are represented by a $.$

![Example of the dungeon](notes/assets/dungeon-grid-shortest-path.png#invert_B_W)

```python
# Global/class scope variables
R, C = ... # R = number of rows, C = number of columns
m = ... # Input character matrix of size RxC
sr, sc = ... # 'S' symbo row and column values
rq, cq = ... # Empty Row Queue (RQ) and Column Queue (CQ)

# Variables used to track the number of steps taken.
move_count = 0
nodes_left_in_layer = 1
nodes_in_next_layer = 0

# Variables used to track whether the 'E' character
# ever gets reached during the BFS.
reached_end = false

# RxC matrix of false values used to track whether
# the node at position (i, j) has been visited.
visited = ...

# North, south, east, west direction vectors.
dr = [-1, +1, 0, 0]
dc = [0, 0, +1, -1]

function solve():
	rq.enqueue(sr)
	cq.enqueue(sc)
	visited[sr][sc] = true
	while rq.size() > 0: # or cq.size() > 0
		r = rq.dequeue()
		c = cq.dequeue()
		
		if m[r][c] == 'E':
			reached_end = true
			break
			
		explore_neighbours(r, c)
		nodes_left_in_layer--
		
		if nodes_left_in_layer == 0:
			nodes_left_in_layer = nodes_in_next_layer
			nodes_in_next_layer = 0
			move_count++
			
	if reached_end:
		return move_count
	return -1

function explore_neighbours(r, c):
	for(i = 0; i < 4; i++):
		rr = r + dr[i]
		cc = c + dc[i]

		# Skip out of bounds locations
		if rr < 0 or cc < 0: continue
		if rr >= R or cc >= C: continue

		# Skip visited locations or blocked cells
		if visited[rr][cc]: continue
		if m[rr][cc] == '#': continue

		rq.enqueue(rr)
		cq.enqueue(cc)
		visited[rr][cc] = true
		nodes_in_next_layer++
	
```

## Topological Sort Algorithm
[*link to video*](https://www.youtube.com/watch?v=KiCBXu4P-2Y)

Topological ordering is not unique. 

```python
# assumption: graph is stored as adjacency list
function topsort(graph):
	N = graph.numberOfNodes()
	V = [false, ..., false] # Length N
	ordering = [0, ..., 0] # Length N
	i = N - 1 # Index for ordering array

	for (at = 0; at < N; at++):
		if V[at] == false: 
			i = dfs(i, at, V, ordering, graph)

	return ordering

function dfs(i, at, V, ordering, graph):
	V[at] = true
	
	edges = graph.getEdgesOutFromNode(at)
	for edge in edges:
		if V[edge.to] == false:
			dfs(i, edge.to, V, ordering, graph)

	ordering[i] = at
	return i - 1
```

## Shortest/Longest path on a Directed Acyclic Graph
[*link to video*](https://www.youtube.com/watch?v=TXkDpqjDMHA)

The Single Source Shortest Path (SSSP) problem can be solved efficiently on a DAG in $O(V+E)$ time. This is due to the fact that the nodes can be ordered in a topological ordering via topsort and processed sequentially.



