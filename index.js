const h2 = document.createElement("h2");
h2.textContent = "Lead generating website design";
document.querySelector("body").appendChild(h2);
function addingEventListner()
{
const input=document.getElementById('button');
function clickAlert()
{
    alert('clicked');
}
input.addEventListener('click',clickAlert);
}

