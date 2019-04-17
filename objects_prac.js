// a key value pair is also called a "property" or a "field" of the object


const person = {
    name: 'Rohan',
    age: 24,
    greet() {
        console.log('Hi, I am '+ this.name);
    } //we can also declare functions like oldschool here
};

person.greet();
console.log(person);