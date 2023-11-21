PROBLEMA : CALCOLO PREZZO DEL BIGLIETTO DEL TRENO
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

1 - chiedere all'utente i km da percorrere con input;
2 - chiedere all'utente la sua età con input;
3 - calcola il prezzo del biglietto: 0.21 * km;
  4.1 - ? utente è minorenne;
    5 - sconto 20%;
  4.2 - ? utente over 65;
    6 - sconto 40%;
  4.3 - : prezzo = 0.21 * km;
7 - creare un bottone che ti generi un risultato;
8 - stampare in console.log;
9 - aggiungere il .toFixed();
10 - Creare un "milestone 2";     
     