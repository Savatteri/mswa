/**
 * Bind a function on submit to an element -> it should be in the DOM!
 */

document.getElementById('second').addEventListener('submit', (event) => {
    if (document.getElementById('z').value.length == 0) {
        console.log('z is empty!');
        event.preventDefault();
    }
});