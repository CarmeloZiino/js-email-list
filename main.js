/*Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
Buon Lavoro*/


// Selezione l'elemento HTML dove far compaire la lista

const mailList = document.getElementById ("mail-List");

// Creo un Array dove salvare le mail

let emails = [];
let totalEmails = 10; //Questa variabile mi setta il numero di chiamate che andrò a fare

// Creo una funzione per generare le mail

function generateEmails() {
    for (let i = 0; i < totalEmails; i++) {
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => response.json()) 
            .then(data => {
                emails.push(data.response); // Salva l'email nell'array

                // Se abbiamo raccolto tutte le email, le stampiamo
                if (emails.length === totalEmails) {
                    printEmails(); // Funzione per stampare le manil !!! Ancor anon scritta
                }
            })
            .catch(error => console.error("Si è verificato un errore!", error));
    }};

    // !!! Creo una funzione per stampare le mail in pagina