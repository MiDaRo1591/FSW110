<<<<<<< HEAD
/*
For this project, you will create a basic website where all the elements are created using only JavaScript.  

Requirements:
    navbar with links (doesn’t need to work)
    An h1 tag
    A p tag
    A list
    Footer
*/

// Variables /////////////////////////////
var lItem
var footer;
var iItem;
var FixItem;

//////////////////////////////////////////

iItem = document.createElement('h1'); // Create the new Navigation Bar element here.
iItem.textContent = 'This is a Navigation Bar element made with Javascript.'; // Change the text.
iItem.style.fontSize = '12px' // Going to choke down the size, it seems too big.

FixItem = document.createElement('a'); // There needs to be a link, this was picked at randome.
FixItem.href = "https://image.shutterstock.com/image-vector/woman-guide-260nw-411569830.jpg"; // assign head referance
FixItem.appendChild(iItem); // Apply the <a> to the parent nav element.
console.log(FixItem); // Check to make sure it was made.

document.body.appendChild(iItem); // Add the Navigation Bar to the document.
console.log(iItem); // Check to make sure it was made.

//////////////////////////////////////////

iItem = document.createElement('h1'); // Create the new headder element here.
iItem.textContent = 'This is a Heading element made with Javascript.'; // Change the text.
document.body.appendChild(iItem); // Add the headder to the document.
console.log(iItem); // Check to make sure it was made.

//////////////////////////////////////////

iItem = document.createElement('p'); // Create the new paragraph element here.
iItem.textContent = 'This is a paragraph element made with Javascript.'; // Change the text of the paragraph.
document.body.appendChild(iItem); // Add the paragraph to the document.
console.log(iItem); // Check to make sure it was made.

//////////////////////////////////////////

lItem = document.createElement('ol'); // Create the new element here.
lItem.id = 'oList'; // assigne the ID of the new element.
lItem.textContent = 'This is a list element made with Javascript'; // Give the list a title.
document.body.appendChild(lItem); // Add the orginized list to the document.
console.log(lItem); // Check to make sure it was made.

iItem = document.createElement('li'); // Create the new list element here.
iItem.textContent = 'JS Item 1'; // Text fill in so we have something to read.
lItem.appendChild(iItem); // Apply the change to the parent list element.

// Going to add a few more for a "proper" list.
iItem = document.createElement('li');
iItem.textContent = 'JS Item 2';
lItem.appendChild(iItem);

iItem = document.createElement('li');
iItem.textContent = 'JS Item 3';
lItem.appendChild(iItem);

//////////////////////////////////////////

footer = document.createElement('footer'); // Create the new list element here.
iItem = document.createElement('p'); // Create the paragraph element here.
iItem.textContent = 'Websight by Micah Ross'; // Change the text.
footer.appendChild(iItem); // Add the paragraph to the footer.
document.body.appendChild(footer); // Add the footer to the document.
console.log(footer); // Check to make sure it was made.
=======
/*
For this project, you will create a basic website where all the elements are created using only JavaScript.  

Requirements:
    navbar with links (doesn’t need to work)
    An h1 tag
    A p tag
    A list
    Footer
*/

// Variables /////////////////////////////
var lItem
var footer;
var iItem;
var FixItem;

//////////////////////////////////////////

iItem = document.createElement('h1'); // Create the new Navigation Bar element here.
iItem.textContent = 'This is a Navigation Bar element made with Javascript.'; // Change the text.
iItem.style.fontSize = '12px' // Going to choke down the size, it seems too big.

FixItem = document.createElement('a'); // There needs to be a link, this was picked at randome.
FixItem.href = "https://image.shutterstock.com/image-vector/woman-guide-260nw-411569830.jpg"; // assign head referance
FixItem.appendChild(iItem); // Apply the <a> to the parent nav element.
console.log(FixItem); // Check to make sure it was made.

document.body.appendChild(iItem); // Add the Navigation Bar to the document.
console.log(iItem); // Check to make sure it was made.

//////////////////////////////////////////

iItem = document.createElement('h1'); // Create the new headder element here.
iItem.textContent = 'This is a Heading element made with Javascript.'; // Change the text.
document.body.appendChild(iItem); // Add the headder to the document.
console.log(iItem); // Check to make sure it was made.

//////////////////////////////////////////

iItem = document.createElement('p'); // Create the new paragraph element here.
iItem.textContent = 'This is a paragraph element made with Javascript.'; // Change the text of the paragraph.
document.body.appendChild(iItem); // Add the paragraph to the document.
console.log(iItem); // Check to make sure it was made.

//////////////////////////////////////////

lItem = document.createElement('ol'); // Create the new element here.
lItem.id = 'oList'; // assigne the ID of the new element.
lItem.textContent = 'This is a list element made with Javascript'; // Give the list a title.
document.body.appendChild(lItem); // Add the orginized list to the document.
console.log(lItem); // Check to make sure it was made.

iItem = document.createElement('li'); // Create the new list element here.
iItem.textContent = 'JS Item 1'; // Text fill in so we have something to read.
lItem.appendChild(iItem); // Apply the change to the parent list element.

// Going to add a few more for a "proper" list.
iItem = document.createElement('li');
iItem.textContent = 'JS Item 2';
lItem.appendChild(iItem);

iItem = document.createElement('li');
iItem.textContent = 'JS Item 3';
lItem.appendChild(iItem);

//////////////////////////////////////////

footer = document.createElement('footer'); // Create the new list element here.
iItem = document.createElement('p'); // Create the paragraph element here.
iItem.textContent = 'Websight by Micah Ross'; // Change the text.
footer.appendChild(iItem); // Add the paragraph to the footer.
document.body.appendChild(footer); // Add the footer to the document.
console.log(footer); // Check to make sure it was made.
>>>>>>> 4303b380ffb26b50d938157f77195a749d2e90ae
