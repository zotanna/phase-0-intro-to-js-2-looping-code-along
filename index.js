function writeCards(namesArray, eventName) {
  let messagesArray = [];
  for (let i = 0; i < namesArray.length; i++) {
    messagesArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
  }
  return messagesArray;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
function countdown(message, startingNumber = 10) {
  while (startingNumber > 0) {
    console.log(startingNumber);
    startingNumber = startingNumber - 1;
  }
}

countdown("Launch!");
