//https://uselessfacts.jsph.pl 
const factText = document.getElementById("fact-text");
const newFactBtn = document.getElementById("new-fact-btn");
const todayFactBtn = document.getElementById("today-fact-btn");

async function getFact(type) {
  try {
    factText.textContent = "Chargement...";

    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/"+type);
    if (!response.ok) throw new Error("Erreur API");

    const data = await response.json();
    console.log(response)
    factText.textContent = data.text;
  } catch (error) {
    factText.textContent = "Impossible de récupérer la fun fact. 😢";
    console.error(error);
  }
}

async function getTodayFact(){
    getFact('today');
}
async function getRandomFact(){
    getFact('random');
}

getTodayFact();

newFactBtn.addEventListener("click", getRandomFact);
todayFactBtn.addEventListener("click", getTodayFact);
