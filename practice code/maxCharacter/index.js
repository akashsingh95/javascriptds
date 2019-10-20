
//this code can also be used to find anagrams

function maxChar(a){
var obj={}
var array=a.split("");
array.forEach(v=>{obj[v]=obj[v] ? obj[v]+1:1})
console.log(obj)
}
process.stdin.setEncoding("utf-8");
process.stdin.on('data',(data)=>{maxChar(data)})

//maxChar("toddolist")