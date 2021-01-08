var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");	
	li.appendChild(document.createTextNode(input.value));
	
	//add button to li element
	var button  = createButtonElement();
	li.appendChild(button);

	ul.appendChild(li);
	li.addEventListener("click", addClassAfterClick)
	input.value = "";
}

function createButtonElement() {
	var b = document.createElement('button');
	b.appendChild(document.createTextNode('Done!'));
	b.addEventListener('click', deleteListItem)

	return b;
}

function deleteListItem(e) {
	ul.removeChild(e.target.parentElement);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addClickEventToExistingList(){ 
	ul.childNodes.forEach (function(el){
		el.addEventListener("click", addClassAfterClick);
	}			);
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addClassAfterClick(e) {		
	addClass(e.target, 'done');
}

function addClass(el, className) {
	el.classList.add(className);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

addClickEventToExistingList();