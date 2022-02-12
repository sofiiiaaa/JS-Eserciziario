const user_n = document.getElementById("start_number");
const increased_number = document.getElementById("increase_n");
const resected_number = document.getElementById("reset_n");
const decreased_number = document.getElementById("decrease_n");
const final_number = document.getElementById("new_number");
let new_number_of_referement;
// let flag = true;

let new_val= 0;
user_n.addEventListener("input", ()=> new_val= parseInt(user_n.value))


function biggerNumber () {
    final_number.innerHTML = ++new_val; 
};
      

increased_number.addEventListener ("click", biggerNumber)

function formBeginning () {
    user_n.value = null;
    final_number.innerHTML=""
};

resected_number.addEventListener("click", formBeginning)

function smallerNumber () {
     final_number.innerHTML= --new_val;
};


decreased_number.addEventListener("click",smallerNumber)
