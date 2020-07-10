var apresenta = document.querySelector('#apresenta');
var titulo = document.createElement('h1');
titulo.id = 'title';
apresenta.appendChild(titulo);

var descricao = document.createElement('p');
descricao.id = 'titleDescription';
apresenta.appendChild(descricao);

var data = document.createElement('div');
data.id = 'date';
apresenta.appendChild(data);

criaForm('trocaData');

var nomeImagem = document.createElement('div');
nomeImagem.id = 'dayImage';
nomeImagem.style.backgroundPosition = "center";
nomeImagem.style.backgroundRepeat = 'no-repeat';
nomeImagem.style.backgroundSize = "100% 100%";
nomeImagem.style.width = '90%';
nomeImagem.style.height = '900px';
apresenta.appendChild(nomeImagem);

var explicacao = document.createElement('p');
explicacao.id = 'explanation';
apresenta.appendChild(explicacao);

var creditos = document.createElement('p');
creditos.id = 'credits';
apresenta.appendChild(creditos);

function criaForm(nomeBotao){
    var formulario = document.createElement('form');
    formulario.id = 'formulario';
    apresenta.appendChild(formulario);

    var label = document.createElement('label');
    label.textContent = 'Nova Data';
    formulario.appendChild(label);
    //cria input para a nova data
    var input = document.createElement('input');
    input.id = 'entrada-data';
    formulario.appendChild(input);

    var btnData = document.createElement('button');
    btnData.classList.add('btn');
    btnData.id = nomeBotao;
    formulario.appendChild(btnData);
    btnData.textContent = nomeBotao;
   
}



