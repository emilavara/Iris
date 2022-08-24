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

    try {
      // works with 1.1 too
      win.webContents.debugger.attach('1.2')
    } catch (err) {
      console.log('Debugger attach failed: ', err)
    }

    const isDebuggerAttached = win.webContents.debugger.isAttached()
    console.log('debugger attached? ', isDebuggerAttached)

    win.webContents.debugger.on('detach', (event, reason) => {
      console.log('Debugger detached due to: ', reason)
    });

    // This is where the magic happens!
    win.webContents.debugger.sendCommand('Emulation.setEmitTouchEventsForMouse', {
      enabled: true,
      configuration: 'mobile',
    });

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