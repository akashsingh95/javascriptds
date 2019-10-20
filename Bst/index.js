class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}


class BinaryTree {
    constructor() {
        this.root = null;
    }

    //function to insert node;

    insertNode(val) {
        var root = this.root
        if (!root) {
            this.root = new Node(val)
        }

        var node = new Node(val);
        var current = root
        while (current) {
            if (val < current.value) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                else {
                    current = current.left
                }
            }
            else {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                else {
                    current = current.right;
                }
            }

        }
    }

    print(node){
       if(node){
       console.log(node.value)
       this.print(node.left);
       this.print(node.right);
       }
    }

    search(val,node) {
       if(val>node.value){
        search
       }
        
    }

}


var Bst = new BinaryTree();
Bst.insertNode(12);
Bst.insertNode(10);
Bst.insertNode(5)
Bst.insertNode(145);
Bst.print(Bst.root);