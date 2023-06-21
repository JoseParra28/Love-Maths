const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")
const submitBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")

let aditElement;
let editFlag = false;
let editID = "";

// submit foem event listener
form.addEventListener("submit", addItem)
clearBtn.addEventListener("click", clearItems)

function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        const element = document.createElement('article');
        element.classList.add("grocery-item");
        
        const attr = document.createAttribute('data-id')
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`;

        list.appendChild(element);

        dispalyAlert('Item added to the list', 'success')

        container.classList.add("show-container")

        // add to local storege
        addToLocalStorage(id, value);
        setBackToDefault()
    }else if (value && editFlag){
        console.log("editing")
    }else {
       dispalyAlert('please enter value,', 'danger');
    }
}
 function dispalyAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function(){
        alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
    },2000)
 }


function clearItems(){
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        })
    }
    container.classList.remove("show-container");
    dispalyAlert("all items were removed", "success")
}



function setBackToDefault(){
grocery.value = "";
editFlag = false;
editID = "";
submitBtn.textContent = "submit"
}



function addToLocalStorage(id, value){
console.log("added to local")
 }

console.log()