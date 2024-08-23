

const emailList = ['pippo@gmail.com', 'pippo99@hotmail.com', 'pluto@libero.it', 'pluto03@me.it', 'toppolino24@tiscali.it', 'toppolino05@boolea.com'];

// const userEmail = prompt('Qual è la tua Email?');
// console.log(userEmail);

const loginBtn = document.getElementById('login'); 
loginBtn.addEventListener('click', function() {
  const userEmail = document.getElementById('email').value;

  let result = false;

  for (let i = 0; i < emailList.length; i++) {
    if (userEmail === emailList[i]) {
      result = true;
    } 
  }

  /********************************
  COME POTREBBE ESSERE RISCRITTO IL CODICE
  *********************************/

  // if(emailList.includes(userEmail)) {
  //   result = true;
  // }

  // OR

  // const result = emailList.includes(userEmail);

  /********************************
  COME POTREBBE ESSERE RISCRITTO IL CODICE
  *********************************/

  if (result) {
      console.log('puoi accedere');
      alert('Puoi accedere')
  } else {
      console.log('Non puoi accedere');
      alert('Non puoi accedere')
  }
})



