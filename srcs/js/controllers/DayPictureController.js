let requisicao = new XMLHttpRequest();
requisicao.open("GET", "https://api.nasa.gov/planetary/apod?api_key=8hevIVr1Xc22gtzuJRjrm5SKAnsshD7VmVDoW6Su");
requisicao.onload = function(){
    if(requisicao.status == 200){
        let retornoRequisicao = JSON.parse(requisicao.responseText);
        let dayPicture = new DayPicture(
            "Astronomy Picture of the Day",
            "Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.",
            retornoRequisicao.date,
            retornoRequisicao.hdurl,
            retornoRequisicao.copyright,
            retornoRequisicao.explanation
            );
            document.querySelector('#title').textContent = dayPicture.titulo;
            document.querySelector('#titleDescription').textContent = dayPicture.descricaoTitulo;
            document.querySelector('#date').textContent = dayPicture.data;
            document.querySelector('#dayImage').style.backgroundImage = `url('${dayPicture.imagemDoDia}')`;
            document.querySelector('#credits').textContent = dayPicture.creditos;
            document.querySelector('#explanation').textContent = dayPicture.explicacao;
    }else{
        console.log("Ocorreu um erro na requisição!");
    }
};
requisicao.send();
