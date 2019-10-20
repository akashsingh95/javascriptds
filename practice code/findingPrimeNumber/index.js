//function that gives prime number from 0 to n
//Sieve of Eratosthenes
console.time("time")
function primeNumber(number){
    var array=new Array(number+1);
    var primes=[];
    array.fill(true);
    array[0]=false;
    array[1]=false;
    for(var i=2;i<=Math.sqrt(number);i++){
        for(var q=2;q<array.length;q++){
            if(q%i===0 && q>=Math.pow(i,2)){
                array[q]=false;
            }
        }
    }
    for(var i=0;i<array.length;i++){
        if(array[i]){primes.push(i)}
    }
    return primes;
}

console.timeEnd("time")
console.log(primeNumber(10))