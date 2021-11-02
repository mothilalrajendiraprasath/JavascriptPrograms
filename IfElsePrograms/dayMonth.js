//get day and month from the user and print //
const readline =require("readline");  
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("Enter the day:",function(day){
console.log(day);
r1.question("Enter the month:",function(month){
console.log(month);
r1.close();

if((day<=20&&month<=6)&&(day>=20&&month>=3)&&(day<=31)){
    console.log("True")
}
    else {
        console.log("True")
}
});
});
