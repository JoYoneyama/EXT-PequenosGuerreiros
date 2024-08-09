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

const container = document.querySelector(".parceiros-content");
const imagens = document.querySelectorAll(".parceiros-content img");

let contador = 0;

function slider(){

  contador++;

  if(contador > imagens.length - 1){

    contador = 0;

  }

  container.style.transform = `translateX(${-contador * 198}px)`;  //-contador pq esta movendo a img da esquerda para a direita
                                                                   
}                                                                  //o contador multiplica esse valor para atravessar todas as imagens

setInterval(slider, 2000);