let apiKey = "bd79a15c2a342cca97d93cf758dc45ad";
let url =  
"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  let searchbar=document.querySelector(".searchbar input")
  let btn= document.querySelector(".searchbar button")
  let weathericon=document.querySelector(".weather-icon")
  let box= document.querySelector(".weatherimages")
async function checkweather(city) {
    let response= await fetch(url+city+`&appid=${apiKey}`);
    let data= await response.json();
    if(response.status==404){
      document.querySelector(".errormessage").style.display="block";
     
    }
    else{
      document.querySelector(".errormessage").style.display="none";
      
    }
    console.log(data);
  let cityname = document.querySelector("#cityname").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
     document.querySelector("#humiditypercentage").innerHTML= data.main.humidity+"%";
      document.querySelector("#windpercentage").innerHTML= data.wind.speed+"km/h";
      document.querySelector("#weathercondition").innerHTML= data.weather[0].main;
    if(data.weather[0].main=="Clouds"){
        weathericon.src="./Clouds.png"
    }
    else if (data.weather[0].main=="Clear"){
         weathericon.src="./sun.png"
    }
     else if (data.weather[0].main=="Rain"){
         weathericon.src="./heavy-rain.png"
    }
     else if (data.weather[0].main=="Drizzle"){
         weathericon.src="./drizzle.png"
    }
     else if (data.weather[0].main=="Mist"){
         weathericon.src="./mist.png" 
    }

      
  
}
btn.addEventListener("click",()=>{
 checkweather(searchbar.value)
})
const input = document.getElementById("searchinp");
  const button = document.getElementById("scanbutton");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      button.click(); 
    }
  });

