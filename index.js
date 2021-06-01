

const { app, BrowserWindow } = require('electron');
const path = require('path');


let rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

   client.on('ready', () => {
     client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
          details: "Ich wurde gerickrolled! c:",
          assets: {
           large_image : "fb_img_15887986606819524",
           large_text : "Developered by Nightcorelena Inc."
          }, timestamps: {
           start: Date.now()
           //end: Date.now() + 1,
          }, party : {
           id : "ae488379-351d-4a4f-ad32-2b9b01c91657",
           size : [1, 5]
      },secrets: {
        join: "MTI4NzM0OjFpMmhuZToxMjMxMjM="
      }
       }
    })
  })

client.login({ clientId : "849381182037819394" }).catch(console.error);


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
  });

  // and load the index.html of the app.

  mainWindow.loadFile(path.join(__dirname, 'index.html'));



  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
