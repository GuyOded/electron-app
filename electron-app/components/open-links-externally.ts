import { shell } from "electron";

document.addEventListener("DOMContentLoaded", function(event) { 
    let links = document.querySelectorAll("a.externalLink") as NodeListOf<HTMLAnchorElement>
    links.forEach(element => {
        element.addEventListener("click", (event) => {
            event.preventDefault()
            shell.openExternal(element.href)
        })
    });
});