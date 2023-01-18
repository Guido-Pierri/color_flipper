const colors = ["green", "red", "rgba(133,12,200)", "#f15025"];

const btnEl = document.getElementById("btn");
const colorEl = document.querySelector(".color");

btnEl.addEventListener('click', function(){
// get random number between 0 and 3
    const randomNumber = getRandomNumber();
console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    colorEl.textContent = colors[randomNumber];
})
function getRandomNumber(){
    return Math.floor( Math.random()*colors.length);
}