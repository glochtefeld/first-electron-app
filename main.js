const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
    // Create the browser window
    let win = new BrowserWindow({
	width: 800,
	height: 600,
	webPreferences: {
	    nodeIntegration: true
	}
});

    win.loadFile("index.html");

    win.webContents.openDevTools();

    win.on('closed', () => {
        //Dereference the window object, usually would store windows
        // in an array if your app supports multi windows, this is the time
        //when you should delete the corresponding element
        win = null;
    })
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
})
