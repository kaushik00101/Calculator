// get input field
let numQuery = document.getElementById("numQuery");

// stores everything user clicks
let expression = "";

// get all buttons
let allButtons = document.querySelectorAll("button");

// loop through each button
allButtons.forEach(function(btn) {

    // when button is clicked
    btn.addEventListener("click", function() {

        //sound
        let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        let osc = audioCtx.createOscillator();
        osc.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);

        // if = is clicked, calculate result
        if (btn.id === "eq") {
            try {
                expression = String(eval(expression));
                numQuery.value = expression;
            } catch (error) {
                numQuery.value = "Error";
                expression = "";
            }
        }

        // if del is clicked, remove last character
        else if (btn.id === "del") {
            expression = expression.slice(0, -1);
            numQuery.value = expression;
        }

        // if number or operator is clicked
        else {
            expression = expression + btn.value;
            numQuery.value = expression;
        }

        

    });
    btn.addEventListener("dblclick", function(){
    if(btn.id == "del"){
        expression = "";
        numQuery.value = expression;
    }
})

});


