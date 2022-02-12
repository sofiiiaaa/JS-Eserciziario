const c = console.log
const number_Word = document.getElementById("number_Word");
const number_Char = document.getElementById("number_Char");

const theInsertion= document.getElementById("main");



theInsertion.addEventListener('input', (event) => {
     const myString = (event.target.value);
     number_Char.innerHTML = String(myString.length)
     number_Word.innerHTML = String(myString.split(" ").length)

})

    
    