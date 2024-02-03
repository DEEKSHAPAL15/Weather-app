let quote = document.querySelector("#quote");
let form = document.querySelector("form");
let input = document.querySelector("input");
let temp = document.querySelector(".display-1");
let city = document.querySelector(".display-2");
let icon = document.querySelector("img");
let p = document.querySelector("p");
let card = document.querySelector("#weather-card");

async function fetchQuote() {
  const response = await fetch("https://quotable.io/random");
  const data = await response.json();
  quote.innerText = data.content + " - " + data.author;
}

setInterval(() => {
  fetchQuote();
}, 10000);

// Fetch Weather

const fetchFeather = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=6dc9515ca8b94bf2873115348241101 &q=indore&aqi=yes`
    );
    const data = await response.json();

    temp.innerText = data.current.temp_c;
    city.innerText = data.location.name;
    icon.setAttribute("src", data.current.condition.icon);
    p.innerText = data.current.condition.text;
    card.className = "card rounded-0 p-3 shadow";
  } catch (error) {
    window.alert("Please Enter Valid City Name");
  }

  form.reset();
  fetchQuote();
};

form.addEventListener("submit", fetchFeather);



