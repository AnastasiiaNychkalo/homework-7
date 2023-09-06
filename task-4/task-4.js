const select = document.getElementById('mySelect');
const deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', () => {
    const selectedIndex = select.selectedIndex;
    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    }
});