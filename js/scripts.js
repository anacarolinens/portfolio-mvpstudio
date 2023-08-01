window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 0);
});


// Função para animar o crescimento dos números de progresso
function animateProgressNumber(element, targetValue) {
    let currentProgress = 0;
    const increment = targetValue / 100; // Dividir pelo número total de passos
  
    const interval = setInterval(() => {
      if (currentProgress < targetValue) {
        currentProgress += increment;
        element.textContent = Math.round(currentProgress);
      } else {
        clearInterval(interval);
      }
    }, 20); // Ajuste o intervalo (em milissegundos) para controlar a velocidade do progresso
  }
  
  // Iniciar os números de progresso quando a página é rolada
  document.addEventListener('scroll', () => {
    const projectsElement = document.getElementById('projects');
    const clientsElement = document.getElementById('clients');
    const artsElement = document.getElementById('arts');
    const collaboratorsElement = document.getElementById('collaborators');
  
    animateProgressNumber(projectsElement, 150);
    animateProgressNumber(clientsElement, 100);
    animateProgressNumber(artsElement, 445);
    animateProgressNumber(collaboratorsElement, 32);
  });
  