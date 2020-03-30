import "./stylesheet.css"

window.onload = function () {
    let btnWitcher = document.getElementsByClassName("button_witcher")[0] as HTMLButtonElement,
        btnRune = document.getElementsByClassName("btn_rune"),
        activeRune = "btn_rune__active",
        btnRuneLength = btnRune.length;

    btnWitcher.onclick = function () {
        for (let i = 0; i < btnRuneLength; i++) {
            btnRune[i].classList.toggle(activeRune);
        }
    };
};
