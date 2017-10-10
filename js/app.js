//TARJETA DE CREDITO VALIDA
do {
  var creditCard = (prompt('Ingrese su numero de tarjeta'));
} while(!creditCard);//pedir prompt hasta que ingrese el numero

var cardNumber= Array.from (creditCard);
cardNumber.reverse();

 function isValidCard(cardNumber){

   var counter= parseInt(cardNumber[i]);
   for (var i=0; i < cardNumber.length; i++){
    cardNumber.push([i]);
   }

   return cardNumber;
 }

 isValidCard();
