const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        title: "Iris",
        width: 395,
        minWidth: 395,
        maxWidth: 395,
        height: 1200,
        minHeight: 1200,
        maxHeight: 1200,
        frame: false,
        transparent: true
    })

    win.loadFile('mainWindow.html')
}

app.whenReady().then(() => {
    createWindow()
})