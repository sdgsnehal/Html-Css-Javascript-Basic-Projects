const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiURL ="https://api.quotable.io/random"
async function getQuote(){
    try {
        btnEl.innerText="Loading...";
        btnEl.disabled=true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "";
        const response=await fetch(apiURL)
    const data =await response.json()
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText =  "~"+ quoteAuthor;
    btnEl.innerText="Get a Quote";
    btnEl.disabled=false;
    console.log(data)
    } catch (error) {
        quoteEl.innerText = "Oops! Something went wrong";
        authorEl.innerText = "";
    }


    

}
getQuote();
btnEl.addEventListener("click",getQuote)