// change it to grocery shopping and add vegetables

var groceryBag = [{
    name: 'Lettes',
    price: 1.99,
    type: 'Vegtable'
}, {
    name: 'milk',
    price: 3.99,
    type: 'dairy'
}, {
    name: 'cucumber',
    price: 2.99,
    type: 'vegtable'
}, {
    name: 'tomato',
    price: 2.99,
    type: 'vegtable'
}];

//we want to get the total cost for our grocery shopping
//we are composing map and reduce instead of using two different for loops to excute the same thing

var sumNum = groceryBag.map(function(item) {
    return item.price;
}).reduce(function(s, i) {
    return s += i;
}, 0);

//composing map, filter and reduce to get the total cost of vegetables in our shopping bag
//in OOP we had to use three different loops to do the same thing


//but isn't shorter and a lot easier to trak the logic
// We are using arrow functions to simplify it more

var vegtableTotalPrice = function(item) {
    return item
        .filter((x) => x.type === 'vegtable')
        .map((x) => x.price)
        .reduce((sum, i) => sum + i, 0);
}

//the same function but using requalr function expression than arrow functions

var vegtableTotalPrice = function(item) {
    return item.filter(function(x) {
        return x.type === 'vegtable';
    }).map(function(item) {
        return item.price;
    }).reduce(function(sum, element) {
        return sum + element;
    }, 0);
}

console.log(vegtableTotalPrice(groceryBag)); //5.98


//mathematical equation using composition to solve

function delta(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}


function power(funcOne, funcTwo) {
    return function(a, b) {
        return funcOne(a, b) / funcTwo(a, b);

    }
}


var result = power(delta, multiply);
console.log(result(46, 5));



function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function compose(func1, func2) {
    return function(value) {
        return func1(func2(value));
    }
}

//composing two functions

var compose = compose(double, triple);
console.log(compose(4)); //24


//composing cbunch of functions using slice and reduce



function compose(a, b) {
    return function() {
        const args = Array.prototype.slice.call(arguments);
        return a(b.apply(null, args));
    }
}

// const altCompose =
//     (a, b) => (...args) => a(b.apply(null, args));

// const add = a => b => a + b;

var add = function(a) {
    return function(b) {
        return a + b;
    }
}

const increment = add(1);

increment(5); // 6

const add4 = [increment, increment, increment, increment].reduce(compose, x => x);

// add4(16); // 20