window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 0);
});