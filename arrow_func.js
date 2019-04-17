const name = 'Rohan';
let age = 24;
const hasHobbies = true;


const summarizeUser = (userName, userAge, userHasHobby) => {
    return('Name  is ' +  userName  + ', age is ' +  userAge + ' and the user has hobbies: ' + userHasHobby);
};

//name of function assigned to a variable followed by the parameteres in the paranthesis


const add = (a,b) => a + b;

console.log(add(22, 22));

console.log(summarizeUser(name, age, hasHobbies));   