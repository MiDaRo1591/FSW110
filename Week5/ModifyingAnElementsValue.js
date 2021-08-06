var sText1 = document.getElementById("textInput1");
var sText2 = document.getElementById("textInput2");
var sText3 = document.getElementById("textInput3");
inputElement1.value = "Placeholder 3";
function buttonPressedAlert()
{
    var sText = 'All your text are belong to us! "'
    +sText1.value+" "+sText2.value+" "+sText3.value+'"';
    alert(sText);
    sText1.value = "";
    sText2.value = "";
    sText3.value = "";
}