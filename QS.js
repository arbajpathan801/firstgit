const item2=document.querySelector('.list-group-item:nth-child(2)');
item2.style.backgroundColor="green";
const item3=document.querySelector('.list-group-item:nth-child(3)')
item3.textContent="invisible";
const items=document.querySelectorAll('.list-group-item')
console.log (items)
items[1].style.color="green"
let odd=document.querySelectorAll('.list-group-item:nth-child(odd)')
for (let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
    console.log (odd[i])
}