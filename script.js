function lose() {
    clearInterval(s), game.innerText = "lol u died", lost = 1
}
var colors = ["Orange", "Pink", "Brown", "Yellow", "Green", "Grey", "Purple", "Red", "Blue"],
    n = 1e3,
    game = document.getElementById("game"),
    col = document.getElementById("col"),
    prevColor = "",
    score = i = lost = 0;
document.getElementById("score").innerText = "Score: " + score,
col.innerText = colors[Math.floor(Math.random() * colors.length + 0)],
col.style.color = col.innerText;
var s = setInterval(function() {
    if (0 == i) game.style.background = colors[Math.floor(Math.random() * colors.length + 0)], prevColor = game.style.background, i++;
    else if (prevColor == game.style.background) {
        for (; prevColor == game.style.background;) game.style.background = colors[Math.floor(Math.random() * colors.length + 0)];
        prevColor = game.style.background
    } else game.style.background = colors[Math.floor(Math.random() * colors.length + 0)], prevColor = game.style.background
}, n);
game.addEventListener("click", function() {
    1 == lost && location.reload(), col.innerText.toLowerCase() == game.style.background.toLowerCase() ? (score++, document.getElementById("score").innerText = "Score: " + score, col.innerText = colors[Math.floor(Math.random() * colors.length + 0)], col.style.color = col.innerText, game.style.background = colors[Math.floor(Math.random() * colors.length + 0)], clearInterval(s), n -= 50, s = setInterval(function() {
        if (prevColor == game.style.background) {
            for (; prevColor == game.style.background;) game.style.background = colors[Math.floor(Math.random() * colors.length + 0)];
            prevColor = game.style.background
        } else game.style.background = colors[Math.floor(Math.random() * colors.length + 0)], prevColor = game.style.background
    }, n)) : lose()
});
