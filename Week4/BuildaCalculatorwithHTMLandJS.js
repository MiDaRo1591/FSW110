console.log("Test"); // Make sure script is linked.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Functions
function mathMatical(iNum1 = 1, iNum2 = 2, iNum3 = 3)
{
    iNum1 = parseInt(iNum1.textContent); // Change Display 1 Into an intiger
    iNum2 = iNum2.textContent // Get the Computational Sign
    iNum3 = parseInt(iNum3.textContent); // Change Display 3 Into an intiger
    var iReturn = "Null";
    
    if(iNum2 == "Plus")
    {iReturn = iNum1 + iNum3;
    console.log("Rechecking")}

    if(iNum2 == "Minus")
    {iReturn = iNum1 - iNum3;}

    if(iNum2 == "Multiply")
    {iReturn = iNum1 * iNum3;}
    
    if(iNum2 == "Divide")
    {iReturn = iNum1 / iNum3;}
    
    // else{iReturn = "No...";}

    oDisplay4.textContent = iReturn; // Display the Result
}

function doComputation(sSign = "")
{
    oDisplay1.textContent = document.getElementById("pDisplay3").textContent; // Set the top display item to the third.
    oDisplay2.textContent = sSign; // Set the computational sign to the imput.
    oDisplay3.textContent = 0; // Set the third display item to 0.
}

function inputKey(iNum1 = 1)
{
    var iNum2 = oDisplay3.textContent; // Get the current Display.
    var iNew =  iNum2+iNum1 // Add the pressed number to the end of the display.
    oDisplay3.textContent = iNew; // Alter the Display to the new number.
}

