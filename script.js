const textInput = document.getElementById("button-text");
const textButton = document.getElementById("text-button");

textButton.textContent = textInput.value;
textButton.addEventListener("click", () => {
  textButton.textContent = textInput.value;
});

const changeImage = document.getElementById("change-image");
changeImage.setAttribute("src", "assets/sunset.svg");

const imageLink = document.getElementById("image-link");
imageLink.setAttribute("href", "https://developer.mozilla.org/uk/");

const linkedImage = document.getElementById("linked-image");
linkedImage.setAttribute("alt", "Ілюстрація квітки");

const firstListItem = document.querySelector("#demo-list li");
firstListItem.textContent = "Перший елемент змінено за допомогою JavaScript";
