// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, 
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

let content = document.getElementById("content")
console.log(content);

// Scrivi un programma che stampi in console i numeri da 1 a 100
for(let i = 0; i <= 100; i++){
//  creare l'elemento quadrato
    let square = document.createElement("span");
// creare classe per quadrato
    square.classList.add("fill");


// inseriamo i all'interno del quadrato
    square.append(i);
// aggiungiamo il quadrato dentro il contenitore
    content.append(square);


    }
    
    


// multipli di 3 stampi “Fizz” al posto del numero




// per i multipli di 5 stampi “Buzz”




// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

