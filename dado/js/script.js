
const playsBtn = document.getElementById('plays');
const resultBtn = document.getElementById('result');
const resetBtn = document.getElementById('reset');

let userCounter = 0;
let computerCounter = 0;
let tieCounter = 0;


playsBtn.addEventListener('click', function() {

  const numRandomUser = Math.floor(Math.random() * 6) + 1; //Number
  console.log(numRandomUser);

  const numRandomComputer = Math.floor(Math.random() * 6) + 1; //Number
  console.log(numRandomComputer);


  if (numRandomUser > numRandomComputer) {
    console.log('HA vinto l\'Utente');
    alert('HA vinto l\'Utente');
    userCounter += 1;
  } else if (numRandomUser === numRandomComputer) {
    console.log('Pareggio!');
    alert('Pareggio!');
    tieCounter += 1;
  } else {
    console.log('HA vinto il Computer');
    alert('HA vinto il Computer');
    computerCounter += 1;
  }

})

resultBtn.addEventListener('click', function() {

  alert(`
    Punteggio:
    Utente: ${userCounter}!
    Computer: ${computerCounter}!
    Tie: ${tieCounter}!`)
})

resetBtn.addEventListener('click', function() {

  userCounter = 0;
  computerCounter = 0;
  tieCounter = 0;

  alert('La partita è stata resettata')

})
