const number = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const about = `My Name is ${student.name} age of ${student.age} movies ${number[2]} also liked movies ${student.movies[0]}`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2
    return sum;
}

// spread operator

const newNumber = [...number];
number.push(99);
console.log(newNumber);
console.log(number);

// create a new array from an older array and add an element

const currentNumber = [...number, 55];

console.log(number);
console.log(newNumber);
console.log(currentNumber);

