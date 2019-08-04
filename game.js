
var _imagens = [
    {
        id: 1,
		valor: 1,
        titulo: 'Id 1, valor 1',
        url: "http://lorempixel.com/200/200/sports/1/",
        branco: false
   

        
    },
    {
        id: 2,
		valor: 2,
        titulo: 'Id 2, valor 2',
        url: "http://lorempixel.com/200/200/sports/2/",
        branco: false
    
    },
    {
        id: 3,
		valor: 0,
        titulo: 'Id 3, valor 0',
        url: "http://lorempixel.com/200/200/sports/3/",
        branco: false
    },
    {
        id: 4,
		valor: 1, 
        titulo: 'Id 4, valor 1',
        url: "http://lorempixel.com/200/200/sports/1/",
        branco: false
       
        
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
                localStorage.setItem("IdImagem", imagem.id);
                //armazenando Valor no localStorage
                localStorage.setItem("ValorImagem", imagem.valor);
				//comparando se os valores das imagens é = e Ids diferentes
            }else if (localStorage.getItem("ValorImagem") == imagem.valor && localStorage.getItem("IdImagem") != imagem.id) {
                
                imagem.branco = true
                
                alert('Encontou as imagens');

                //limpando os dados do localStorage
                localStorage.clear();
            } else if (localStorage.getItem("IdImagem") == imagem.id ){
                alert('Você selecionou a mesma imagem')
                 //limpando os dados do localStorage
                localStorage.clear();
			} else{
                alert('nao é igual')
                 //limpando os dados do localStorage
                localStorage.clear();
            }
        },
        //Sorteando imagens
        SortearImagens: function () {
            var div = $("#sortearimagens");
            var lis = div.children();
            var sorteada = Math.floor(Math.random() * lis.length);
            for (var i = 0; i < sorteada; i++)
                lis.eq(i).detach().appendTo(div);
        },

        

       
   
    }
}); 
