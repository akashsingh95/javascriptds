// Say that you are a traveler on a 2D grid .You  begin in the top-left corner and your goal is to travel to the bottom-right corner . you may only move down or right. In how many ways you can travel to the goal on a grid with dimension m*n ?

const gridTraveler = (m, n, memo={})=>{
let key = m+','+n;
if(key in memo) return memo[key]
if(m==0 || n==0) return 0;
if(m==1 && n==1) return 1;
memo[key] = gridTraveler(m-1,n,memo)+gridTraveler(m,n-1,memo)
return memo[key];
}


console.log(gridTraveler(2,3))
console.log(gridTraveler(21,21))
