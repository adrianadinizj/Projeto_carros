let listaCarro = [
    {
        "nome":"azul",
        "img":"./img/azul.png",
        "descricao":"Carro esportivo Azul"
    },
    {
        "nome":"czinger",
        "img":"./img/czinger.png",
        "descricao":"Carro esportivo Preto"
    },
    {   
        "nome":"ferrari",
        "img":"img/ferrari.jpg",
        "descricao":"Carro esportivo  ferreri Vermelho"
    },
    {    
        "nome":"pagani",
        "img":"./img/pagani.jpg",
        "descricao":"Carro esportivo cinza"
    },
    {
        "nome":"vermelho",
        "img":"./img/vermelho.jpg",
        "descricao":"Carro esportivo Vermelho"
    },
    {
            "nome":"mclaren-elva",
            "img":"./img/mclaren.png",
            "descricao":"Carro esportivo Mclaren"
        }

]
listaCarro.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
            <div class="col-md-4">
            <div class="card m-2">
                <img src="${carro.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${carro.nome}</h5>
                    <button a href="#" class="btn btn-secondary"onClick ="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></button>
                </div>
            </div>
            </div>
        `
})

function zoomImg(posicao) {
    let carroSelecionado = listaCarro[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML= carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;
// modal
    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme","light");
        document.querySelector("#alterarTemaSite").innerHTML =`<i class="bi bi-moon-fill"></i>`;
    }else{
        document.querySelector("html").setAttribute("data-bs-theme","dark");
        document.querySelector("#alterarTemaSite").innerHTML =`<i class="bi bi-brightness-high-fill"></i>`
    }
}