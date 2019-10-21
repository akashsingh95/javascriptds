
// class for creating node

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next

    }
}

//  class for creating linked list

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //add the first node

    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++;
    }

    //add node to the end

    insertLast(data) {
        var last = new Node(data);
        var current;
        if (!this.head) {
            this.head = last;
            this.size++;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = last;
            this.size++;
        }
    }

    //function to insert at particular index
    insertAt(data, index) {

        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        var node = new Node(data)
        var previous;
        var current = this.head;
        var currentIndex = 0;
        while (currentIndex < index) {
            previous = current;   //node before currentIndex
            currentIndex++;
            current = current.next;     //node after currentIndex
        }

        node.next = current;
        previous.next = node;


    }
     
    getAt(index){
        if(index <0 || index>this.size){
            return;
        }
        if(index===0){
            return this.head.data;
        }
        
        let counter=0;
        let current=this.head;
        while(counter<index){
          counter++;        
          current=current.next;
        }
        return current.data;
    }


    getMid(){
        var i=0;
        var firstCurrent=this.head;
        var secondCurrent=this.head;
        while(firstCurrent && firstCurrent.next){
              firstCurrent=firstCurrent.next.next;
              if(firstCurrent){secondCurrent=secondCurrent.next;    }
                      
        }
        return secondCurrent.data;
    }

    //delete node at particular index
      deleteAt(index){
          var count=0;
          if(index==0){
              this.head=this.head.next;
              //this.
              this.size--;
              return;
          }
          var current=this.head;
          var previous;
          while(count<index){
              previous=current
              count++
              current=current.next
          }
          previous.next=current.next;
          this.size--;
          return;
      }



    // print the elements of linked list
    printElement() {
        var current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }



}


const list = new LinkedList();
list.insertFirst(120);
list.insertFirst(190);
list.insertFirst(130);
list.insertFirst(200);
list.insertFirst(300);
list.insertFirst(400);
list.insertFirst(500);
list.insertFirst(600);


//console.log(list.getAt(2))

//list.deleteAt(1);
//console.log(list.head.next);
console.log("######",list.getMid())

list.printElement();