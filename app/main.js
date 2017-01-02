/*
	SketchEl 2 main execution.
*/

const electron = require('electron');
const {app, BrowserWindow} = electron;

var mainWindow = null;

app.on('window-all-closed', function() 
{
	if (process.platform != 'darwin') app.quit();
});

app.on('ready', function() 
{ 
	mainWindow = new BrowserWindow({'width': 800, 'height': 700}); 
	mainWindow.loadURL('file://' + __dirname + '/index.html'); 
	mainWindow.on('closed', function() {mainWindow = null;});
	setupMenu();
});

// setup the global menu for all windows
function setupMenu()
{
	const Menu = electron.Menu;

	// pushes a menu command over IPC to the render task: locates the root branch and issues a message, which will have been
	// captured by the instance of MainPanel
	function sendCommand(cmd)
	{
		let browser = BrowserWindow.getFocusedWindow();
		if (!browser) return;
		let js = '$("#root").trigger("menuAction", "' + cmd + '")';
		browser.webContents.executeJavaScript(js);
	}

	let template = 
	[
		{
			'label': 'File',
			'submenu': 
			[
				{'label': 'New Molecule', 'accelerator': 'CmdOrCtrl+N', 'click': function() {sendCommand('new');}},
				{'label': 'Open...', 'accelerator': 'CmdOrCtrl+O', 'click': function() {sendCommand('open');}},
				{'label': 'Save', 'accelerator': 'CmdOrCtrl+S', 'click': function() {sendCommand('save');}},
				{'label': 'Save As...', 'accelerator': 'CmdOrCtrl+Shift+S', 'click': function() {sendCommand('saveAs');}},
				{'role': 'close'}
			]
		},
		{
			'label': 'Edit',
			'submenu': 
			[
				{'role': 'undo'},
				{'role': 'redo'},
				{'type': 'separator'},
				{'role': 'cut'},
				{'role': 'copy'},
				{'role': 'paste'},
				{'role': 'pasteandmatchstyle'},
				{'role': 'delete'},
				{'role': 'selectall'}
			]
		},
		{
			'label': 'View',
			'submenu': 
			[
				{'role': 'reload'},
				{'role': 'toggledevtools'},
				{'type': 'separator'},
				{'role': 'resetzoom'},
				{'role': 'zoomin'},
				{'role': 'zoomout'},
				{'type': 'separator'},
				{'role': 'togglefullscreen'}
			]
		},
		{
			'role': 'window',
			'submenu': 
			[
				{'role': 'minimize'},
				{'role': 'close'}
			]
		},
		/*{
			role: 'help',
			submenu: 
			[
			{
				label: 'Learn More',
				click () { require('electron').shell.openExternal('http://electron.atom.io') }
			}
			]
		}*/
	];

	if (process.platform === 'darwin') 
	{
		template.unshift(
		{
			'label': 'SketchEl',
			'submenu': 
			[
				{'role': 'about'},
				{'type': 'separator'},
				{'role': 'services', 'submenu': []},
				{'type': 'separator'},
				{'role': 'hide'},
				{'role': 'hideothers'},
				{'role': 'unhide'},
				{'type': 'separator'},
				{'role': 'quit'}
			]
		});
		/*
		// Edit menu.
		template[1].submenu.push(
			{
			type: 'separator'
			},
			{
			label: 'Speech',
			submenu: [
				{
				role: 'startspeaking'
				},
				{
				role: 'stopspeaking'
				}
			]
			}
		)
		// Window menu.
		template[3].submenu = [
			{
			label: 'Close',
			accelerator: 'CmdOrCtrl+W',
			role: 'close'
			},
			{
			label: 'Minimize',
			accelerator: 'CmdOrCtrl+M',
			role: 'minimize'
			},
			{
			label: 'Zoom',
			role: 'zoom'
			},
			{
			type: 'separator'
			},
			{
			label: 'Bring All to Front',
			role: 'front'
			}
		]*/
	}

	const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);

/*
	//const ipcRenderer = electron.ipcRenderer;
	const {ipcRenderer} = require('electron');
console.log('IPC?'+!!ipcRenderer+"/"+electron+"/"+electron.ipcRenderer);
for (let zog in electron) console.log('-- ' + zog);
	ipcRenderer.on('menu', function(event, arg)
	{
      console.log('menu message reviced'); // appear on macOS, not appear on Windows.
      if (arg == 'disable') menu.items[0].submenu.items[1].enabled = false;
    });*/
}