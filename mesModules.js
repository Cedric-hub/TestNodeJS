// Première façon de faire :
// avec mod(); dans server.js
// var direBonjour = function () {
//     console.log('Bonjour');
// };
// module.exports = direBonjour;

// Deuxième façon de faire :
// avec mod.direBonjour(); dans server.js
// exports.direBonjour = function () {
//     console.log('Bonjour');
// };

// Troisième façon :
// avec mod.sayHello();
var direBonjour = function () {
    console.log('Bonjour');
};

var direBonsoir = function () {
    console.log('Bonsoir');
};

module.exports = {sayHello : direBonjour};

