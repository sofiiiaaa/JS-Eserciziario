const button = document.getElementById("btn");
const quotation = document.getElementById("api-quotation");
let url = "http://quotes.stormconsultancy.co.uk/random.json";

function getData () {

  
  axios.get(url)
  .then((raw) => raw.data)
  .then((data)=>data.quote)           
  
  .then ((newData)=> {quotation.innerHTML = "here's your quotation: <br> <br>" + newData})                               
  .then(() => quotation.style.border = "green solid")
  .catch ((err) =>alert (err))                
  
            }
            
button.addEventListener ("click", getData) 
 




