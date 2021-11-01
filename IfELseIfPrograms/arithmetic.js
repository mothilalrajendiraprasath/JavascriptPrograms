const readline =require("readline");
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let math1=0;
let math2=0;
let math3=0;
let math4=0;
r1.question('Enter the First number:',(a)=>
{
    r1.question('Enter the secod number:',(b)=>
    {
        r1.question('Enter the third number:',(c)=>{
        console.log(Number(a));
        console.log(Number(b));
        console.log(Number(c));

        math1=(a+b*c);
        console.log("Answer of a + b * c :"+math1);
        math2=(a % b +c );
        console.log("Answer of a % b +c :"+math2);
        math3=(c + a / b);
        console.log("Answer of c + a / b:"+math3);
        math4=(a ^ b + c);
        console.log("Answer of a * b + c:"+math4);

        if(math1<math2 && math1<math3 && math1<math4){
            console.log("Minimum :"+math1);
        }
        else if(math2<math1 && math2<math3 && math2<math4){
            console.log("Minimum :"+math2);
        }
        else if(math3<math1 && math3<math3 && math3<math4){
            console.log("Minimum :"+math3);
        }
        else{
            console.log("Minimum :"+math4)
        }

        if(math1>math2 && math1>math3 && math1>math4){
            console.log("Maximum :"+math1);
        }
        else if(math2>math1 && math2>math3 && math2>math4){
            console.log("Maximum :"+math2);
        }
        else if(math3>math1 && math2>math2 && math3>math4){
            console.log("Maximum :"+math4);
        }
        else{
            console.log("Maximum :"+math4);
        }

       
        r1.close();
        })
    })
})
