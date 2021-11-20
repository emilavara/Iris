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
            webviewTag: true,
            webSecurity: false
          }
    })

    win.loadFile('mainWindow.html')
    
    win.webContents.session.webRequest.onHeadersReceived({ urls: [ "*://*/*" ] },
    (d, c)=>{
      if(d.responseHeaders['X-Frame-Options']){
        delete d.responseHeaders['X-Frame-Options'];
      } else if(d.responseHeaders['x-frame-options']) {
        delete d.responseHeaders['x-frame-options'];
      }

      c({cancel: false, responseHeaders: d.responseHeaders});
    }
  );
}

app.whenReady().then(() => {
    createWindow()
})