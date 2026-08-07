const messages = [
    "Drink water 💧",
    "I miss you ❤️",
    "Eat something 🍕",
    "You’re doing amazing 🌸",
    "Go take a break ☁️",
    "Smile a little 😊",
    "You are loved 💕"
];

function newMessage(){

    let random =
    messages[Math.floor(
        Math.random()*messages.length
    )];

    document.getElementById("message")
    .innerText = random;
}
