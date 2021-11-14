const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const error = document.querySelector(".error");

// Creates the template to display todos
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
      <i class="fas fa-window-close delete"></i>
    </li>
    `;
  list.innerHTML += html;
};
// Insert todos on the page
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  // Simple validation to check if the form field is empty
  if (todo.length) {
    createTemplate(todo);
    addForm.reset();
    // If is empty it will display an error message
  } else {
    error.value = "You must type something. Try again.";
    setTimeout(() => {
      addForm.reset();
    }, 2000);
  }
});

// Delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
