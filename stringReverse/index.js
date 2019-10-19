var a="mystringreverse";

console.time("usingarrayfunctions");

var b=a.split("");
b.reverse();
console.log(b.join(""))

console.timeEnd("usingarrayfunctions");


console.time("usingarraypop");
var d=[];
for(var i=0;i<a.length;i++){
    d.push(a.charAt(i))
}
console.log(d.length)
var output="";
for(var i=0;i<d.length;i++){
    output=output+d.pop();
}

console.log(output)
console.timeEnd("usingarraypop");
