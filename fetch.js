/* const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const studentJOSN = JSON.stringify(student);
console.log(student);
console.log(studentJOSN);

const studentObj = JSON.parse(studentJOSN);
console.log(studentObj);

// 2. fetch

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))


// keys, values

const keys = Object.keys(student);
const values = Object.values(student);

// for

const number = [23, 54, 87, 23, 78];
number.forEach(num => console.log(num));
number.map(num => num * 2); */

// for of on array  like object
// for in loop on an object using


// add or remove form an array
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };
//copy products array and then add newProduct
const newproduct = [...products, newProduct];
console.log(newproduct);

// creat a new array without one specific item
// remove phone means create a new array without the phone

/* const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining); */