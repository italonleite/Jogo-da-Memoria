
var _imagens = [
    {
        id: 1,
		valor: 'carro',
        titulo: 'carro',
        branco: false
   

        
    },
    {
        id: 2,
		valor: 'aviao',
        titulo: 'aviao',
        branco: false
    
    },
    {
        id: 3,
		valor: 'aviao',
        titulo: 'aviao',
        branco: false
    },
    {
        id: 4,
		valor: 'carro', 
        titulo: 'carro',
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
            
             //primeiro clique verifica se tem algo armazenado no localStorage
            if (localStorage.getItem("IdImagem") === null) {
               
                //armazenando id no localStorage
                localStorage.setItem("IdImagem", imagem.id);
                //armazenando Valor no localStorage
                localStorage.setItem("ValorImagem", imagem.valor);
                //atribuindo valor na váriavel implicita
                imagem1 = localStorage.getItem("ValorImagem");
              
				//comparando se os valores das imagens é igual e Ids diferentes
            }else if (imagem1 == imagem.valor && localStorage.getItem("IdImagem") != imagem.id) {
                  
                for (var i = 0; i < _imagens.length; i++) { 
                    //varrendo as imagens que tenha o mesmo valor da imagem1
                    if (_imagens[i].valor == imagem1) { 
                        _imagens[i].branco = true;
                        imagem.branco = true
                    }
                }
                
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
