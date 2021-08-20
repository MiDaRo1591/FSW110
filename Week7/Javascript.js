// Javascript Go's Here
var sName = document.getElementById("LiveName");
var sComment = document.getElementById("LiveComment");
var iIdAdd = 0;
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
function fDelete(target)
{
    console.log(target.id);
    var sString = target.id.split("Button_")
    var id = sString[1];


    console.log(sString[1]);
    
    var eDiv = document.getElementById("Note_"+id);
    var eButton = document.getElementById("Content_"+id);
    var eH5 = document.getElementById("Button_"+id);
    console.log(eDiv);
    eDiv.remove();
    eButton.remove();
    eH5.remove();
    
    console.log("Delete Button Pressed")
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
function fSubmit()
{
    console.log("Log "+sName.value);
    console.log("Log "+sComment.value);
    
    if(sName.value !== "" && sComment.value !== "")
    {
    var eDiv = document.createElement("div");
    var eButton = document.createElement("button");
    var eH5 = document.createElement("h5");

    eDiv.id = "Note_"+iIdAdd;
    eDiv.style = 'height:300px;width:190px;float:left;border-style:solid;border-color:black;border-width:2px;padding:5px;margin:5px;background-image:url("https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80");'
    
    eButton.id = "Button_"+iIdAdd;
    eButton.textContent = "Delete";
    // eButton.onclick = "fDelete("+iIdAdd+")";
    eButton.addEventListener("click", (e) =>{
    
        fDelete(e.target)
    });

    eH5.textContent = sName.value+" Says : "+sComment.value;
    eH5.id = "Content_"+iIdAdd;
    eH5.style.width = "100%";
    eH5.style.wordWrap = "break-word"

    eDiv.appendChild(eH5);
    eDiv.appendChild(eButton);
    document.getElementById("Comments").appendChild(eDiv);
    iIdAdd ++;
    }
    else{alert("Add Name and Comment.")}
}