class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}


class BinaryTree {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1
    }

    //function to return size of tree
    size() {
        return this.count;
    }


    //function to insert node;

    insertNode(value) {
        var node = new Node(value)

        const searchTree = (Node) => {
            //if value is greater than Node then insert to right
            if (value > Node.value) {
                if (!Node.right) {
                    Node.right = node;
                }
                else {
                    searchTree(Node.right)
                }
            }
            //else insert to left
            else {
                if (!Node.left) {
                    Node.left = node;
                }
                else {
                    searchTree(Node.left)
                }

            }
        }

        searchTree(this.root);

    }

    print(node) {
        if (node) {
            console.log(node.value)
            this.print(node.left);
            this.print(node.right);
        }
    }

    contains(val) {
        var current = this.root;
        while (current) {
            if (val === current.value) {
                return true;
            }
            if (val < current.value) {
                current = current.left;
            }
            else {
                current = current.right;
            }

        }
        return false;

    }

    bfs() {

        var result = [];
        var queue = [];
        queue.push(this.root)


        while (queue.length) {
            var current = queue.shift();
            result.push(current.value);

            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            };
        }
        return result
    }

}


var Bst = new BinaryTree(15);
Bst.insertNode(12);
Bst.insertNode(10);
Bst.insertNode(5)
Bst.insertNode(145);

console.log(Bst.bfs())