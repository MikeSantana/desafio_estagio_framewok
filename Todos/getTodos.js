const url = `https://jsonplaceholder.typicode.com/todos`
const table = document.getElementById("todos");
const searchId = document.getElementById("search-id");
const input = document.getElementById("id-value");
const button = document.getElementById("show-all");

function clear(parameter) {
    parameter.innerText = "";
};

function htmlDate(parameter) {
    let tr = document.createElement("tr");

    let elementsGroup = `<td>${parameter.userId}</td> <td>${parameter.id}</td> <td>${parameter.title}</td> <td>${parameter.completed}</td>`;
    table.appendChild(tr)
    tr.innerHTML = elementsGroup;
};

searchId.addEventListener("submit", e => {
    e.preventDefault();
    clear(table);
    let inputID = input.value;


    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.filter((item) => {
                if (item.userId == inputID) {
                    htmlDate(item);
                }

            })
        })
})

button.addEventListener("click", e => {
    e.preventDefault();
    clear(table);
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {

            data.forEach((item) => {
                htmlDate(item);
            })
        })
})





