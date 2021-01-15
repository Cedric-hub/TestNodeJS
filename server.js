// Dans le terminal :
// npm init
// npm i lodash
// on télécharge une librairie (lodash) pour avoir accès à des méthodes
// Doc de lodash :
// https://lodash.com/docs/4.17.15

var math = require('lodash');
var mod = require('./mesModules');
var os = require('os');
// Dans le terminal : npm i url :
var url = require('url');
// npm install query-string :
var querystring = require('query-string');
var http = require('http');
const { concat, values, sum, parseInt } = require('lodash');



// serveur 1
// var server = http.createServer(function (req, res) {
//     res.writeHead(200);
//     res.end('Hello World');
// });

// serveur 2
// http://localhost:8080
// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write('<!DOCTYPE html>' +
//         '<html>' +
//         '   <head>' +
//         '       <meta charset="UTF-8" />' +
//         '       <title>Ma page Node JS</title>' +
//         '   </head>' +
//         '   <body>' +
//         '       <p>Hello world</p>' +
//         '   </body>' +
//         '</html>'
//     );
// });


// serveur 3
// http://localhost:8080/mapage
// http://localhost:8080
// var server = http.createServer(function (req, res) {
//     var page = url.parse(req.url).pathname;
//     console.log(page);
//     res.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     res.write('Hello world, this is your requested page : ' + page);
//     res.end();
// });


// serveur 4
// http://localhost:8080?prenom=john&nom=wick
// var server = http.createServer(function (req, res) {
//     var params = querystring.parse(url.parse(req.url).
//         query);
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     if ('prenom' in params && 'nom' in params) {
//         res.write('Vous etes ' + params['prenom'] + ' ' +
//             params['nom']);
//     }
//     else {
//         res.write('Vous devez bien avoir un prenom et un nom, non ?');
//     }
//     res.end();
// });


// Ecrire un programme qui affiche le resultat d'une operation arithmetique des nombres passes en parametre



// http://localhost:8080?a=1&b=2

// ADDITION OK
// var server = http.createServer(function (req, res) {
//     var params = querystring.parse(url.parse(req.url).
//         query);
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     if ('a' in params && 'b' in params) {
//         function calcul(tab, operator) {
//             var result = '';
//             for (var i in tab) {
//                 result = result + operator + tab[i];
//             }
//             return eval(result.substr(1));
//         }
//         var tab = [params['a'], params['b']]
//         var operator = '+'
//         res.write('Result is ' + calcul(tab, operator));
//     }
//     else {
//         res.write('Error');
//     }
//     res.end();
// });

// CORRECTION :

// http://localhost:8080/addition?a=1&b=2

function calcul(tab, operator) {
    var result = '';
    for (var i in tab) {
        result = result + operator + tab[i];
    }
    return eval(result.substr(1));
}
var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, { 'Content-type': 'text/plain' });
    var result;
    if (pathname === '/addition') {
        result = calcul(params, '+');
    } else if (pathname === '/soustraction') {
        result = calcul(params, '-');
    } else if (pathname === '/multiplication') {
        result = calcul(params, '*');
    } else if (pathname === '/division') {
        result = calcul(params, '/');
    }
    res.write('Resultat : ' + result);
    res.end();
});
var add = (a, b) => a + b;
var sous = (a, b) => a - b;
var div = (a, b) => a / b;
var mul = (a, b) => a * b;
var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, { 'Content-type': 'text/plain' });
    var result;
    if ('a' in params && 'b' in params) {
        if (pathname === '/addition') {
            var a = parseInt(params['a']);
            var b = parseInt(params['b']);
            result = add(a, b);
        } else if (pathname === '/soustraction') {
            result = sous(params['a'], params['b']);
        } else if (pathname === '/multiplication') {
            result = mul(params['a'], params['b']);
        } else if (pathname === '/division') {
            result = div(params['a'], params['b']);
        }
    }
    res.write('Resultat : ' + result);
    res.end();
});



// on déclare un server :
server.listen(8080);
// exécuter node server.js dans le terminal
// dans un browser, aller sur localhost:8080 => affiche 'Hello World' pour serveur 1
// dans un browser, aller sur localhost:8080 => affiche page html pour serveur 2
// Le protocole http est fait de requetes et de réponses




// map crée un tableau de valeur
console.log(math.map([1, 5, 3], function (a) {
    return a * 2;
}));

// mod();
// mod.direBonjour();
mod.sayHello();

// Exercice
// Utiliser le module os pour afficher :
// L'architecture de votre machine
// Le nombre de CPU
// Le hostname
// Et la charge moyenne
// Dans le terminal npm i os
// En haut du fichier : var os = require ('os');
// console.log("Architecture:", os.arch());
// console.log("Nombre CPU", os.cpus().length);
// console.log("Hostname", os.hostname());
// console.log("La charge moyenne", os.loadavg());
// Fin Exercice



