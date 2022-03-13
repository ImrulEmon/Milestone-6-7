function kanye(){
    fetch('https://api.kanye.rest')
    .then(res=>res.json())
    .then(quote=>displayQuote(quote));
}

function displayQuote(quote){
   const quotex = document.getElementById("quote");
   quotex.innerText=quote.quote;

}

