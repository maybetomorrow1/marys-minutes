var list = document.createElement('ul');
var info = document.createElement('p');
var html = document.querySelector('html');

info.textContent = 'Daily To Do List (Click anywhere to add to the list)';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
    var listItem = document.createElement('li');
    var listContent = prompt('What shall we add?');
    listItem.textContent = listContent;
    list.appendChild(listItem);
    
    listItem.onclick = function(e) {
        e.stopPropagation();
        var listContent = prompt('What shall we update this item to?');
        this.textContent = listContent;
    }
}

/* var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Hey there! /nPlease enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome ' + myName + '! Where the head goes, the body follows. Perception preceded action. Right action follows the right perspective.';
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome ' + storedName + '! Where the head goes, the body follows. Perception precedes action. Right action follows the right perspective.';
}
myButton.onclick = function() {
    setUserName();
} */