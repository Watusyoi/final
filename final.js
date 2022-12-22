
const textInput = document.getElementById("text_input");
const todoAdd = document.getElementById("Add");
const todoList = document.getElementById("todo_list");
const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

//モーダルの設定
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
const addTasks = (task) => {
  const listItem = document.createElement('li');
  const showItem = todoList.appendChild(listItem);
  showItem.innerHTML = task;

// タスクに削除ボタンを付与
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', evt => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });
};

// 削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest('li');
  todoList.removeChild(chosenTask);
};
// 追加ボタンをクリックし、イベントを発動（タスクが追加）
todoAdd.addEventListener('click', evt => {
  evt.preventDefault();
  const task = textTnput.value;
  addTasks(task);
  textTnput.value = '';
});