Nome **Mail Dadi**

Mail :email:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


### Soluzione 

Es1. 

**creazione/richiesta dati**
1. Creare un Array con le email che posso accedere
2. chiedere all'utente la sua mail

**Esecuzione logica**
```
 for(ogni elemento dell'Array tirare il valore intrinsico) {
  se il valore è uguale ad un valore/elemento dell'Array-->
    puoi accedere
  altrimenti--> 
    non puoi accedere
 }
```

**Ountput**
Stampare in pagina/consol.log()

Es2.

**creazione/richiesta dati**
1. creazione numeri random per l'Utente
2. creazione numeri random per il Computer


**Esecuzione logica**
se il numero Utente > numero Computer
  ha vinto utente
se il numero Utente === numero Computer
  pareggio
alrimenti:
  ha vinto il Computer


**Ountput**
Stampare in pagina/consol.log()


