let {app, BrowserWindow, BrowserView, BaseWindow, WebContentsView, Notification, ipcMain} = require("electron");


const createWindow = () => {
    let win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL('http://localhost:3000/note')
};
app.whenReady().then(() => {
    createWindow()
});