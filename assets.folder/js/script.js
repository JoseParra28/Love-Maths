
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