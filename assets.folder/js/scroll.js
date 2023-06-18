const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
// linksContainer.classList.toggle("show-links")
const containerHeight = linksContainer.getBoundingClientRect().height;
const linksHeight = links.getBoundingClientRect().height;
if(containerHeight === 0 ){
    linksContainer.style.height = `${linksHeight}px`
}else {
    linksContainer.style.height = 0;
}
})

const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");


 window.addEventListener("scroll", function(){
    const scrollHeight = this.window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navBar){
        navBar.classList.add("fixed-nav")
    }else {
        navBar.classList.remove("fixed-nav")
    }
    
 })