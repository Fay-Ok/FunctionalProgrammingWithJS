//Shared state
var num = {
    x: 2
};

function adder() {
    num.x += 2;

};

function multiplier() {
    num.x *= 3;
};

multiplier();
adder();
console.log(num.x); //8

//Avoid shared state

var number = {
    y: 1
};

function add2(number) {
    return Object.assign({}, number, { y: number.y + 2 });
}

function multiply2(number) {
    return Object.assign({}, number, { y: number.y * 3 });
}
console.log(multiply2(add2(number)).y);

// The original value stays the intact 
console.log(number.y); // number.y = 1