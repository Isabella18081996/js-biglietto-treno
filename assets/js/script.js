var kilometri = parseInt(prompt('Quanti kilometri vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));

var prezzo_intero = kilometri * 0.21;

var minorenni = prezzo_intero * 0.80;
var over65 = prezzo_intero * 0.60;

var totale = prezzo_intero.toFixed(2);
var minorenni2 = minorenni.toFixed(2);
var over65_2 = over65.toFixed(2);

if(eta < 18){
  document.getElementById('risultato').innerHTML = "Il costo del biglietto è di " + minorenni2 + "€ con il 20% di sconto";
  document.getElementById('risultato').style.color = '#800000';

}else if(eta >=18 && eta <65){
  document.getElementById('risultato').innerHTML = "Il costo totale del biglietto sarà di " + totale + "€"

}else{
  document.getElementById('risultato').innerHTML = "Il costo del biglietto è di " + over65_2 + "€ con il 40% di sconto";
  document.getElementById('risultato').style.color = '#1e90ff';
}

/* console.log(kilometri)
console.log(eta)
console.log(prezzo_intero) */