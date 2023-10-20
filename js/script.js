                        //funzioni




//nomedella funzione(argomento) {}
//l'argomento sono gli elementi placeholder della funzione che rappresenteranno due o più ipotetici valori coinvolti dentro la funzione 
//es:

function sommanumeri(num1,num2) {
    alert(num1 + num2);
};

//in questo caso ho creato una funzione che sommi due ipotetici let (num1 e num2) e mi crei un alert con la somma!

//è importante che una funzione ritorni un valore in quanto tutto ciò che è contenuto dentro alla funzione si esaurisce al termine della funzione

//lo possiamo ottenere associando ad una variabile il valore della funzione

//in questo caso sto richiamando la funzione che ha come effetto quello di creare un alert con la somma dei valori di due  ipotetici soggetti num 1 e num 2, ma al posto dei due inserirò le variabili per eseguire l'operazione

//es:

let numero = 2;
let numero2  = 3;

let sommafuori = sommanumeri(numero,numero2);
console.log(sommafuori);

//è identico a quando chiamavamo il getrndinteger negli esercizi precedenti 

//oppure

let num1 = 2;
let num2 = 3;

function sommanumeri(num1,num2){
    alert(num1 + num2);
    return num1 +num2;
};

//dichiarare il ritorno di un valore con il comando return

//NOTA!!!! se la funzione non ha un valore di ritorno dara come valore undefined 

//quando si usa return la funzione termina !! a prescindere dal tutti gli elementi dentro 



//esistono funzioni senza nome e argomento
//banalmente il nostro:

let btn;

btn = addEventListener('click', function() {
    
    if (activeindex === images.length - 1) {
        activeindex = 0;
    } else {
        activeindex += 1;
    }
});

//sto usando la funzione addevent listener che negli argomenti ha un evento ed una funzione che noi definiamo contestualmente 

//in questo caso la funzione non è stata definita come espressione

//potremmo pure definircela fuori
//es:

const miafunzione = function () {
    alert('ciao')
};

//oppure:

function miafunzione() {

}

//e quindi: 

btn = addEventListener('click', miafunzione());





        //una funzione si può documentare in questo modo:




/**
 * determina se il numero è pari
 * @param {Number} num 
 * @returns {Boolean}
*/

function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//oppure scritto in sistema ternario

function isEven(num) {
    return (num % 2 === 0) ? true : false;
}


//quando in una consegna incontrate un verbo spesso si traduce in usare una funzione per quello scopo


//sfrutto la funzione di prima per aiutarmi in questa funzione 
const btn = document.querySelector('button');

btn.addEventListener('click', printAlwaysEven);

function printAlwaysEven(){
    resetForm();
    const inputEl = document.getElementById('data');
    let alertcolor;
    let msg;
    let numeroinserito = parseInt(inputEl.vale);
    if(!isNaN(numeroinserito)) {
        msg = (isEven(numeroinserito)) ? numeroinserito : numeroinserito + 1;
        alertcolor = 'alert- success'
    } else {
        alertcolor = 'alert';
        msg = 'non hai inserito un numero'
    }
    printResult(alertcolor, msg);
};


//creo una funzione che in gergo viene chaiamata reset
//questa mi servirà a resettare il div dentro al quale inserirò l'outcome dell'if togliendole la classe di prima e ridandole quella del display none
function resetForm(){
    const resultEl = document.querySelector('.alert');
    resultEl.classList.remove('alert-danger');
    resultEl.classList.add('d-none');

};


//creo una funzione per stampare dentro alla funzione prima 
function printResult(alert, message) {
    const resultEl = document.querySelector('.alert');
    resultEl.classList.add(alert);
    resultEl.classList.remove('d-none');
    resultEl.innerText = message; 
};

//per evitare però che i nomi delle funzioni creino chaos nello scope globale della console piazzo tutto dentro ad una macrofunzione 

//es:

//ora pero devo chiamarla altrimenti non partirà mai
AlwaysEven();

function AlwaysEven() {

    const btn = document.querySelector('button');

    btn.addEventListener('click', printAlwaysEven);

    function printAlwaysEven(){
    resetForm();
    const inputEl = document.getElementById('data');
    let alertcolor;
    let msg;
    let numeroinserito = parseInt(inputEl.vale);
    if(!isNaN(numeroinserito)) {
        msg = (isEven(numeroinserito)) ? numeroinserito : numeroinserito + 1;
        alertcolor = 'alert- success'
    } else {
        alertcolor = 'alert';
        msg = 'non hai inserito un numero'
    }
    printResult(alertcolor, msg);
    };

    function resetForm(){
        const resultEl = document.querySelector('.alert');
        resultEl.classList.remove('alert-danger');
        resultEl.classList.add('d-none');
    
    };

    function printResult(alert, message) {
        const resultEl = document.querySelector('.alert');
        resultEl.classList.add(alert);
        resultEl.classList.remove('d-none');
        resultEl.innerText = message; 
    };

};

