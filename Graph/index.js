var Queue = require('../queue/index.js')

class Graph {
    constructor(noofvertices) {
        this.noofvertices = noofvertices;
        this.adjList = new Map();
    }


    addVertex(v) {
        this.adjList.set(v, [])
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    print() {
        let key = this.adjList.keys();
        for (var v of key) {
            console.log(this.adjList.get(v))
        }
    }

    dfs(startingNode) {
        var visited = new Set();
        this.visit(visited, startingNode)
    }

    visit(visited, vertex) {
        visited.add(vertex)
        var adjNodes = this.adjList.get(vertex);
        for (let nodes of adjNodes) {
            if (!visited.has(nodes)) {
                this.visit(visited, nodes)
            }
        }

    }

    bfs(startingNode){
        var queue = new Queue(); 
        queue.enqueue(this.adjList.get(startingNode));
        queue.enqueue(2);
    }

}



var G = new Graph(3);
G.addVertex("a")
G.addVertex("b")
G.addVertex("c")
G.addVertex("d")
G.addVertex("e")
G.addEdge("a", "c");
G.addEdge("a", "b");
G.addEdge("c","d");
G.addEdge("b","e")
//G.print()
//G.dfs("a")
G.bfs("a")