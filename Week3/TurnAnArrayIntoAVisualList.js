/*
    1. Create an HTML page from scratch and link a JS file to it.
    2. Create an H1 tag with the text “Hello World”, and append it to the DOM (test and make sure it is showing up on the website).
    3. Create a for-loop, repeat this process 10 times so that 10 H1’s with the text “Hello World” show up when the website is visited.
    4. Add some style to the H1's in Step 3.
    5. Create a new array using the following information:
    const names = [“steve”, “larry”, “joe”, “shirley”, “steph”, “nate”, “rick”, “emily”];
    6. Create a for loop that iterates through the array in Step 5 and displays it on the page.
*/

var lItem = document.createElement('h1'); // Create the new element here.
lItem.textContent = 'Hello World'; // Text fill in so we have something to read.
lItem.id = 'h1HWElement'; // Set the ID so we can grab it later.
document.body.appendChild(lItem); // Apply the change to the parent element.
console.log(lItem); // Log Check

for (let i = 1; i <= 10; i++) 
{
    lItem = document.createElement('h1');
    lItem.textContent = 'Hello World';
    lItem.id = 'h1HWElement'+i;
    document.body.appendChild(lItem);
    if(i == 1){lItem.style.color = "red";}
    if(i == 2){lItem.style.fontStyle = "italic";}
    if(i == 3){lItem.style.color = "green";}
    if(i == 4){lItem.style.fontFamily = "cursive";}
    if(i == 5){lItem.style.color = "cornflowerblue";}
    if(i == 6){lItem.style.fontFamily = "fantasy";}
    if(i == 7){lItem.style.fontFamily = "cursive";lItem.style.fontStyle = "italic";}
    if(i == 8){lItem.style.fontFamily = "cursive";lItem.style.fontStyle = "italic";lItem.style.color = "red";}
    if(i == 9){lItem.style.fontWeight = "lighter";}
    if(i == 10){lItem.style.color = "blue";}
    console.log(lItem);
}

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

for (let i = 0; i < names.length; i++) 
{
    lItem = document.createElement('p'); // Create the new element here.
    lItem.textContent = names[i].toString();; // Text fill in so we have something to read.
    lItem.id = 'h1HWElement'; // Set the ID so we can grab it later.
    document.body.appendChild(lItem); // Apply the change to the parent element.
    console.log(lItem); // Log Check
}