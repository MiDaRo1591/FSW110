console.log("Test"); // Make sure script is linked.

// Abstracted Logic
function handleColorBlack() // Function colors to be used.
{
    console.log('black'); // Log what color is being used.
    oBox.style.backgroundColor = "Black";// Change the color of the background.
}
// More for each Color.
function handleColorGreen() {console.log('green'); oBox.style.backgroundColor = "Green";}
function handleColorYellow(){console.log('yellow');oBox.style.backgroundColor = "Yellow";}
function handleColorBlue()  {console.log('blue');  oBox.style.backgroundColor = "Blue";}
function handleColorRed()   {console.log('red');   oBox.style.backgroundColor = "Red";}
function handleColorPurple(){console.log('purple');oBox.style.backgroundColor = "Purple";}


// Variable and Constant List.
const oBox = document.getElementById("DivBox");

// Invoking Listeners.
oBox.addEventListener("DOMContentLoaded", handleColorBlack);  // Black upon complete loading of the HTML page *you might have to look up how to do this*
// All wep pages say do use "DOMContentLoaded", but I cannot get it to work. Just taking point damage...

oBox.addEventListener("mouseenter", handleColorGreen);  // Green when the mouse hovers over the square. 
oBox.addEventListener("mousedown",  handleColorYellow); // Yellow when the mouse button is held down over the square. 
oBox.addEventListener("mouseup",    handleColorBlue);   // Blue when the mouse button is let go over the square. 
oBox.addEventListener("dblclick",   handleColorRed);    // Red when the mouse is double clicked in the square. 
document.addEventListener("wheel",  handleColorPurple); // Purple when the mouse scroll is used somewhere in the window. 
// ^ Change this to Document.                           // (not just over the square). 