

const Greet = helloWord => name => `${helloWord}, ${name}!`;

const sayHello = Greet('Hello');
console.log(sayHello('Daniel'));

console.log(Greet('Привет')('Даниель')); 