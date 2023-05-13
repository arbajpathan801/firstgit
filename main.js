const myform=document.querySelector("#my-form")
const nameInput=document.querySelector("#name")
const emailInput=document.querySelector("#email")
const msg=document.querySelector(".msg")
const userList=document.querySelector("#Users")

// add event listener
myform.addEventListener('submit',onsubmit)
let x=1;

function onsubmit(e){
    e.preventDefault();
    if (nameInput.value==='' || emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML='Please inter all fields'
        setTimeout(()=> msg.remove(),3000)
    }
    else {
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`))
        userList.appendChild(li)
        // Reset name and email
        setTimeout(()=>  (nameInput.value='',
        emailInput.value=''),1000);
        localStorage.removeItem('UserList')
       localStorage.setItem(x,`${nameInput.value}:${emailInput.value}`)
       x=x+1
      
    }
}

