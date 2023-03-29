const input = document.getElementById('new-todo');
const button = document.getElementById('add-todo');
const list = document.getElementById('todo-list');



button.addEventListener('click', () => {
  const text = input.value.trim();
  if (text !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const checkedbox = document.createElement('input')

    span.textContent = text;
    span.classList.add('active')
    checkedbox.type = 'checkbox'

    li.appendChild(checkedbox)
    li.appendChild(span);
    list.appendChild(li);
    input.value = '';

  }
});

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      button.click();
    }
  });