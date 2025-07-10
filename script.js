const quotes = [
  {
    text: "Believe in yourself and all that you are.",
    author: "Christian D. Larson"
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Keep going. Everything you need will come to you.",
    author: "Unknown"
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis"
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery"
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis"
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Your limitation—it’s only your imagination.",
    author: "Unknown"
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Ginni Rometty"
  },
  {
    text: "Dream it. Wish it. Do it.",
    author: "Unknown"
  },
  {
    text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    author: "Unknown"
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem"
  },
  {
    text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James"
  }
];


const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const tweetBtn = document.getElementById("tweetBtn");
const quoteBox = document.getElementById("quoteBox");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  setTimeout(() => {
    quoteText.innerText = `"${quote.text}"`;
    quoteAuthor.innerText = `— ${quote.author}`;
    quoteBox.style.opacity = 1;
    const tweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" — ${quote.author}`)}`;
    tweetBtn.setAttribute("href", tweetLink);
  }, 300);
}

newQuoteBtn.addEventListener("click", getRandomQuote);
