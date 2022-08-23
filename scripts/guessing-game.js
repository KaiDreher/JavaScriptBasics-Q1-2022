//@ts-check

const button = document.getElementById("guessing-game")

console.log(button);

button?.addEventListener("click", function () {
    // console.log("clicked");
    let answer = Math.floor((Math.random() * 10) + 1);

    let guess = Number(
            prompt("Pick a number between 1 and 10")
        );

    if(answer == guess) {
        alert("You won!")
    }

    if(answer != guess) {
        alert("You're a failure! :)")
    }

    console.log(guess);
});
