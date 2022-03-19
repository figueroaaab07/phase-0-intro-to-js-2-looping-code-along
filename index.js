// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
//    debugger;
  } */

/*  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
      for (let i = 0; i < gifts.length; i++) {
          console.log(`Wrapped ${gifts[i]} and added a bow!`);
//          debugger;
      }
    return gifts;
  }

  wrapGifts(gifts); */

/*  const friends = ["Ada", "Brendan", "Ali"];
  const party = "birthday";
  
  function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
//        debugger;
    }
    return messages;
  }

  newMessages = writeCards(friends, party);
  console.log(newMessages); */

  function countDown(initialValue) {
      let i = initialValue;
      while (i > -1) {
          console.log(i--);
      }
    return;
  }

  countDown(10);
  