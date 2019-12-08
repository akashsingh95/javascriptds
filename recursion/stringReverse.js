function StringReverse(input){
    var stringArray=input.split("");
    helper(0,stringArray);
}


function helper(index,array){
    if(index>=array.length){return;}
    
    helper(index+1,array);
    console.log(array[index])

}



StringReverse("myStringAwesome")