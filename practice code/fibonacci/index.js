//function that returns the fibonacci number at a given index.

function fib(index){
    var array=[];
    array[0]=0;
    array[1]=1;
    for(var i=2;i<index;i++){
        array[i]=array[i-1]+array[i-2]
    }
    return array[index-1]+array[index-2]

}




console.log(fib(6))