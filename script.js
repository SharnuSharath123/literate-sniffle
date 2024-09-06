// This function will be called when the button is clicked
function handleClick() {
    alert('Button was clicked!');
}

// Attach the event listener to the button when the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('myButton');
    button.addEventListener('click', handleClick);
});
