const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', function(){
    //create new window
    mainWindow = new BrowserWindow({
        minWidth: 395, 
        width: 395, 
        minHeight: 1200, 
        height: 1200, 
        transparent: true, 
        frame: false
    });
    //load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
});
