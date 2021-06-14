/* Un alert() espone 5 numeri generati casualmente.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */
document.addEventListener("DOMContentLoaded", function() {
//Un alert() espone 5 numeri generati casualmente.
var max=100;
var min=1;

function GenRandomNumbers(min,max){
    var result = Math.floor(Math.random()*(max-min+1))+min;
    return result;
}

var arrayrandomNumbers =[];

for(var i=0; i<5 ; i++ ){
    var randomNumbers = GenRandomNumbers(min,max);
    arrayrandomNumbers.push(randomNumbers);
}

alert("ricorda bene questi cinque numeri: " + arrayrandomNumbers);

//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

setTimeout(function(){

    var arrayUserRemindNumber=[];
    
    for(var i=0; i<5 ; i++ ){
        var userRemindNumber = parseInt(prompt("inserisci i numeri che ha visto precedentemente"));
        arrayUserRemindNumber.push(userRemindNumber);
    }

    console.log (arrayUserRemindNumber);
    
},3000);


//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
var numbersreminded=[];

for(var i=0; i<5 ; i++ ){
    if(arrayrandomNumbers[i]===arrayUserRemindNumber[i]){
        numbersreminded.push(arrayUserRemindNumber[i])
    }
}

alert("il tuo punteggio e': " + numbersreminded.length);




})