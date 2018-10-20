var displayElement;

window.onload = function(){
    displayElement = document.getElementById('display');
    let numbers = document.getElementsByClassName('number'); 
    document.getElementById('clearbtn').onclick = function(){
        displayElement.innerHTML = "0";
    };

    document.getElementById('backbtn').onclick = function(){
        displayElement.innerHTML = displayElement.innerHTML.substring(0, displayElement.innerHTML.length - 1);
        if(displayElement.innerHTML.length === 0){
            displayElement.innerHTML = '0';
        }
    };

    document.getElementById('equalbtn').onclick = function(){
        displayElement.innerHTML = eval(displayElement.innerHTML);
    };

    for(let element of numbers){
        element.onclick = function() {
            if(displayElement.innerHTML === '0'){
                displayElement.innerHTML = "";
            }
            displayElement.innerHTML = displayElement.innerHTML + element.innerHTML;

        };
    }


};