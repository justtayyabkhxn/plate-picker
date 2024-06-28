
let firstName = '';
let lastName = '';
let gender = '';
let age = '';

const snacks = ["Burger(Burger Company)", "Veg-Sandwich(Coffea)", "Chicken-Popcorn(Juice Time)", "Desi Tadka Chowmeen(Finch)", "White Sauce Pasta(Burger Company)", "White Sauce Pasta(Finch)", "Shawarma(Turkish)", "Maggie(Juice Time)", "Pizza(Finch)", "Dosa", "Tikki", "PaniPuri", "Momos", "Korean", "Wrap(Juice Time)"];
const maincourse = ["Chicken Jahangiri", "Malai Tikka", "Kebab", "Nahari", "Biryani", "Butter Chicken", "Al Kabeer Special", "Fried Chicken", "Kadhai Chicken"];
const drinks = ["Cold Coffee(Coffea)", "Cold Coffee(Finch)", "Fresh Juice", "Oreo Shake", "Lassi", "Water", "Cold drink", "Mojito", "Ice Tea(Finch)", "Ice Tea(Coffea)"];

function storeUserDetails(event) {
    event.preventDefault();
    firstName = document.querySelector('input[name="firstname"]').value;
    lastName = document.querySelector('input[name="lastname"]').value;
    gender = document.querySelector('select[name="gender"]').value;
    age = document.querySelector('input[name="age"]').value;
    scrollToGeneratorBox();
    displayUserDetails();
}

function scrollToGeneratorBox() {
    const generatorBox = document.getElementById('generatorBox');
    generatorBox.scrollIntoView({ behavior: 'smooth' });
}

function generateRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function displayUserDetails() {
    const userDetailsSpan = document.querySelector('.userdetails span');
    let pre="";
    if(gender=="Male" || gender =="male") pre="Mr";
    else if(gender=="Female" || gender =="female") pre="Miss";
    else pre="(Non-Gendered)";
    userDetailsSpan.innerText = `Hello ${pre} ${firstName} ${lastName} you could'nt learn how to decide what to eat in ${age} years?
     No issues the bot is here 🤡`; 
}
document.querySelector('.button1').addEventListener('click', () => {
    document.querySelector('.item1 .answer').innerText = generateRandomItem(snacks);
});

document.querySelector('.button2').addEventListener('click', () => {
    document.querySelector('.item2 .answer').innerText = generateRandomItem(maincourse);
});

document.querySelector('.button3').addEventListener('click', () => {
    document.querySelector('.item3 .answer').innerText = generateRandomItem(drinks);
});

function toggleMode() {
    document.body.classList.toggle('light-mode');
}