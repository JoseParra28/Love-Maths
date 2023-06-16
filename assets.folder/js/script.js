
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function(){
    // -----------------------------------------------------option one - manual toggle funtionality
    // if (sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar")
    // }else {
    //     sidebar.classList.add("show-sidebar")
    // }
    // -----------------------------------------------------built in funtionality bt js
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar")
})

// ----------------------card
const magicBtn = document.querySelector(".magic-btn");
const openModal = document.querySelector(".book");
const closeModal = document.querySelector(".close-modal");

magicBtn.addEventListener("click", function () {
    openModal.classList.remove("open-modal");
  });
closeModal.addEventListener("click", function(){
    openModal.classList.add("open-modal");
})

// ----------------------questions (1)
// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
// btn.addEventListener("click", function(e){
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text")
// })
// })

// ----------------------questions (2)
// using selector inside element

const questions = document.querySelectorAll(".question")

questions.forEach(function(question){
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    })
});