const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const error = document.querySelector(".error");

const createTemplate = (todo) => {
  const html = `
    <li
      class="
        list-group-item
        d-flex
        justify-content-between
        align-items-center
      "
    >
      <span>${todo}</span>
      <i class="fas fa-window-close"></i>
    </li>
    `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    createTemplate(todo);
    addForm.reset();
  } else {
    error.value = "You must type something. Try again.";
    setTimeout(() => {
      addForm.reset();
    }, 2000);
  }
});
