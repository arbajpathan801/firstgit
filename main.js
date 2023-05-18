const myform = document.querySelector("#my-form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msg = document.querySelector(".msg")
const List = document.querySelector("#Users")


// add event listener
myform.addEventListener('submit', onsubmit)


function onsubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please inter all fields'
        setTimeout(() => msg.remove(), 3000)

    }
    else {

        const dltbtn = document.createElement('button')
        dltbtn.appendChild(document.createTextNode("Delete"))
        dltbtn.value = "Delete"
         const editbtn=document.createElement('button')
         editbtn.appendChild(document.createTextNode("Edit"))
        const li = document.createElement("li");

        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        li.appendChild(dltbtn)
         li.appendChild(editbtn)
        List.appendChild(li)
         editbtn.addEventListener('click' , onpress)
        dltbtn.addEventListener('click', onclick)
        let obj = {
            name: nameInput.value,
            email: emailInput.value
        };
        let myobj = JSON.stringify(obj)
        localStorage.setItem(nameInput.value, myobj);
        const dlt=nameInput.value;
        const back=emailInput.value;
        setTimeout(() => (nameInput.value='',
        emailInput.value=''),300 )
        
        function onclick(e) {

   
            var li = e.target.parentElement;
            List.removeChild(li);
            
            localStorage.removeItem(dlt)
        }
        function onpress(e) {

   
            var li = e.target.parentElement;
            List.removeChild(li);
            emailInput.value=back
            nameInput.value=dlt
            localStorage.removeItem(dlt)
        }

        }
   
}
 


