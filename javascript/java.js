//animacao so acontece quando o elemento entra no viewport da tela

document.addEventListener("DOMContentLoaded", () => {         //checa se o documento carregou

  const observer = new IntersectionObserver(entries => {       //usa IntersectionObserver para ver se o elemento esta no viewport
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        return;
      }
      
    })
  })

  const allAnimatedElements = document.querySelectorAll('.animate');       //pega todos os elementos com .animate aplicados

  allAnimatedElements.forEach((element) => observer.observe(element));      //adiciona o observer para todos esses elementos

})

//carrossel da seção parceiros

const container = document.querySelector(".parceiros-track");
const imagens = document.querySelectorAll(".parceiros-track img");

let contador = 0;
let larguraImg = 198; // Largura da imagem + margem
const totalImagens = (imagens.length + 2) / 2;   //só imagens.length / 2 n da certo pq ele reinicia o slide no ultimo elemento, oq causava um tp dos elementos

function slider() {
    contador++;

    // Reiniciar a transição para o início de forma suave
    if (contador >= totalImagens) {
        container.style.transition = "none";
        contador = 0;
        container.style.transform = `translateX(0px)`;

        // Forçar a continuação da transição suavemente após redefinir o contador
        setTimeout(() => {
            container.style.transition = "transform 0.7s ease-in-out";
            container.style.transform = `translateX(${-contador * larguraImg}px)`;  //-contador pq esta movendo a img da esquerda para a direita
        }, 50);
    } else {
        container.style.transform = `translateX(${-contador * larguraImg}px)`;    //o contador multiplica esse valor para atravessar todas as imagens
    }
}

setInterval(slider, 2000);