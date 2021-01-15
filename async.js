var fs = require('fs');

var content = fs.readFile('./salutations.txt', function (err, result) {
    if (err)
        return console.error(err);
    return console.log(result.toString());
});
console.log('FIN DU FICHIER');


// Ecrire un programme NodeJS qui permet de creer un repertoire
// monDossier et trois fichiers file1.txt, file2.txt et
// file3.txt qui seront situes dans monDossier
// Utiliser a la fois des fonctions synchrones et des fonctions asynchrones


// Fonctionne :
// var dossier = fs.mkdir('monDossier', function (err, result) {
//     if (err)
//         return console.error(err);
//     return console.log('monDossier a été créé');
// });
// var file1 = fs.writeFile('monDossier/file1.txt', 'Hello 1', function (err, result){
//     if (err)
//         return console.error(err);
//     return console.log('File1 a été créé');
// });
// var file2 = fs.writeFile('monDossier/file2.txt', 'Hello 2', function (err, result){
//     if (err)
//         return console.error(err);
//     return console.log('File2 a été créé');
// });
// var file3 = fs.writeFile('monDossier/file3.txt', 'Hello 3', function (err, result){
//     if (err)
//         return console.error(err);
//     return console.log('File3 a été créé');
// });

// Correction
var fsPath = require('fs-path');
var file = ["file1.txt", "file2.txt", "file3.txt"];
fs.access('monDossier/', (err) => {
    if (err) {
        console.log("The folder does not exist, Creation de monDossier/");
        for (let i = 0; i < file.length; i++) {
            fsPath.writeFile('monDossier/' + file[i], 'content', function (err) {
                if (err)
                    return console.error(err);
            });
        } 
    } else {
        console.log("The folder exists.");
    }
});