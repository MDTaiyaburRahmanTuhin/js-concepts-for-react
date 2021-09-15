const addToLocalStorage = () => {
    const idInput = document.getElementById('storageId');
    const id = idInput.value
    const storageValue = document.getElementById('storageValue');
    const value = storageValue.value;
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    storageValue.value = '';
}