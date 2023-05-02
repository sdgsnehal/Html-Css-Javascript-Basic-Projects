const inputEl = document.getElementById("input");
const infotext = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");
async function fetchAPI(word) {
  try {
    infotext.style.display = "block";

    infotext.innerText = `Searchig the meaning of "${word}"`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    console.log(result);
    if (result.title) {
      infotext.style.display = "none";
      meaningContainerEl.style.display = "block";
      titleEl.innerText = word;
      meaningEl.innerText = "No meaning found";
      audioEl.style.display = "none";
    } else {
      infotext.style.display = "none";
      audioEl.style.display = "inline-flex";
      meaningContainerEl.style.display = "block";
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    infotext.innerText = `an error happened try again later`;
  }
}
inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
