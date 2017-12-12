var arrOfNum = [2, 4, 5, 1, 8];

function squareFunction(item) {
    return Math.pow(item, 2);
}

var squaredArray = arrOfNum.map(squareFunction)


console.log(squaredArray); //[4, 16, 25, 1, 64]


//-------------------------------
//Mori example
function even_sum(coll) {
    var evens = mori.filter(mori.is_even, coll);
    var sum = mori.reduce(mori.sum, 0, evens);
    return sum;
}

// assert(even_sum(v2) === 6);


//--------------------------------

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

//-------------------------------------

var values = [2, 6, 5, 5, 5];

function getSum(values) {
    var sum = 0;
    for (var index = 0; index < values.length; index++) {
        sum += values[index];
    }
    return sum;
}

console.log(getSum(values)); //23



var total = values.reduce(function(sum, item) {
    return sum += item;
}, 0)

console.log(total); //23



var animals = [{
        name: 'fluffy',
        type: 'Dog',
        age: '2'
    },
    {
        name: 'pumpkin',
        type: 'Cat',
        age: '4'
    },
    {
        name: 'muffin',
        type: 'Dog',
        age: '8'
    }
];

function getDog(animals) {
    var dog = [];
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].type === 'Dog') {
            dog.push(animals[i]);
        }

    }
}
//{ name: 'fluffy', type: 'Dog', age: '2' },
// { name: 'muffin', type: 'Dog', age: '8' }


function dog(animal) {
    return animal.type === 'Dog';
}
var dog = animals.filter(dog);

console.log(dog);