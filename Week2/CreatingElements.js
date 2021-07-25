<<<<<<< HEAD
/*
    HTML page created
    Javascript file linked to HTML page
    H1 with the text “Welcome to my JS site”
    Paragraph (P tag) with the text “All of this was created with Javascript”
    An Ordered list (ol) with at least three items (li) displaying text.
*/

console.log("Working");

// ACTUAL ASSIGNMENT

var lItem = document.createElement('li'); // Create the new element here.
lItem.textContent = 'Item 2'; // Text fill in so we have something to read.
var FixItem = document.getElementById('oList'); // Get the parent element 
FixItem.appendChild(lItem); // apply the change to the parent element

console.log(lItem);

// more of the same
lItem = document.createElement('li');
lItem.textContent = 'Item 3';
FixItem = document.getElementById('oList');
FixItem.appendChild(lItem);

lItem = document.createElement('li');
lItem.textContent = 'Item 4';
FixItem = document.getElementById('oList');
FixItem.appendChild(lItem);

//////////////////////////////////////////

var pItem = document.getElementById('Par'); // Grab the paragraph item
pItem.textContent = 'All of this was created with Javascript.'; // Change the text within said item

//////////////////////////////////////////

// Same as above, just change the var to the head
var HItem = document.getElementById('Head');
=======
/*
    HTML page created
    Javascript file linked to HTML page
    H1 with the text “Welcome to my JS site”
    Paragraph (P tag) with the text “All of this was created with Javascript”
    An Ordered list (ol) with at least three items (li) displaying text.
*/

console.log("Working");

// ACTUAL ASSIGNMENT

var lItem = document.createElement('li'); // Create the new element here.
lItem.textContent = 'Item 2'; // Text fill in so we have something to read.
var FixItem = document.getElementById('oList'); // Get the parent element 
FixItem.appendChild(lItem); // apply the change to the parent element

console.log(lItem);

// more of the same
lItem = document.createElement('li');
lItem.textContent = 'Item 3';
FixItem = document.getElementById('oList');
FixItem.appendChild(lItem);

lItem = document.createElement('li');
lItem.textContent = 'Item 4';
FixItem = document.getElementById('oList');
FixItem.appendChild(lItem);

//////////////////////////////////////////

var pItem = document.getElementById('Par'); // Grab the paragraph item
pItem.textContent = 'All of this was created with Javascript.'; // Change the text within said item

//////////////////////////////////////////

// Same as above, just change the var to the head
var HItem = document.getElementById('Head');
>>>>>>> 4303b380ffb26b50d938157f77195a749d2e90ae
HItem.textContent = 'Welcome to my JS site.';