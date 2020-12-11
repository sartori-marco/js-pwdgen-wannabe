// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19

// VARIABILI
var nome;
var cognome;
var colore;


// VALORI
nome = prompt('Inserisci il nome');
cognome = prompt('Inserisci il cogome');
colore = prompt('Inserisci il tuo colore preferito');

console.log(nome);
console.log(cognome);
console.log(colore);


// VEDO SU HTML
document.getElementById('codice').innerHTML= nome + cognome + colore + 19;

// TUTTO IN MINUSCOLO
nomeMinuscolo = nome.toLowerCase();
cognomeMinuscolo = cognome.toLowerCase();
coloreMinuscolo = colore.toLowerCase();

// VEDO SU HTML
document.getElementById('codice').innerHTML= nomeMinuscolo + cognomeMinuscolo + coloreMinuscolo + 19;
