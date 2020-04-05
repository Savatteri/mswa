/**
 * A function called on submit
 */

function check() {
    let value = document.getElementById('x').value;
    if (value.length == 0) {
        console.log('x is empty!');
        return false;
    }
    return true;
}