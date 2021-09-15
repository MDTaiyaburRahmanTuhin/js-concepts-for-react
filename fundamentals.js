// How to declare a variable using let and const
const fatherName = 'Arnold';
let gfName = 'Rainy';
gfName = 'salaha';

// 6 basic conditions >,<,===,!==,<=,>=
// multiple conditions: &&,||

if (fatherName === 'arnold' || gfName === 'Rainy') {

}
else if (fatherName === 'Arnold') {

}
else {

}

// 3. array
//index
//length, push, pop 
const number = [89, 35, 98, 12];
//number[0] = 56;

// 4. for loop

for (let i = 0; i < number.length; i++) {
    const arrays = number[i];
    console.log(arrays);
}

// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);
console.log(output);

// 6. object

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const myVariable = 'age'
console.log(student.movies);//direct by property
console.log(student['age']);//acces via property name string
console.log(student[myVariable]);//acces via property name string
