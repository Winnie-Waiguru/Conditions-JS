//Printing numbers from 1-1000 that are divisible by 3,5 and both 3,5

for (let num=1; num < 1000; num++) {
    if (num%3==0 && num%5==0){
        console.log("FizzBuzz")
    }
    else if(num%3==0){
        console.log("Fizz")
    }
    else if(num%5==0){
        console.log("Buzz")
    }
    else{
        console.log(num)
    }
}

var sum=0
for(let n=0; n<1000; n++){
    if(n%3==0 || n%5==0){
    sum+=n
    }
}

console.log(sum)

for (let number=0; number<20; number++){
    if(number%2==0){
        console.log(`${number} is even`)
    }
    else{
        console.log(`${number} is odd`)
    }
}

let num = [-2,4,-5,6,0];
largest=p[0];
for (let q=0; q<num.length; q++){
    if(p[q] > largest){
        largest = p[q];
    }
}
console.log(largest)

var num1=10
var num2=20
if (num1 > num2){
    console.log(num1 + " is greater than "+ num2)
}
else if(num1< num2){
    console.log(num2 + " is greater than "+ num1)
}
else{
    console.log(num1 + " is equal to " + num2)
}

for (let year=2000; year<=2022; year++){
    if((year%400==0) || (year%4==0) && (year%100!=0)){
        console.log(year)
    }
}
