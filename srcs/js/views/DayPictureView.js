class DayPictureView {
    constructor(){
        throw new Error("Não precisa de instancia");
    }
    static template(dayPicture) {
        return `
        <h1 id="title">Astronomy Picture of the Day</h1>
        <p id="titleDescription">Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
        <div id="dataArea">
            <p id="date">${dayPicture.data}</p>
            <form>
                <label for="trocaData"></label>
                <input type="date" id="trocaData">
                <input type="submit" id="btnEnviar" value="Enviar">
            </form>
        </div>
        <img src="${dayPicture.imagemDoDia}">
        <p id="explanation">${dayPicture.explicacao}</p>
        <p id="credits">${dayPicture.creditos}</p>
        `
    }
    static envioBotao(){
        return document.querySelector('#btnEnviar').addEventListener("click", (event)=>{
            event.preventDefault();
        });
}
}
