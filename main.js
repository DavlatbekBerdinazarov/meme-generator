const Btn = document.querySelector('#btn');
const memeTitle = document.querySelector('#meme-title');
const memeImg = document.querySelector('#memeImg');
const memeAuth = document.querySelector('#memeAuth');

const updateDetails = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuth.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
    console.log("Generating...");
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

Btn.addEventListener('click', generateMeme);

generateMeme();