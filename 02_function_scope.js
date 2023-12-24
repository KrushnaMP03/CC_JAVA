function addTwoValue(num1 , num2){
    return num1+num2
}
console.log(addTwoValue(5,5));


const number1 = (num1 , num2) => {
    return num1+num2
}
console.log(number1(4,6));


const number2 = () => console.log("hello");

console.log(number2());


console.log("hello from Local pc");
((num1,num2)=>(console.log(num1+num2)))(6,4);

const num =[1 , 2 , 3 , 4 , 5 , 8]
// const val = num.filter((items) => items>2)

//const val = num.map((items) => items + 10)

const val = num.filter((items)=> items % 2 === 0).map((items) => items = items * 10)
console.log(val);
