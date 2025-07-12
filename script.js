let selectedMood = null;

const moodQuotes = {
  happy: "Happiness is not something ready-made. It comes from your own actions.",
  sad: "It's okay to feel sad sometimes. Better days are coming.",
  angry: "Breathe in calm, breathe out tension.",
  tired: "Rest is productive too. Take care of yourself.",
  love: "Love yourself first and everything else falls into line."
};

function selectMood(mood) {
  selectedMood = mood;
  alert(`You selected: ${mood.toUpperCase()}`);
}

function saveEntry() {
  const journal = document.getElementById("journal").value.trim();
  if (!selectedMood || !journal) {
    alert("Please select a mood and write your thoughts.");
    return;
  }

  const today = new Date().toLocaleDateString();
  const entry = {
    date: today,
    mood: selectedMood,
    note: journal
  };

  const entries = JSON.parse(localStorage.getItem("mindfulEntries")) || [];
  entries.push(entry);
  localStorage.setItem("mindfulEntries", JSON.stringify(entries));

  document.getElementById("quote-box").innerText = `"${moodQuotes[selectedMood]}"`;
  document.getElementById("journal").value = "";
  selectedMood = null;
}
