
const textTnput = document.getElementById("text_input");
const todoList = document.getElementById("todo_list");
const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];


textTnput.addEventListener("keydown", e =>{
    const text = textTnput.value.trim();
    
    if (text === " " || e.key !== "Enter"){
        return;
    }

    const li = document.createElement("li");
    const span  = document.createElement("span");
    const button = document.createElement("btn");

    li.classList.add("list_item");
    span.textContent = text;

    button.textContent = "削除";
    button.type ="button";
    button.classList.add("delete-button");

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

})

// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
}

// バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}