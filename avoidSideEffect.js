var documentry = "Albert einstein";

//function is doing something else other that returning a value

function yourFavoriteDocumentary() {
    console.log("My favorite documentry is the biography of " + documentry);
    return "My favorite documentry is the biography of " + documentry;
}


yourFavoriteDocumentary();


// this functin does not side effect because it only executes what we said it to. return a statement 
function yourFavoriteDocumentary(params) {
    return "My favorite documentry is the biography of " + params;
}

console.log(yourFavoriteDocumentary("Elon Musk"));