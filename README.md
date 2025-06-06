# knight-travails

# Knight Travails

A JavaScript implementation of the knight's travails, which is a graph problem in which you need to find the shortest path from point A to point B using the breadth-first search algorithm.

The project heavily relies on the BFS algorithm because it pushes all possible moves from an edge until it finds the end path.

The data structure matters when using Linked Lists because when you find the end position, you need to go back to the start position; otherwise, you wouldn't know how to connect the path.

This project was one of the hardest for me; it made me think first to apply the BFS and then to think about where things need to happen in the while and for loops, how to generate new moves, how to check if a move has been visited, how to create a move with the starting move as a pointer, and finally, when you find the end position, how to construct a path from the end position to the start, reverse it, and return it.
