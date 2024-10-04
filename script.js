// Global variables
var buttonClick = document.getElementById ("submit");
var container = document.getElementById ("container");

// function
function addToDo(){
    // Button 1
    var containerOne = document.createElement("div");
    containerOne.classList.add("divStyle");

    var input = document.getElementById("input").value;
    var inputPush = document.createElement("p");

    inputPush.innerText = input;

    var done = document.createElement("button");
    done.innerText = "Finished.";  

    var remove = document.createElement("button");
    remove.innerText = "remove";

    if(input === ("")){
        console.log ("blank");
    }
    else{
        console.log(inputPush);
        console.log("Ready");
        container.appendChild(containerOne);

        containerOne.appendChild(inputPush);
        containerOne.appendChild(done);
        containerOne.appendChild(remove);

        done.addEventListener("click", doneFunction);
        remove.addEventListener("click",removeFuntion);
    }
}

function doneFunction(event){
    var finishedTask = event.target.parentElement;
    finishedTask.classList.toggle("finish");
}

function removeFuntion(event){
    var removeTask = event.target.parentElement;
    container.removeChild(removeTask);
}

buttonClick.addEventListener("click", addToDo);