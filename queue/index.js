class Queue{
    constructor(){
        this.size = 0;
        this.queueArray=[];
    }


    isEmpty(){
        if(this.size==0)return true;
        return false
    }

    enqueue(data){
        if (this.isEmpty()){
            this.queueArray.push(data);
            this.size++
        }
        else{
            let temp2 =[];
            temp2.push(data);
            for(let i=0;i<this.size;i++){
                temp2.push(this.queueArray[i])
            }
            this.queueArray = temp2;
            this.size++;
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            return this.queueArray.pop()
        }

    }

}

var queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.dequeue());
console.log(queue.dequeue());

module.exports = Queue