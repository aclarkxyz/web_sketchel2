/*
	SketchEl 2 main execution.
*/

//var app = require('electron');
//var BrowserWindow = require('browser-window');
const electron = require('electron');
const {app, BrowserWindow} = electron;

var mainWindow = null;

app.on('window-all-closed', function() 
{
	if (process.platform != 'darwin') app.quit();
});

app.on('ready', function() 
{ 
	mainWindow = new BrowserWindow({'width':800, 'height':600}); 
	mainWindow.loadURL('file://' + __dirname + '/index.html'); 
	mainWindow.on('closed', function() {mainWindow = null;}); 
});