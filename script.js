
const name = "name";
document.getElementById("name").innerText = name;

const quotes = [
  "You are my today and all of my tomorrows. ❤️",
  "Loving you is like breathing; I can’t stop, and I don’t want to. 💞",
  "Every moment with you is a beautiful memory in the making. 💫",
  "You're not just my love; you're my best friend, my home, my everything. 🏡❤️",
  "Being with you makes my world brighter, my heart lighter, and my soul happier. 🌟"
];

let speed=[5.6,6.8,6,7,7.6,6,5,6.6,8,5]
let rain='';
let number=5;
for(let i=0; i<10; i++){


 let randomSec=Math.random();
let duration=speed[i]

let delay=(Math.floor(randomSec*1)+1)+(Math.floor(randomSec*5));

console.log(duration)
rain+=`

  <div class="raindrop"  style="
   left:${number}%;
            animation-duration:${duration}s;
            animation-delay: 0.${delay};
  ">&#128151</div>`
  number+=10;

}

document.querySelector('.rain-container').innerHTML=rain;


function showSurprise() {
  const surpriseDiv = document.getElementById('surprise');
  surpriseDiv.style.display = 'block';


  document.querySelector('.rain-container').classList.add('displayRain')

}

function showQuote() {
  const quoteBox = document.getElementById('quote-box');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.innerHTML = randomQuote;
  quoteBox.style.display = 'block';
}
