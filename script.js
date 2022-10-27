const btn = document.getElementById("btn");
const input = document.getElementById("city");
const form = document.getElementById("form");
const div = document.getElementById("weatherResult")


// form.addEventListener("click", async function(e){
//     try{
//     e.preventDefault()
//     //console.log("acaca")
//     const searchTerm =  input.value;
//     //console.log(searchTerm);
//     const config = { params: { q: searchTerm }} ;
//     const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=07096c8c8e490299cc105549c064c4a3`, config);
//     //console.log(res.data);
//     //console.log(res.data.main.temp)
//     document.body.style.flexDirection="column"
//     const div = document.createElement('DIV');
//     div.style.backgroundColor="#fde4cf"
//     div.style.height="100px"
//     div.style.marginTop="5px"
//     div.innerHTML = `Temperature of ${searchTerm} is ${Math.floor(res.data.main.temp-273.15)}°C`
//     console.log(div.innerText)
//     document.body.append(div);
//     input.value = "";
//     }
//     catch(e){
//         console.log("something is wrong",e)
//     }
// })

form.addEventListener("submit",async function(e){
    try{
        
    e.preventDefault()
    const searchTerm = form.elements.query.value;
    if(searchTerm.length!==0){
    console.log(searchTerm);
    const config = { params:{ q:searchTerm,appid:'07096c8c8e490299cc105549c064c4a3'} } ;
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather`,config);
    console.log(res.data);
    div.innerHTML = ""
    document.body.style.flexDirection="column"
    div.style.backgroundColor="#fde4cf"
    div.style.minWidth="40%"
    div.style.fontWeight="bold"
    div.style.marginTop="5px"
    div.style.padding="2px"
    div.style.borderRadius="5px"
    div.innerHTML = `The weather in ${searchTerm} is '${res.data.weather[0].main}' currently.The temperature is ${Math.floor(res.data.main.temp-273.15)}°C and the wind speed is ${res.data.wind.speed}m/s.`
    document.body.append(div);
    input.value = ""; 
    }else{
        alert("Location cannot be empty")
    }
    }
    catch(e){
    console.log("something is wrong",e)
    div.innerHTML = ""
    document.body.style.flexDirection="column"
    div.style.backgroundColor="#fde4cf"
    div.style.minWidth="40%"
    div.style.fontWeight="bold"
    div.style.marginTop="5px"
    div.style.padding="2px"
    div.style.borderRadius="5px"
    div.innerHTML=`The current city is not found`;
    document.body.append(div);
    input.value = "";
    }
    
})




