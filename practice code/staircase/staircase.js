function staircase(n){
    for(var i=0;i<n;i++){
        for(var q=0;q<=i;q++){
            process.stdout.write("#")
        }
        console.log('\n')
    }
}

function pyramid(n){
    for(var i=0;i<=n;i++){
        for(var k=i;k<n;k++){
            process.stdout.write(" ")
        }
        for(var j=0;j<(2*i-1);j++){
            process.stdout.write("#")
        }
        console.log('\n')
    }
    
}


pyramid(4)