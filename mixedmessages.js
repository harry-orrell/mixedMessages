function randomPot(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  const potOne = ["i hope", "crazy", "maybe", "surely", "one day"];
  const potTwo = ["ducks", "aliens", "sausages", "cars", "plants"];
  const potThree = ["will", "can", "might", "will not"];
  const potFour = ["fly", "evolve", "flourish", "dream", "swim"];
  
  const randomPhrase = () => 
    `${randomPot(potOne)} ${randomPot(potTwo)} ${randomPot(potThree)} ${randomPot(potFour)}`;
  
  console.log(randomPhrase());

  