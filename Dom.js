const itemList=document.querySelector("#items");
 console.log(itemList.parentElement);
 console.log(itemList.lastElementChild.textContent="hello 4")
 console.log (itemList.lastChild)
console.log (itemList.firstElementChild)
console.log (itemList.firstChild)
console.log (itemList.nextSibling)
console.log (itemList.nextElementSibling)
console.log (itemList.previousSibling)
console.log (itemList.previousElementSibling)
const newDiv=document.createElement('div')
newDiv.className="Hello";
newDiv.id="HEllo1"
newDiv.setAttribute('title','Hello Div')
const newDivText=document.createTextNode('HEllo World')
newDiv.appendChild(newDivText)
console.log (newDiv)
const container=document.querySelector("header .container")
const h1=document.querySelector("header h1")

newDiv.style.fonrSize="30px"
container.insertBefore(newDiv,h1)

const parentnode=document.getElementById('items')
const newLi=document.createElement('li')
const text=document.createTextNode("hEllo world")
newLi.appendChild(text)
console.log(newLi)

parentnode.innerHTML=newLi+parentnode.innerHTML