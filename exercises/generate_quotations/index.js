const button = document.getElementById("btn");
const quotation = document.getElementById("api-quotation");
let url = "https://type.fit/api/quotes";



// function getData () {
//   axios.get(url)
//   .then((raw) => raw.data[0].quote_body)         
//   .then ((newData)=> {quotation.innerHTML = "here's your quotation: <br> <br>" + newData})                               
//   .then(() => quotation.style.border = "green solid")
//   .catch ((err) =>alert (err))                
//   }
            
// button.addEventListener ("click", getData) 
 
function getData(){
  console.log('here')
  axios.get(url)  
  .then ((raw)=> raw.data)
  .then ((data)=> {
       let newQuotation = Math.floor((Math.random()*1000)+600);
       return data[newQuotation]       
  })
  .then ((result)=> quotation.innerHTML= "here's your quotation of the day: <br>" + result.text + "<br> <br> cit- by: <br>" + result.author)
  .then (()=> quotation.style.border= "green solid")
  .catch((err)=> alert(err))
}

button.addEventListener("click", getData)

