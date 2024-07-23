//carrossel

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


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