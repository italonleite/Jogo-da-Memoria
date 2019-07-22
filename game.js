
var _imagens = [
    {
        id: 1,
        titulo: 'imagem 1',
        url: "http://lorempixel.com/800/800/sports/1/",
        borda: 'card-img-top imgborda',
    },
    {
        id: 2,
        titulo: 'imagem 2',
        url: "http://lorempixel.com/200/200/sports/2/"
    },
    {
        id: 3,
        titulo: 'imagem 3',
        url: "http://lorempixel.com/200/200/sports/3/"
    },
    {
        id: 4,
        titulo: 'imagem 4',
        url: "http://lorempixel.com/200/200/sports/1/"
    },
]
new Vue({
    el: '#app',
    data: {
        imagens: _imagens,
       
        
    },
    computed: {
     
        
    },
    methods: {
        selecionarImg: function (imagem) {
            //armazenando id no localStorage
            localStorage.setItem("IdImagem", imagem);
            alert('voce selecionou: ' + imagem)
        }
    }
}); 
