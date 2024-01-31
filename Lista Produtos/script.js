
// lista com um array de produtos
const produtos = [  {nome: 'Computador', categoria: 'Tecnologia', preco: '100'}, 
                    {nome: 'Telemovel', categoria: 'Tecnologia', preco: '50'},
                    {nome: 'TV', categoria: 'Tecnologia', preco: '40'}    ]

let produtoTabela = document.getElementById('produtoLista');


// este codigo vai percorrer cada produto da lista com um incremento de +1
for (i=0; i<produtos.length; i++){

        let produtoTabelaLinha = document.createElement('tr');

        

        let produtoTabelaDadosNome = document.createElement('td');

        //este codigo vai passar os dados  do produto q esta a ser percorrido actualmente para o HTML de forma dinamica
        produtoTabelaDadosNome.innerHTML = produtos[i].nome;

        //uniao da table data (td) pra dentro da table row (tr)
        produtoTabelaLinha.appendChild(produtoTabelaDadosNome);
        
        //uniao da table row (tr) pra dentro da tabela mae/principal
        produtoTabela.appendChild(produtoTabelaLinha);



        let produtoTabelaDadosCategoria = document.createElement('td');
        produtoTabelaDadosCategoria.innerHTML = produtos[i].categoria;
        produtoTabelaLinha.appendChild(produtoTabelaDadosCategoria);
        produtoTabela.appendChild(produtoTabelaLinha);


        let produtoTabelaDadosPreco = document.createElement('td');
        produtoTabelaDadosPreco.innerHTML = produtos[i].preco;
        produtoTabelaLinha.appendChild(produtoTabelaDadosPreco);
        produtoTabela.appendChild(produtoTabelaLinha);


    }