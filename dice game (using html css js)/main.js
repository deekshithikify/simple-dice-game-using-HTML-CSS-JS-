const randNumber1 = Math.floor(Math.random() * 6) + 1;
const randNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", `images/dice${randNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randNumber2}.png`);

if (randNumber1 > randNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won!!";
} else if (randNumber2 > randNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Won!!";
} else {
    document.querySelector("h1").innerHTML = "Tie";
}

function restartGame() {
    location.reload();
}
