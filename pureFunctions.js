//non-functional
var name = 'Farzaneh';

function greet(location) {
    return "Hello " + name + ". Welcome to " + location;
}


name = 'Jon';
console.log(greet("Socal codecamp"));


//pure functiona
function greeter(name, location) {
    return "Hello " + name + ". Welcome to " + location;
}

console.log(greeter("Farzaneh", "Socal codecamp"));


//-------------------------------------------------------

//impure functional
var animal = "dogs";

function animalVoice() {
    console.log(nimal + " barks");
}

function PreyAndPredator() {
    return animal + " like to catch cats!";
}

// pure functional
function PreyAndPredator(predator, prey) {
    return predator + " like to catch " + prey;
}
console.log(PreyAndPredator("dogs", "cats")); //dog like to catch cats


//--------------------------------------------


var name = ' Farzaneh';
var greet = 'Hello ';

console.log(name + greet + '!');



function greete() {
    return 'Hello ' + name + '!';
}

greete(); //Hello Farzaneh!



function greeter(name) {
    return 'Hello ' + name + '!';
}

greeter('Farzaneh'); //Hello Farzaneh!


//---------------------------------------------

function addFlavour(flavour) {
    return flavour + " is added";
}

addFlavour("vanilla");

//--------------------------------------------