//per verificare che una parola sia palindromo

//posso ciclare la lenght della stringa

let stringa = 'casa';

console.log(stringa.lenght);

let nuovastringa = '';

for(let i = 0; i< stringa.length; i++) {
    console.log(stringa[i]);
    let nuovastringa += stringa[i];
};

console.log(nuovastringa);

//ora potrei usare il comando reverse che serve per ribaltare la stringa al contrario 
//e cercare (js string) un comando per comprimere tutti gli elementi di nuovo in una stringa 
//poi verificare che la nuova stirnga sia identica a quella prima, se è un palindromo dovrebbe darti un messaggio di conferma 





                //Arrow function 





//sono un nuovo tipo di function
//es:

() => 

//come le funzioni normali possono avere un nome o essere anonime
//se volessi chiamarle toccherebbe associarle ad una let/const
//es: 

const myfunction = () => 1 + 1;

//qualità:

//si distinguono per accorciare la sintassi
//non hanno un this cioè l'elemento che ha ricevuto quell'evento es: il bottone dell'addEventListener
//non hanno un return, cioè è implicito perchè non usa le {}
//nota!!: se metto le {} il return non è più implicito!!!

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log(this);
})

//in questo caso la console designerà come this il bottone in quanto scatenante dell'evento


const btn = document.querySelector('button');

btn.addEventListener('click', () => console.log(this));

//in questo caso la console mi designerà come this un elemento dello scope globale 


//potrei scriverla anche così:

btn.addEventListener('click',() => {
    //contenuto della funzione
});



                //Timing functions



//sono le funzioni che tengono conto del passare del tempo
//sono il primo approccio alla programmazione asincrona
//Nota!! il tempo da specificare va in millesimi quindi es 3 sec sono 3000, 10 sec sono 10 000, ma potrei cmq fare tot sec*1000 cioè inserire il calcolo all'interno della funzione 

//es: 

//settimeout procca la funzione dopo tot tempo 

setTimeout( /*funzione da eseguire*/, /*tempo da aspettare*/);

setTimeout(myfunction, 3000);

function myfunction () {
    alert ('hello');
};

//setinterval procca la funzione ogni tot tempo

setInterval( /*funzione da eseguire*/, /*tempo ogni quanto deve ripetere la funzione*/);

setInterval(myfunction, 3000);

function myfunction () {
    alert ('hello');
};

//come la fermo? 
//la associo ad una const/let

const clock = setInterval(myfunction, 3000);

//e poi con il comando:

clearInterval(clock);


//es:

function buttaLaPasta() {
    console.log('acqua bolle');
}

//eseguo dopo 10min
setTimeout(buttaLaPasta, (10 * 60)*1000);


//voglio creare un timeout di capodanno

//creo una variabile da valore 10
let seconds = 10;
//creo una variabile che ogni 1 sec scali di tot valori
const CountDown = setInterval(counter, 1000);

//programmo la funzione 
function counter() {
    //se let è sopra zero scala un valore 
    if (seconds > 0) {
        console.log(seconds);
        seconds -= 1;
        //quando arrivi a 0 non scendere più e stampa il messaggio!
    } else {
        clearInterval(CountDown);
        console.log('Buon Anno!!!!');
    }
};

//voglio creare un orologio

//presupponendo che ho un div in cui riportare dei valori
const app = document.getElementById('app');

const date = new Date();
let hours = date.getHours();
let mins = date.getMinutes();
let secs = date.getSeconds();
let time = hours + ':' + min + ':' + secs;
app.innerHTML = time;
//ok ora l'ho stampato ma non si aggiorna, l'ho solo stampato una volta sola!!!
//quindi:

//creo un timer che ogni sec mi ripete la funzione che mi stampa il tempo corrente sull'html
const clock = setInterval(timer, 1*1000);

function timer () {
    const date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let time = hours + ':' + min + ':' + secs;
}

const btn = document.querySelector('button');

btn.addEventListener('click', function() {clearInterval(clock)});


