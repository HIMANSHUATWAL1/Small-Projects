const apiUrl = 'https://dummyjson.com/quotes';

async function getQuote() {
    const res = await fetch(apiUrl);
    let data = await res.json();
    return data;

}

const button = document.getElementById("new-quote");
const button2 = document.getElementById("tweet");
const quoteEle = document.getElementById("quote")
const authorEle = document.getElementById("author")

button.addEventListener("click", async () => {
    let res = await getQuote();

    let random = Math.floor(Math.random() * res.quotes.length);

    const { quote, author } = res.quotes[random];
    console.log(quote, author);

    quoteEle.innerHTML = quote;
    authorEle.innerHTML = author;
});

button2.addEventListener('click', tweet);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quoteEle.innerHTML + "-----by" + authorEle.innerHTML, "Tweet window", "width=600,height=300");

}