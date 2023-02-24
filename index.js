// Code your solutions in this file

// first example
//for (let age = 30; age < 40; age++) {
 //   console.log(`I'm ${age} years old. Happy birthday to me!`);

 // }

  // second example
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);

  }

  return gifts;
}

wrapGifts(gifts);
//spacer
console.log ("-------------------------------------");
function writeCards(names, event) {
    const messages = [];
     for (let i = 0; i < names.length; i++) {
       const message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
       messages.push(message);
     }
     return messages;
   }
   
   console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

//spacer #2
console.log ("-------------------------------------");

function countDown (){
    let number = 10;
    while (number >= 0){
        console.log(number--);
    }
}
countDown();

   