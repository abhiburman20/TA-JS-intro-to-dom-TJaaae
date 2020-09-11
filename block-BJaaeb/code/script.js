/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
function createInputElm(label, type = "text") {
	var labelElement = document.createElement("label");
	var input = document.createElement("input");
	labelElement.textContent = label + ":";
	input.type = type;
	labelElement.appendChild(input);
	return labelElement;
}
// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
function createInputElm(label, type = "text") {
	var labelElement = document.createElement("label");
	labelElement.innerHTML = `${label}: <input type=${type}>`;
	return labelElement;
}
// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(arr) {
	var ul = document.createElement("ul");
	var arrOfList = arr.map((allElement) => `<li>${allElement}</li>`).join(" ");
	ul.innerHTML = arrOfList;
	return ul;
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(arr) {
	var ul = document.createElement("ul");
	var todoArr = arr.map((e) => {
    return `<li>
              <p>${e.name}</p>
              <input type="checkbox" ${e.isDone ? "checked" : ""} name="" id="">
              <span>X</sapn>
            </li>`;
		}).join(" ");
	ul.innerHTML = todoArr;
	return ul;
}
// TEST
let todos = createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
