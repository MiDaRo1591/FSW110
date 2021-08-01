/*
This assignment will help you practice adding CSS styles to elements created in Javascript.

    1. Create a new project with an HTML file, a linked JS file, and a linked CSS file.

    2. In the JS file, create a list of 5 H2 elements on the DOM using a for loop (Hint: this was covered in the previous assignment). 
    Give them whatever text you would like.

    3. Using the .style property, edit the element’s styles in your js to have:

        Font-size: 20px
        Font-weight: lighter
        Font-family: sans-serif
        Color: cornflowerblue

    4. Go to your CSS file and create a class called .border that has:

    2px solid black border,
    5px padding
    5px margin

5. Back in your JS, add that class to the elements being created using classList.
*/

function Reset(lItem)
{
    lItem.style.fontSize = 30; // Change font to 30 pixels, which would be default...
    lItem.style.fontWeight = "lighter"; // Alter font weight.
    lItem.style.fontFamily = "sans-serif"; // Change Style of font.
    lItem.style.color = "cornflowerblue"; // Adjust color.
//    lItem.classList.add("border");// The class from the .css file, moving to when it's made.
}

//<h1 id='heading' class='title'>Modifying Styles with JS</h1>

for (let i = 1; i < 6; i++) 
{
var lItem = document.createElement('h2'); // Create the new element here.
lItem.textContent = 'This is just some filler text for the H2 element Numer '+i+"."; // Text fill in so we have something to read.
lItem.id = "h2element"+i; // Set the ID so we can grab it later.

lItem.classList.add('border'); // The class from the .css file.

document.body.appendChild(lItem); // Apply the change to the parent element.
console.log(lItem); // Log Check
 Reset(lItem); // Function for quick restyling.
}

/*
// So I didn't know if you wanted me to use that function earlier which I went ahead and did.
// However as I think the assignment was more about making sure you got the right things I put the drawn out process here.

lItem = document.getElementById('h2element1'); // Get the element by the ID assigned.
lItem.style.fontSize = 30; // Font Size needs to be 30 pixels, which is weird because isn't an <h2> already 30?
lItem.style.fontWeight = "lighter"; // Unbold the test so it lookes like a resized <p>
lItem.style.fontFamily = "sans-serif"; // Text change for some reason
lItem.style.color = "cornflowerblue"; // Make the font harder to read?
// More of the same.///////////////////////////
lItem = document.getElementById('h2element2')
lItem.style.fontSize = 30;
lItem.style.fontWeight = "lighter";
lItem.style.fontFamily = "sans-serif";
lItem.style.color = "cornflowerblue";
///////////////////////////////////////////////
lItem = document.getElementById('h2element3')
lItem.style.fontSize = 30;
lItem.style.fontWeight = "lighter";
lItem.style.fontFamily = "sans-serif";
lItem.style.color = "cornflowerblue";
///////////////////////////////////////////////
lItem = document.getElementById('h2element4')
lItem.style.fontSize = 30;
lItem.style.fontWeight = "lighter";
lItem.style.fontFamily = "sans-serif";
lItem.style.color = "cornflowerblue";
///////////////////////////////////////////////
lItem = document.getElementById('h2element5')
lItem.style.fontSize = 30;
lItem.style.fontWeight = "lighter";
lItem.style.fontFamily = "sans-serif";
lItem.style.color = "cornflowerblue";
*/