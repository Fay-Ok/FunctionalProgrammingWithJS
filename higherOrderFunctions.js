//higher order functions

function goalMaker(name) {
    return function(goal) {
        return name + " you need to get ready for " + goal;
    }
}
 
var myGoal = goalMaker('Farzaneh');
console.log(myGoal(' Function programming paradigms presentation')); 
// Farzaneh you need to get ready for Function programming paradigms presentation
 
//beauty of map(higher order function) will work on any data type-no matter what I pass it will excute the desired task
function addTwoFunction(input) {
    return input.map(function(item) {
        return item += 2;
    })
}
 
function addTwoToEachItemInList(params) {
    var listOfData = [2, 4, 4, 5];
    return params(listOfData);
}
 
console.log(addTwoToEachItemInList(addTwoFunction)); //[4,6,6,7]
 