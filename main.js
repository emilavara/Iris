const { app, BrowserWindow, BrowserView } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        title: "Iris",
        width: 397,
        minWidth: 397,
        maxWidth: 397,
        height: 1200,
        minHeight: 1200,
        maxHeight: 1200,
        frame: false,
        transparent: true,
        webPreferences: {
            webviewTag: true
          }
    })

    win.loadFile('mainWindow.html')
}

app.whenReady().then(() => {
    createWindow()
})