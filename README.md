# vue-todolist

Descrizione:
Rifare l'esercizio della to do list visto insieme a lezione.
Ogni oggetto dovra' avere almeno due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
2 -  aggiungere un altro bottone che permetta la modifica di un task gia' esistente


collego vue al foglio HTML
tra i data di vue inserisco un array di oggetti 
per ogni oggetto indico 2 proprietà (text e done)
nel foglio HTML inserisco ternario per verificare vero/falso e un v-for per stampare tutti gli oggetti contenuti nei data di vue
aggiungo l'icona di una "x" per rimuovere il todo dalla lista
creo un input di testo e un bottone aggiungi per dare la possibilità di aggiungere un todo
