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
        }
    })
})