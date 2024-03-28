// const userEmail = document.getElementById('email').value;

const emailList = ['pippo@gmail.com', 'pippo99@hotmail.com', 'pluto@libero.it', 'pluto03@me.it', 'toppolino24@tiscali.it', 'toppolino05@boolea.com'];

const userEmail = prompt('Qual è la tua Email?');
console.log(userEmail);

let result = false;
for (let i = 0; i < emailList.length; i++) {
  if (userEmail === emailList[i]) {
    result = true;
    
  } 
}

if (result) {
  console.log('puoi accedere');
} else {
  console.log('Non puoi accedere');
}
