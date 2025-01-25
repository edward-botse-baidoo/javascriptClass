const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const fileNames = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];


/* Declaring the alternative text for each image file */

const altText = {
    'pic1.jpg' : 'Close up picture of a human eye.',
    'pic2.jpg' : 'Seashell pattern',
    'pic3.jpg' : 'Close up picture of white, purple, and green flowers.',
    'pic4.jpg' : 'Ancient egyptian ruins/wall drawings.',
    'pic5.jpg' : 'Close up picture of a Monarch Butterfly'

}

/* Looping through images */

for (const file of fileNames) {

const newImage = document.createElement('img');
newImage.setAttribute('src', `./images/${file}`);
newImage.setAttribute('alt', altText.file);
thumbBar.appendChild(newImage);

newImage.addEventListener('click', (event) => {
    srcName = event.target.getAttribute('src');
    displayedImage.setAttribute('src', `${srcName}`);
    displayedImage.setAttribute('alt', altText.srcName);
});

}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', (event) => {
    const currentClassName = event.target.getAttribute('class'); 

    if (currentClassName == 'dark') {
        event.target.setAttribute('class', 'light');
        event.target.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        event.target.setAttribute('class', 'dark');
        event.target.textContent = 'Darken';
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});