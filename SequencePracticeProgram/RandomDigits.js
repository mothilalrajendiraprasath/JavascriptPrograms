let dice=Math.floor(Math.random*10); //To get single digit using random function

//Random() to get dice number between 0-6  
let dice1 =Math.floor(Math.random*6)+1;
let dice2=Math.floor(Math.random*6)+1;
//adding two random dice 
let add=dice1+dice2;
console.log(add);

//read 5 random two digits
var a=Math.floor(Math.random*90+10);
var b=Math.floor(Math.random*90+10);
var c=Math.floor(Math.random*90+10);
var d=Math.floor(Math.random*90+10);
var e=Math.floor(Math.random*90+10);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
var sum=a+b+c+d+e;
var avg=(sum/5);
console.log("Addition of 5 random numbers:"+sum);
console.log("AVerage of 5 random two digitss:"+avg);
