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
    
 });


//  ----------------------------tabs
const btns = document.querySelectorAll("tab-btn")
const about = document.querySelector(".about")
const article = document.querySelectorAll(".content")

about.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if(id) {
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList("active");
        });
        article.forEach(function(article){
            article.classList.remove("active")
        })
        const element = document.getElementById(id)
        element.classList.add("active")
    }
})

// mine


const bts = document.querySelectorAll(".btnTarget")

bts.forEach(function(display){
    display.addEventListener("click", function(e){
        const click = e.currentTarget.dataset.id
        const parra = document.querySelector(".hide")
        if(click === "recipes"){
            parra.classList.toggle("hide")
        }
       
    })
})

const question = document.querySelector(".question")
const answerBtn = document.querySelectorAll(".answerBtn")



answerBtn.forEach(function(game){
    game.addEventListener("click", function(e){
        const answerSelection =  e.currentTarget.dataset.id;
        if(answerSelection === 'a'){
            console.log("hehe")
        }else if (answerSelection === 'b'){
            console.log("huhu")
        }else if (answerSelection === 'c'){
            console.log("kakka")
        }else {
            console.log("end")
        }
    })
})