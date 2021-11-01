const readline =require("readline");
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("Enter the year:",function(year){
    console.log(year);
r1.close();
if(((year%4==0)&&(year%100!=0))||(year%400==0)){
console.log("Entered year is a leap year")
}
else{
console.log("Entered year is not a leap year")
}
});