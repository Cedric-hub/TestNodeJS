// Utilisation de fs FileSystem, bibliothèque du noyau NodeJS
var fs = require('fs');

// Méthode qui va lire le fichier salutations.txt
// et qui va l'afficher en console

var content = fs.readFileSync('./salutations.txt');
console.log(content.toString());
console.log('FIN DU FICHIER');


// Ecrire un programme NodeJS qui permet de creer un repertoire
// monDossier et trois fichiers file1.txt, file2.txt et
// file3.txt qui seront situes dans monDossier
// Utiliser a la fois des fonctions synchrones et des fonctions asynchrones

// Fonctionne :
// var fs = require('fs');
// var dossier = fs.mkdirSync('monDossier');
// var file1 = fs.writeFileSync('monDossier/file1.txt', 'Hello 1');
// var file2 = fs.writeFileSync('monDossier/file2.txt', 'Hello 2');
// var file3 = fs.writeFileSync('monDossier/file3.txt', 'Hello 3');

// Correction :
// npm i fs-path

var fsPath = require('fs-path');
// var file = ["file1.txt", "file2.txt", "file3.txt"];
// if (fs.existsSync('monDossier')) {
//     console.error('dossier existe deja');
// }
// else {
//     for (let i = 0; i < file.length; i++) {
//         fsPath.writeFileSync('monDossier /' + file[i], 'contenu fichier');
//     }
// }

// OU
var file = ["file1.txt", "file2.txt", "file3.txt"];
if (fs.existsSync('monDossier')) {
    console.error('dossier existe deja');
}
else {
    fs.mkdirSync('monDossier');
    for (let i = 0; i < file.length; i++) {
        fs.writeFileSync('monDossier/' + file[i], 'contenu fichier');
    }
}