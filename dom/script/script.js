console.log('i am working');
const input1 = document.getElementById("1");
const input2 = document.getElementById("2");
const button = document.getElementById("button");
const resultdiv = document.querySelector(".result");

console.log(input1, input2, button);

button.addEventListener('click', ()=> {
    const val1 = input1.value;
    const val2 = input2.value;
    resultdiv.innerHTML = (parseInt(val1) + parseInt(val2))
})
// showModal.addEventListener('click', ()=> {
//     modal.classList.toggle("display_block");
// })

function showModal(){
    const modal = document.querySelector(".dimmer");
    modal.classList.toggle("display_block");
}


