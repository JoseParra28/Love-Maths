// Set initial count
let count = 0;


// select value buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList; 
        if (styles.contains('decrese')){
            count--;
            value.style.color = "red"
        }else if (styles.contains('increase')){
            count++;
            value.style.color = "green"
        }else if (styles.contains('reset')){
            count = 0;
            value.style.color = "#a3a0a0"
        }
        value.textContent = count;
    });
});




console.log();