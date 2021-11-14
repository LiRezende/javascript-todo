const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const error = document.querySelector(".error");
const search = document.querySelector(".search input");

// Add and remove todos //

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
      <i class="far fa-times-circle delete"></i>
    </li>
    `;
  list.innerHTML += html;
};

// Insert todos on the page
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim().toLowerCase();
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

// Search todos //

// Filter todos
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add("filtered"));
  Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// Keyupt event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
