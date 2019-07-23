
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
        id: 1,
        titulo: 'imagem 1',
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
            //primeiro clique verifica se tem algo no no localStorage
            if (localStorage.getItem("IdImagem") === null) {
                //armazenando id no localStorage
                localStorage.setItem("IdImagem", imagem);
                //comparando o id da imagem com localstorage
            } else if (localStorage.getItem("IdImagem") == imagem) {
                alert('é igual');
                localStorage.clear();
            } else {
                alert('nao é igual')
                localStorage.clear();
            }
        },
        SortearImagens: function () {
            debugger
            var div = $("#sortearimagens");
            var lis = div.children();
            var sorteada = Math.floor(Math.random() * lis.length);
            for (var i = 0; i < sorteada; i++)
                lis.eq(i).detach().appendTo(div);
        }
    }
}); 
