//I I F E
//Help to avoid global scope polution between two
//Javascript files linked to one html files



//Bellow variable will not be consoled because
//name varialbe was used in otherscript.js file.



// const name = 'Davis';

// console.log(name);




//To prevent that, make user not a global scope
(function () {
    const user = 'Davis';

    console.log(user);
})();


//in other words
(function (name) { 
    console.log('Hello ' + name);
})('Shawn');