do {
  var creditCard = parseInt(prompt('Ingrese su numero de tarjeta'));
} while(!creditCard);

console.log(creditCard);

 function isValidCard(creditCard){

   var cardNumber= 0;
   for (var i=0; i < creditCard.length; i++){
    cardNumber.push([i]);
   }

   return cardNumber;
 }

 isValidCard();
