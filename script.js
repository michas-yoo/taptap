function lose() {
    clearInterval(s), main.innerText = "lol u died", lost = 1
}
var colors = ["Orange", "Pink", "Brown", "Yellow", "Green", "Grey", "Purple", "Red", "Blue"],
    n = 1e3,
    main = document.getElementById("main"),
    col = document.getElementById("col"),
    prevColor = "",
    score = i = lost = 0;
document.getElementById("score").innerText = "Score: " + score, 
col.innerText = colors[Math.floor(Math.random() * colors.length + 0)], 
col.style.color = col.innerText;
var s = setInterval(function() {
    if (0 == i) main.style.background = colors[Math.floor(Math.random() * colors.length + 0)], prevColor = main.style.background, i++;
    else if (prevColor == main.style.background) {
        for (; prevColor == main.style.background;) main.style.background = colors[Math.floor(Math.random() * colors.length + 0)];
        prevColor = main.style.background
    } else main.style.background = colors[Math.floor(Math.random() * colors.length + 0)], prevColor = main.style.background
}, n);
main.addEventListener("click", function() {
    1 == lost && location.reload(), col.innerText.toLowerCase() == main.style.background.toLowerCase() ? (score++, document.getElementById("score").innerText = "Score: " + score, col.innerText = colors[Math.floor(Math.random() * colors.length + 0)], col.style.color = col.innerText, main.style.background = colors[Math.floor(Math.random() * colors.length + 0)], clearInterval(s), n -= 50, s = setInterval(function() {
        if (prevColor == main.style.background) {
            for (; prevColor == main.style.background;) main.style.background = colors[Math.floor(Math.random() * colors.length + 0)];
            prevColor = main.style.background
        } else main.style.background = colors[Math.floor(Math.random() * colors.length + 0)], prevColor = main.style.background
    }, n)) : lose()
});