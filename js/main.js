// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, 
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

let content = document.getElementById("content")
console.log(content);

// Scrivi un programma che stampi in console i numeri da 1 a 100
for(let i = 1; i <= 100; i++){

    //  creare l'elemento quadrato
    let square = document.createElement("span");
    
    // creare classe per quadrato
    square.classList.add("fill");

    // inseriamo i all'interno del quadrato
    square.append(i);

    // aggiungiamo il quadrato dentro il contenitore
    content.append(square);
    // definisco il messaggio da mettere nello square
    output = ""
    // la condizione
    if(i % 3 == 0 && i % 5 == 0){
          // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
          output = "FizzBuzz";
          square.style.backgroundColor = "#f0466f";
          // console.log("fizzbuzz");
    }
    else if(i % 5 == 0){
        // per i multipli di 5 stampi “Buzz”
        output = "Buzz";
        square.style.backgroundColor = "#ffd166";
        // console.log("buzz");
    }
    else if(i % 3 == 0){
       // multipli di 3 stampi “Fizz” al posto del numero
       output = "Fizz";
       square.style.backgroundColor = "#0cd6a1";
       // console.log("fizz");
    }
    else{
        // se nessuna delle condiioni e verificata stampa il numero
      output = i;
        // console.log(i);
    }
  
    square.innerHTML= output;
    
}
    




    




    
    




