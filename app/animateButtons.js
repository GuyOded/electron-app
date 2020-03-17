window.onload = function () {
    var btnWitcher = document.getElementsByClassName("button_witcher")[0],
        btnRune = document.getElementsByClassName("btn_rune"),
        activeRune = "btn_rune__active",
        btnRuneLength = btnRune.length;

    btnWitcher.onclick = function () {
        for (var i = 0; i < btnRuneLength; i++) {
            btnRune[i].classList.toggle(activeRune);
        }
    };
};
