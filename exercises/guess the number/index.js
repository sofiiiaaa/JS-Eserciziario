console.log("hi")
const user_n = document.getElementById("user_n");
const btn = document.getElementById("button");
const res = document.getElementById("result");
const n_tries = document.getElementById("n_tries");
const your_guesses= document.getElementById("your_past_guesses");


let Memory = {
    real_number: Math.round(Math.random()*100),    
    count: 0,
    user_number: []
};

btn.addEventListener("click",(actBtn));

function actBtn (evt) {
    let user_number = parseInt(user_n.value); 
    user_n.value = null;
    
    const otherThings = () => {
        ++Memory.count //il ++ all'inizio per incrementarlo prima di stamparlo!
        n_tries.innerHTML = "your tries number are: " + Memory.count //se no :  n_tries.innerHTML = "your tries number are: " + ++Memory.count
        
        Memory.user_number.push(user_number)
        your_guesses.innerHTML = "your numbers until now are: [" + Memory.user_number.join(", ") + "]"
    };   

    if (user_number === Memory.real_number){    
        res.innerHTML = "yess!! tou found me!!!"       
    }
    else if (user_number > Memory.real_number){ 
        res.innerHTML = "no! I'm smaller!!";
        otherThings()
    }
    else if (user_number < Memory.real_number){ 
        res.innerHTML = "no! I'm bigger!!";
        otherThings()
    };

    

};

