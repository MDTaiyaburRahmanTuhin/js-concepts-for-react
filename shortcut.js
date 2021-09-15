let myNar;
if (myNar) {
    myNar = myNar * 100;
}
else {
    myNar = 0
}
console.log(myNar);

// ternary
const money = 80;
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
console.log(food1);

// number to string conversion
const num1 = 52;
console.log(num1);
//convert number to string
const numStr = num1 + ''
console.log(numStr);

// string to number
const input = '560';
//convert string to number
const inputNum = +input;
console.log(inputNum);

// 

/* let isActive = null;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser(); */
let person = null;

console.log(person ? person : "person is null");
//use and opertor
/* isActive && showUser();
//or
isActive || showUser();


// toggol bolean

isActive = !isActive; */