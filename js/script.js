// - Creare un oggetto che descriva uno studente con le seguenti proprietà:
// ---> nome
// ---> cognome
// ---> età
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var studente = {
  'nome': 'Francesca',
  'cognome' : 'Campana',
  'eta': 17,
};

console.log(studente);
for (var key in studente) {
  var proprieta_studente = studente[key];
console.log(proprieta_studente);
}
var classe_14 = [
  {
    'nome': 'Francesca',
    'cognome' : 'Campana',
    'eta': 17,
  },
  {
    'nome': 'Rufus',
    'cognome' : 'Leuzzi',
    'eta': 15,
  },
  {
    'nome': 'Michele',
    'cognome' : 'Manco',
    'eta': 17,
  },
  {
    'nome': 'Silvia',
    'cognome' : 'Magri',
    'eta': 15,
  },

];


for (var i = 0; i < classe_14.length; i++) {
  var studente_classe_14 = classe_14[i];
}
var nuovo_nome = prompt('inserisci un nome');
var nuovo_cognome = prompt('inserisci un cognome');
var nuovo_eta = parseInt(prompt('inserisci l\'eta'));
studente.nome = nuovo_nome;
var nome = studente.nome;
studente.cognome = nuovo_cognome;
var cognome = studente.cognome;
studente.eta = nuovo_eta;
var eta = studente.eta;
classe_14.push({nome, cognome, eta});
console.log(classe_14);

var source = document.getElementById("students-template").innerHTML;
var template = Handlebars.compile(source);

var context = { name: nome, surname: cognome, age: eta };
var html = template(context);
$('.container').append(html);
