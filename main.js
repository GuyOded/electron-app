const { app, BrowserWindow } = require("electron")

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile('./app/index.html')
}

app.whenReady().then(createWindow)