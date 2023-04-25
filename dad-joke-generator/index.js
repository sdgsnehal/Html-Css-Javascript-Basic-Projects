const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")
const apikey="uh9tL8lzOtWWS7o3fA+T+g==eR3tj6k6NdA7Tur8";
const options ={
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    }
}
const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getjoke(){
    try {
        jokeEl.innerText="Updating...";
    btnEl.disabled=true;
    btnEl.innerText="Loading..."
    const response= await fetch(apiURL,options)
    const data = await response.json()
    btnEl.disabled=false;
    btnEl.innerText="Tell Me a Joke"
    jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText="An error happend ,try again later";
        btnEl.disabled=false;
    btnEl.innerText="Tell Me a Joke"
    }

    
}
btnEl.addEventListener("click",getjoke);