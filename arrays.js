
const person = {
    name: 'Rohan',
    age: 24,
    greet() {
        console.log('Hi, I am '+ this.name);
    } //we can also declare functions like oldschool here
};

const hobbies = ['Sports',  'Cooking'];

//for (let hobby of hobbies)
//{
 //   console.log(hobby);
//}
console.log(hobbies.map(hobby =>  'Hobby:  ' + hobby ));
console.log(hobbies.toString);
//console.log(hobbies);