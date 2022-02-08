const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

input.placeholder = "2 Nephi 3:5"

button.addEventListener("click", function() {
    const li = document.createElement("li");
    li.textContent = input.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    if (input.value !== "") {
        li.appendChild(deleteButton);
        list.appendChild(li);
    }

    input.value = "";
    input.placeholder = "Try again?"

    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        input.focus();
    })
});