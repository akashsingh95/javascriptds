var finalArray=[]

function flatten(input){

   typeof input==='object' ? split(input) : finalArray.push(input)

}


function split(array){

    if (array===null){
        return []
    }

    array.map(v=>{  flatten(v) })

    return finalArray;
}

var test=[1,2,[1,[2,4,null,5,8,[8,9]]]]
console.log(split(test))
