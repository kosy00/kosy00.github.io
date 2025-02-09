const quotes = [
{
    quotes: "The worst thing you can do for those you love is the things they could and should do themselves.",
    author: "Abraham Lincoln",
},
{
    quote: "People find life entirely too time-consuming.",
    author: "Stanislaw J. Lec",
},
{
    quote: "Courage and perseverance have a magical talisman, before which difficulties disappear and obstacles vanish into air",
    author: "John Quincy Adams",
},
{
    quote: "I'd rather be hated for who I am than be loved for who I'm not.",
    author: "Kurt Cobain",
},
{
    quote: "Challenges are gifts that force us to search for a new center of gravity. Don't fight them. Just find a different way to stand.",
    author: "Oprah Winfrey",
},
 {
    quote: "Never leave that 'till tomorrow which you can do today.",
    author: "Benjamin Franklin",
},
{
    quote: "Rather be dead than cool.",
    author: "Kurt Cobain",
},
{
    quote: "Blaze with the fire that is never extinguished.Luisa Sigea",
    author: "Luisa Sigea",
},
{
    quote: "The greatest risk is the risk of riskless living.",
    author: "Stephen Covey",
},
{
    quote: "What you risk reveals what you value.",
    author: "Jeanette Winterson",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 

const todaysQuoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuoute.quote;
author.innerText = todaysQuoute.author;
