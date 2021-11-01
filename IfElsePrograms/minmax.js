
var val1=Math.floor(100+Math.random()*900);
var val2=Math.floor(100+Math.random()*900);
var val3=Math.floor(100+Math.random()*900);
var val4=Math.floor(100+Math.random()*900);
var val5=Math.floor(100+Math.random()*900);
console.log(val1,val2,val3,val4,val5);
console.log();
    if(val1>99&&val1<1000){
        console.log("Maximum value:");
        console.log(Math.max(val1,val2,val3,val4,val5));
        console.log("Minimum value:");
        console.log(Math.min(val1,val2,val3,val4,val5));
    }
    else{
        console.log("Values are not in 3 digit");
    }

