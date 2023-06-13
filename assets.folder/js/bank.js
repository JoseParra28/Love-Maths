const colors = ["green", "red", "yellow", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const ramdomNumber = getRamdoNum();
    console.log(ramdomNumber);
    document.body.style.backgroundColor = colors[ramdomNumber];
    color.textContent = colors[ramdomNumber]
});

function getRamdoNum(){
    return Math.floor(Math.random()* colors.length);
}