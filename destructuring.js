// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65]

// const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2]
    return nums;
}
const [first, second] = boxify(90, 34)

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const [firstMovies, secondMovies] = student.movies;

// object destructuring

const { name, age } = { name: 'alu', age: 14 };
const { name, age } = { name: 'alu', age: 14 };


const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        dring: 'water'
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const [html, css] = employee.language;