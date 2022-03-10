//1. Stampa a schermo un messaggio tramite i data di VUE all'interno di un h1:

const app = new Vue({

    el : "#app",
    data : {
        message : 'Hello World!',
        srcImg : 'https://picsum.photos/200/300',
        altImg : 'Random picture from picsum.photos'
    }
});