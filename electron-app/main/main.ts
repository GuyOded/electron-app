import { app, BrowserWindow } from "electron"

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        fullscreen: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile("../components/index.html")
}

app.whenReady().then(createWindow)
app.allowRendererProcessReuse = true