const button = document.getElementById("btn");
const quotation = document.getElementById("api-quotation");
let url = "https://www.quotepub.com/api/widget/?type=rand";



function getData () {
  axios.get(url)
  .then((raw) => raw.data[0].quote_body)         
  .then ((newData)=> {quotation.innerHTML = "here's your quotation: <br> <br>" + newData})                               
  .then(() => quotation.style.border = "green solid")
  .catch ((err) =>alert (err))                
  }
            
button.addEventListener ("click", getData) 
 

