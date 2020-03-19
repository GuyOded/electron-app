const { shell } = require("electron")

document.addEventListener("DOMContentLoaded", function(event) { 
    let links = document.querySelectorAll("a.externalLink")
    links.forEach(element => {
        element.addEventListener("click", (event) => {
            event.preventDefault()
            shell.openExternal(element.href)
        })
    });
});