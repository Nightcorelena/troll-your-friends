const {app, BrowserWindow, Menu, ipcMain, screen} = require("electron");

let appclient;
process.setMaxListeners(0);

function CREATE_WINDOW() {
  appclient = new BrowserWindow({ frame: false, fullscreen: true, width: 800, height: 600, icon: "./assets/logos/logo.ico", webPreferences: {  preload: __dirname + "/api.js", autoHideMenuBar: true,  devTools: false, webviewTag: true, nodeIntegration: false, contextIsolation: true, enableRemoteModule: false }})
  appclient.loadFile("levels/start_screen.html")
};

app.whenReady().then(() => {
  CREATE_WINDOW()
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) CREATE_WINDOW()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});