//notify section
function hideNotify() {
    document.getElementById("match").style.display="none";
    document.getElementById("not-match").style.display="none";
}

hideNotify();

//generate section
function printGenerate(num) {
    document.getElementById("generated-pin").value=num;
}
document.getElementById("generate-pin-btn").addEventListener("click",function() {
        var random=Math.floor(1000 + Math.random() * 9000); //creating 4-digit random number
        printGenerate(random);
        hideNotify("")
        printInput("");
    })
    

//Input section
function printInput(num) {
    document.getElementById("input-display").value=num;
}
function getInput() {
    return document.getElementById("input-display").value;
}

var keypad=document.getElementsByClassName("button");
for(var i=0;i<=keypad.length; i++){
keypad[i].addEventListener("click",function() {
    if(this.id=="clear"){
        printInput("");
    }
    else if(this.id=="backspace"){
        var output=getInput();
        if (output!="") {
            output=output.substr(0,output.length-1);
            printInput(output);
        }
    }
    else{
        var output=getInput()
        output=output+this.innerText;
        printInput(output)
    }
    hideNotify();
})
}

function getGeneratedPin(num) {
    return document.getElementById("generated-pin").value;
}

function verifyPin() {
    var inputPin=getInput();
    var generatedPin=getGeneratedPin();
    if (inputPin==generatedPin) {
        document.getElementById("match").style.display="block";   
    }
    else{
        document.getElementById("not-match").style.display="block";
    }

}
