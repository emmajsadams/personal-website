// TODO: actually load this dynamically from an mdx file instead of declaring it as a string in TS
export default `---
name: A* for C#
slug: astar-csharp
date: '2019-02-25'
description: Implementing the A* pathfinding algorithm in C# for my game development project at DigiPen
---

In this post I will be covering my C# implementation of the A* Pathfinding algorithm. A* is an algorithm used to efficiently plot the shortest traversable path between two points. This is commonly used in 2D grid based games such as Pacman. It uses a best first search and finds the least cost path using a heuristic formula. I decided to use the Manhattan heuristic for its efficiency and ease of implementation. The implementation works for any size grid and allows for horizontal and vertical movement. I am going to explain the implementation by separating it into three parts, the heuristic, the node object, and the algorithm.

A heuristic, in this context, is simply an estimate of the distance from any given node to any other node. We will be using the Manhattan heuristic for this implementation which is given by the following formula.

Estimate = |CurrentNode.X – TargetNode.X| + |CurrentNode.Y – TargetNode.Y|

A node is an object that holds the following data.

- Position: This can be represented by two integer values, x and y, that represent this node’s position in the overall map.
- H: This is an integer given by the Manhattan heuristic defined above.
- G: Total distance traveled from the starting node.
- F: G + H, Total “cost” of travel
- Parent Node: Node that precedes this node
- Target Node: Node that the path must converge to

The C# implementation of a node object is as follows.

\`\`\`csharp
class Node : IComparable<Node>
{
    public int H
    {
        get
        {
            return Math.Abs(X - TargetNode.Position.X) +
                   Math.Abs(Y - TargetNode.Position.Y);
        }
    }
    public int G
    {
        get
        {
            if(ParentNode == null)
                return 0;
            return ParentNode.G + 1;
        }
    }
    public int F
    {
        get { return G + H; }
    }
    public int X
    {
        get { return ((int) Position.X); }
    }
    public int Y
    {
        get { return ((int)Position.Y); }
    }
    public Node ParentNode;
    public Node TargetNode;

    public Node (int x, int y)
    {
        Position = new Vector2(x, y);
    }

    public Node(int x, int y, Node parentNode)
    {
        ParentNode = parentNode;
        Position = new Vector2(x, y);
    }

    public int CompareTo(Node node)
    {
        if(F > node.F)
            return 1;

        if(F < node.F)
            return -1;

        return 0;
    }

    public bool Equals(Node node)
    {
        if (X == node.X && Y == node.Y)
            return true;
        return false;
    }

    public static bool operator ==(Node n1, Node n2)
    {
        return n1.Equals(n2);
    }

    public static bool operator !=(Node n1, Node n2)
    {
        return !n1.Equals(n2);
    }
}
\`\`\`

Now time to explain the actual algorithm. The algorithm begins with a starting node, a target node, a open list, a closed list, and a collision map. The starting node contains the initial position the algorithm should begin searching from. It is added to the open list to start the algorithm. The target node contains the position of the destination of the algorithm. The open list is a list of all of the nodes that represent a potential path to be taken and is sorted by F score of the node (lowest first). The closed list is a list of all nodes that have already been cast aside as potential paths. The map is just a simple representation of the overall world wherein a boolean value, true representing passable and false representing impassable, corresponds with each node location on the map.

The real work of the algorithm comes in the while loop. The loop continues on the grounds that there are any nodes left in the open list. In every iteration of the loop the open list is sorted and the node with the lowest F value is selected as the current node. Then the nodes surrounding the current node that are passable are added to the open list. This loop continues until the current node is the target node or if all paths to the target node have been exhausted without reaching the target node. If successful the path is then reconstructed and returned.

The C# implementation of A* is as follows.

\`\`\`csharp
class AStar
{
    private static bool InBounds(int x, int y, bool[,] map)
    {
        if (x >= 0 && y >= 0 && y < map.GetLength(0) && x < map.GetLength(1))
            return true;

        return false;
    }

    private static List<Node> GetSurroundingNodes(Node node, bool[,] map)
    {
        List<Node> surroundingNodes = new List<Node>();

        /* Adds all the nodes surrounding the parameter node to the
         * surrounding nodes list (quite the mouthful)
         */
        surroundingNodes.Add(new Node(node.X + 1, node.Y, node, node.TargetNode));
        surroundingNodes.Add(new Node(node.X - 1, node.Y, node, node.TargetNode));
        surroundingNodes.Add(new Node(node.X, node.Y + 1, node, node.TargetNode));
        surroundingNodes.Add(new Node(node.X, node.Y - 1, node, node.TargetNode));

        List<Node> tempNodes = new List<Node>(surroundingNodes);
        foreach (var surroundingNode in tempNodes)
        {
           /* Removes a node from the surrounding node list if it is
            * out of bounds or if it is impassable on the collision map
            */
            if (map[surroundingNode.Y, surroundingNode.X]
                && InBounds(surroundingNode.X, surroundingNode.Y, map))
            {
                surroundingNodes.Remove(surroundingNode);
            }
        }

        return surroundingNodes;
    }

    public static List<Node> FindPath(
			int startX,
			int startY,
			int targetX,
			int targetY,
			bool[,] map
		)
    {
        Node targetNode = new Node(targetX, targetY, null, null);
        Node startNode = new Node(startX, startY, null, targetNode);
        List<Node> openList = new List<Node>();
        List<Node> closedList = new List<Node>();

        openList.Add(startNode);

        while (openList.Any())
        {
            /* Sorts the open list of nodes according to the CompareTo method in the
             * Node class. Creates a new node object from the first (lowest f value)
             * node in the open list.
             */
            openList.Sort();
            Node currentNode = openList[0];

            if (currentNode == targetNode)
                return ReconstructPath(openList[0]);

            openList.Remove(currentNode);
            closedList.Add(currentNode);

            /* Adds all of the accessible surronding nodes to the open list if they
             * are not currently in the closed list.
             */
            openList.AddRange(from neighborNode in GetSurroundingNodes(currentNode, map)
                              let contained = closedList.Any(node => node == neighborNode)
                              where !contained
                              select neighborNode);
        }

        /* This function will only return null if there are no available paths from the
         * start node to the end node.
         */
        return null;
    }

    private static List<Node> ReconstructPath(Node node)
    {
        List<Node> path = new List<Node>();

        while (node.G != 0)
        {
            path.Add(node);
            node = node.ParentNode;
        }

        path.Add(node);

        return path;
    }
}
\`\`\`
`