function clearDisplay()
{
    oDisplay1.textContent = " "; // Set Display 1 to Nothing
    oDisplay2.textContent = "null"; // Show the Sign as Null
    oDisplay3.textContent = "0"; // Set Display 3 to Nothing
    oDisplay4.textContent = " "; // Set the Result to Nothing
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Abstracted Logic
function handle1Corn() // Blue Event for One Key
{   
    console.log('Enter/Exit 1'); // Report what is Happening
    o1.style.backgroundColor = "cornflowerblue"; // Alter Color to cornflower Blue
}
function handle1White() // White Event for One Key
{   
    console.log('Leave 1'); // Report what is Happening
    o1.style.backgroundColor = "white"; // Alter Color to cornflower Blue
}
function handle1Red() // White Event for One Key
{   
    console.log('Click 1'); // Report what is Happening
    o1.style.backgroundColor = "red"; // Alter Color to cornflower Blue
    inputKey(1); // Function to handle Keystrokes.
}
// 2
function handle2Corn() {console.log('Enter/Exit 2'); o2.style.backgroundColor = "cornflowerblue";}
function handle2White(){console.log('Leave 2');      o2.style.backgroundColor = "white";}
function handle2Red()  {console.log('Click 2');      o2.style.backgroundColor = "red"; inputKey(2);}
//3
function handle3Corn() {console.log('Enter/Exit 3'); o3.style.backgroundColor = "cornflowerblue";}
function handle3White(){console.log('Leave 3');      o3.style.backgroundColor = "white";}
function handle3Red()  {console.log('Click 3');      o3.style.backgroundColor = "red"; inputKey(3);}
//4
function handle4Corn() {console.log('Enter/Exit 4'); o4.style.backgroundColor = "cornflowerblue";}
function handle4White(){console.log('Leave 4');      o4.style.backgroundColor = "white";}
function handle4Red()  {console.log('Click 4');      o4.style.backgroundColor = "red"; inputKey(4);}
//5
function handle5Corn() {console.log('Enter/Exit 5'); o5.style.backgroundColor = "cornflowerblue";}
function handle5White(){console.log('Leave 5');      o5.style.backgroundColor = "white";}
function handle5Red()  {console.log('Click 5');      o5.style.backgroundColor = "red"; inputKey(5);}
//6
function handle6Corn() {console.log('Enter/Exit 6'); o6.style.backgroundColor = "cornflowerblue";}
function handle6White(){console.log('Leave 6');      o6.style.backgroundColor = "white";}
function handle6Red()  {console.log('Click 6');      o6.style.backgroundColor = "red"; inputKey(6);}
//7
function handle7Corn() {console.log('Enter/Exit 7'); o7.style.backgroundColor = "cornflowerblue";}
function handle7White(){console.log('Leave 7');      o7.style.backgroundColor = "white";}
function handle7Red()  {console.log('Click 7');      o7.style.backgroundColor = "red"; inputKey(7);}
//8
function handle8Corn() {console.log('Enter/Exit 8'); o8.style.backgroundColor = "cornflowerblue";}
function handle8White(){console.log('Leave 8');      o8.style.backgroundColor = "white";}
function handle8Red()  {console.log('Click 8');      o8.style.backgroundColor = "red"; inputKey(8);}
//9
function handle9Corn() {console.log('Enter/Exit 9'); o9.style.backgroundColor = "cornflowerblue";}
function handle9White(){console.log('Leave 9');      o9.style.backgroundColor = "white";}
function handle9Red()  {console.log('Click 9');      o9.style.backgroundColor = "red"; inputKey(9);}
//0
function handle0Corn() {console.log('Enter/Exit 0'); o0.style.backgroundColor = "cornflowerblue";}
function handle0White(){console.log('Leave 0');      o0.style.backgroundColor = "white";}
function handle0Red()  {console.log('Click 0');      o0.style.backgroundColor = "red"; inputKey(0);}
//Add
function handleACorn() {console.log('Enter/Exit A'); oA.style.backgroundColor = "cornflowerblue";}
function handleAWhite(){console.log('Leave A');      oA.style.backgroundColor = "white";}
function handleARed()  {console.log('Click A');      oA.style.backgroundColor = "red"; doComputation("Plus")}
//Subtract
function handleSCorn() {console.log('Enter/Exit S'); oS.style.backgroundColor = "cornflowerblue";}
function handleSWhite(){console.log('Leave S');      oS.style.backgroundColor = "white";}
function handleSRed()  {console.log('Click S');      oS.style.backgroundColor = "red"; doComputation("Minus")}
//Multiply
function handleMCorn() {console.log('Enter/Exit M'); oM.style.backgroundColor = "cornflowerblue";}
function handleMWhite(){console.log('Leave M');      oM.style.backgroundColor = "white";}
function handleMRed()  {console.log('Click M');      oM.style.backgroundColor = "red"; doComputation("Multiply")}
//Divide 
function handleDCorn() {console.log('Enter/Exit D'); oD.style.backgroundColor = "cornflowerblue";}
function handleDWhite(){console.log('Leave D');      oD.style.backgroundColor = "white";}
function handleDRed()  {console.log('Click D');      oD.style.backgroundColor = "red"; doComputation("Divide")}
//Equles
function handleECorn() {console.log('Enter/Exit E'); oE.style.backgroundColor = "cornflowerblue";}
function handleEWhite(){console.log('Leave E');      oE.style.backgroundColor = "white";}
function handleERed()  {console.log('Click E');      oE.style.backgroundColor = "red"; mathMatical(oDisplay1, oDisplay2, oDisplay3);}
//Clear
function handleCCorn() {console.log('Enter/Exit C'); oC.style.backgroundColor = "cornflowerblue";}
function handleCWhite(){console.log('Leave C');      oC.style.backgroundColor = "white";}
function handleCRed()  {console.log('Click C');      oC.style.backgroundColor = "red"; clearDisplay();}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Variable and Constant List.

const o1 = document.getElementById("p1"); // Set the Variable for the Keys
const o2 = document.getElementById("p2");
const o3 = document.getElementById("p3");
const o4 = document.getElementById("p4");
const o5 = document.getElementById("p5");
const o6 = document.getElementById("p6");
const o7 = document.getElementById("p7");
const o8 = document.getElementById("p8");
const o9 = document.getElementById("p9");
const o0 = document.getElementById("p0");
const oA = document.getElementById("pA"); // Add
const oS = document.getElementById("pS"); // Subtract
const oM = document.getElementById("pM"); // Multiply
const oD = document.getElementById("pD"); // Divide
const oE = document.getElementById("pE"); // Equales
const oC = document.getElementById("pC"); // Clear

var oDisplay1 = document.getElementById("pDisplay1"); // Set the Variable for the Dispalay 1
var oDisplay2 = document.getElementById("pDisplay2"); // Set the Variable for the Dispalay Sign
var oDisplay3 = document.getElementById("pDisplay3"); // Set the Variable for the Dispalay 2
var oDisplay4 = document.getElementById("pDisplay4"); // Set the Variable for the Dispalay Results

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Invoking Listeners.
o1.addEventListener("mouseenter", handle1Corn); // Cornflower Blue on mouse Over.
o1.addEventListener("mouseleave", handle1White);// White Blue on mouse Off.
o1.addEventListener("mousedown",  handle1Red);  // Red Blue on mouse Press.
o1.addEventListener("mouseup",    handle1Corn); // Cornflower Blue on mouse Release.
// 2
o2.addEventListener("mouseenter", handle2Corn);
o2.addEventListener("mouseleave", handle2White);
o2.addEventListener("mousedown",  handle2Red);
o2.addEventListener("mouseup",    handle2Corn);
// 3
o3.addEventListener("mouseenter", handle3Corn);
o3.addEventListener("mouseleave", handle3White);
o3.addEventListener("mousedown",  handle3Red);
o3.addEventListener("mouseup",    handle3Corn);
// 4
o4.addEventListener("mouseenter", handle4Corn);
o4.addEventListener("mouseleave", handle4White);
o4.addEventListener("mousedown",  handle4Red);
o4.addEventListener("mouseup",    handle4Corn);
// 5
o5.addEventListener("mouseenter", handle5Corn);
o5.addEventListener("mouseleave", handle5White);
o5.addEventListener("mousedown",  handle5Red);
o5.addEventListener("mouseup",    handle5Corn);
// 6
o6.addEventListener("mouseenter", handle6Corn);
o6.addEventListener("mouseleave", handle6White);
o6.addEventListener("mousedown",  handle6Red);
o6.addEventListener("mouseup",    handle6Corn);
// 7
o7.addEventListener("mouseenter", handle7Corn);
o7.addEventListener("mouseleave", handle7White);
o7.addEventListener("mousedown",  handle7Red);
o7.addEventListener("mouseup",    handle7Corn);
// 8
o8.addEventListener("mouseenter", handle8Corn);
o8.addEventListener("mouseleave", handle8White);
o8.addEventListener("mousedown",  handle8Red);
o8.addEventListener("mouseup",    handle8Corn);
// 9
o9.addEventListener("mouseenter", handle9Corn);
o9.addEventListener("mouseleave", handle9White);
o9.addEventListener("mousedown",  handle9Red);
o9.addEventListener("mouseup",    handle9Corn);
// 0
o0.addEventListener("mouseenter", handle0Corn);
o0.addEventListener("mouseleave", handle0White);
o0.addEventListener("mousedown",  handle0Red);
o0.addEventListener("mouseup",    handle0Corn);
// Add
oA.addEventListener("mouseenter", handleACorn);
oA.addEventListener("mouseleave", handleAWhite);
oA.addEventListener("mousedown",  handleARed);
oA.addEventListener("mouseup",    handleACorn);
// Subtract
oS.addEventListener("mouseenter", handleSCorn);
oS.addEventListener("mouseleave", handleSWhite);
oS.addEventListener("mousedown",  handleSRed);
oS.addEventListener("mouseup",    handleSCorn);
// Multiply
oM.addEventListener("mouseenter", handleMCorn);
oM.addEventListener("mouseleave", handleMWhite);
oM.addEventListener("mousedown",  handleMRed);
oM.addEventListener("mouseup",    handleMCorn);
// Divide
oD.addEventListener("mouseenter", handleDCorn);
oD.addEventListener("mouseleave", handleDWhite);
oD.addEventListener("mousedown",  handleDRed);
oD.addEventListener("mouseup",    handleDCorn);
// Equales
oE.addEventListener("mouseenter", handleECorn);
oE.addEventListener("mouseleave", handleEWhite);
oE.addEventListener("mousedown",  handleERed);
oE.addEventListener("mouseup",    handleECorn);
// Clear
oC.addEventListener("mouseenter", handleCCorn);
oC.addEventListener("mouseleave", handleCWhite);
oC.addEventListener("mousedown",  handleCRed);
oC.addEventListener("mouseup",    handleCCorn);