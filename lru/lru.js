class Node{
    constructor(key,value,next=null,prev=null){
        this.key=key;
        this.value=value;
        this.next=next;
        this.prev=prev;
    }
}

class Lru{
   constructor(){
       this.tail=null;
       this.head=null;
       this.size=0;
       this.limit=5;
       this.cache={};
   }


  addd(key,value){
     
  }

}