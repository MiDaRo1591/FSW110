    var oMain = document.getElementById('main');
        var oPictures = // List out Items
        [
            {
            name: "Bagle",
            src: "https://images.unsplash.com/photo-1558745010-d2a3c21762ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            price: "3"
            },
            {
            name: "Tea",
            src: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
            price: "7"
            },
            {
            name: "Coffee",
            src: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
            price: "11"
            },
        ];

        for(let i = 0; i < oPictures.length; i++) // For each item make a division
        {
            var div = document.createElement("div"); // Var to make

        div.innerHTML = // Division layout
        `
        <div class = 'display' style = 'width: 18ren;'>
            <img src = '${oPictures[i].src}' 
             class = 'display' 
             alt = 'Broken Image'>
            <h1 class = 'display'>
                ${oPictures[i].name}
                $${oPictures[i].price}</h1>
            
            <input id = 'value${i}' value = 0 type = 'number'>
            <button class = 'display' id = 'Subtotal${i}'>Submit</button>
        </div>
        <p></p>
        `;
        oMain.appendChild(div);
        }

        main.addEventListener("click", // Button Prompts
        function (e)
        {
            if(e.target.matches("button"))
            {
                var iTotalPrice = 0; // Initiate Variable
                var sDisplay = document.getElementById('grandTotal');

                for(let i = 0; i < oPictures.length; i++) // Loop all prices
                {
                    var iReset = document.getElementById('value'+i).value; // Get the Value of the Items
                    var iTotal = parseInt(iReset); // Convert to Int

                    var iCost = parseInt(oPictures[i].price); // Cost of the item
                    iTotal *= iCost; // Multiply the Cost by the amount

                    iTotalPrice += iTotal; // Total the Values
                    console.log(iTotalPrice); // Console Display
                    sDisplay.textContent = 'Your total is $'+iTotalPrice+'.'; // Alter Displayed Value
                }
                document.append(sDisplay); // Alter DOM
            }
        });