window.onload = function(){


const addButton = document.getElementById('add-button');
const addInput = document.getElementById('add-input');
const listHead = document.getElementById('list');

const addItem = (e) =>{
	let inputVal = addInput.value;
	if(!inputVal){
		return;
	}
const finishTask = (e) =>{
	console.dir(e.target.checked);

	if(e.target.checked){
		e.target.setAttribute('class','strike');
	}else{
		e.target.removeAttribute('class');
	}

}

	const template = document.getElementById('template');
	const clone = document.importNode(template.content,true);
	clone.querySelector('span').textContent =  inputVal;
	clone.querySelector('input').addEventListener("click",finishTask);
	listHead.appendChild(clone);
	addInput.value = '';

};

addButton.addEventListener('click',addItem);



}