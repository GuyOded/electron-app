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

    // and load the index.html of the app.
    win.loadFile("../components/index.html")
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)
app.allowRendererProcessReuse = true