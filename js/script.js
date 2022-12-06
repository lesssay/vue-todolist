console.log('ok', Vue);

Vue.config.devtools = true;

// Descrizione:
// Rifare l'esercizio della to do list, seguendo le istruzioni nelle milestone.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// Mi raccomando: nel vostro array originale mettete almeno un task con done: true
// e uno con done: false

// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const root = new Vue({
    name: 'ToDoList',
    el: '#to-do-list',
    data: {
        tasks: [
            { text: 'spesa', done: false },
            { text: 'posta', done: false },
            { text: 'parrucchiere', done: false },
            { text: 'regalo a mamma', done: false },
            { text: 'chiamare commercialista', done: false }
        ],

        newTaskText: ''
    },
    // ESEMPIO DI COMPUTED SOLO PER CAPIRE COME FUNZIONA

    /* computed: {
        tasksUpperCaseArray() {
            return this.tasks.map((task) => {
                task.text = task.text.toUpperCase();
                return task;
            });
        },

    }, */

    methods: {
        removeTask(index) {
            this.tasks.splice(index, 1);
        },

        addTask() {
            if (this.newTaskText) {
                const newTask = { text: this.newTaskText, done: false };
                this.tasks.push(newTask);
            }
        },

        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    }

});
