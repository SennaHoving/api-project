const dragItems = document.querySelectorAll("li"); 
const dragFields = document.querySelectorAll(".field");

let draggedElement = null;

dragItems.forEach(item => {
    item.setAttribute("draggable", "true");

    item.addEventListener("dragstart", (event) => {
        draggedElement = item;
    });
})

dragFields.forEach(field => {
    field.addEventListener("dragover", (e) => {
        e.preventDefault(); 
    })

    field.addEventListener("drop", (e) => {
        e.preventDefault();
        if (draggedElement) {
            field.appendChild(draggedElement);
            sortExerciseList();
        }
    })
})

// Search 
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const exerciseItems = document.querySelectorAll("#list li");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        exerciseItems.forEach(li => {
            const name = li.dataset.name;
            li.style.display = name.includes(query) ? "" : "none";
        });
    });
});

// Sort exercises on back drop
function sortExerciseList() {
    const list = document.getElementById("list");
    const items = Array.from(list.querySelectorAll("li"));

    items
        .sort((a, b) => {
            const idA = Number(a.dataset.id);
            const idB = Number(b.dataset.id);
            return idA - idB;
        })
        .forEach(item => list.appendChild(item));
}