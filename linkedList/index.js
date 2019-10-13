
// class for creating node

class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next

    }
}

//  class for creating linked list

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
  
    //add the first node

    insertFirst(data){
        this.head=new Node(data,this.head)
        this.size ++;
    }
    
    //add node to the end

    insertLast(data){
       var last=new Node(data);
       var current;
       if(!this.head){
           this.head=last;
           this.size ++;
       }
       else{
           current =this.head;
           while(current.next){
               current=current.next
           }
           current.next=last;
           this.size ++;
       }
    }
 
// print the elements of linked list
    printElement(){
        var current=this.head;
        while(current){
            console.log(current.data)
            current=current.next;
        }
    }

}


const list=new LinkedList();
list.insertFirst(120);
list.insertLast(130);
list.printElement();