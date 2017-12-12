//currying functions

var add = function(a) {
    return function(b) {
        return a + b;
    }
}

//value for add functions is available now but not for icrement
const increment = add(1);

console.log(increment(5)); // 6