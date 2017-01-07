/*
    SketchEl2

    (c) 2010-2016 Molecular Materials Informatics, Inc.

    All rights reserved
    
    http://molmatinf.com

	[PKG=sketchel2]
*/

///<reference path='../decl/node.d.ts'/>

///<reference path='../../../WebMolKit/src/decl/corrections.d.ts'/>
///<reference path='../../../WebMolKit/src/decl/jquery.d.ts'/>
///<reference path='../../../WebMolKit/src/util/util.ts'/>

///<reference path='./DrawPanel.ts'/>

/*
	Startup: gets the ball rolling, and provide some high level window handling.
*/

let BASE_APP = ''; // base URL location for the app's program files (could be URL or filename)

function runSketchEl(root:JQuery):void
{
	// node/electron imports; note these are defined inside the function so as not to perturb normal web-access, which does not
	// include these libraries
	const path = require('path');
	const electron = require('electron');
	const process = require('process');

	BASE_APP = path.normalize('file:/' + __dirname);

	var url = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
	RPC.RESOURCE_URL = path.normalize(url + '/../res');

	// unpack web params: if present, they determine where to go from here
 	let params = window.location.search.substring(1).split('&');
	let panelClass:string = null; // default is straight to molecule editing
	let filename:string = null;
	for (let p of params)
	{
		let eq = p.indexOf('=');
		if (eq < 0) continue;
		let key = p.substring(0, eq), val = decodeURIComponent(p.substring(eq + 1));
		if (key == 'panel') panelClass= val;
		else if (key == 'fn') filename = val;
	}	

	if (!panelClass)
	{
		let mol = Molecule.fromString(
			'SketchEl!(10,10)\n' +
			'C=0.2995,3.2750;0,0,i0\n' +
			'C=-0.9995,2.5250;0,0,i1\n' +
			'C=1.5986,2.5250;0,0,i1\n' +
			'C=-0.9995,1.0250;0,0,i1\n' +
			'C=0.2995,0.2750;0,0,i0\n' +
			'C=1.5986,1.0250;0,0,i1\n' +
			'Cl=0.2995,4.7750;0,0,i0\n' +
			'N=0.2995,-1.2250;1,0,i0\n' +
			'O=-0.9995,-1.9750;-1,0,i0\n' +
			'O=1.5986,-1.9750;0,0,i0\n' +
			'1-2=1,0\n' +
			'1-3=2,0\n' +
			'2-4=2,0\n' +
			'4-5=1,0\n' +
			'5-6=2,0\n' +
			'6-3=1,0\n' +
			'1-7=1,0\n' +
			'5-8=1,0\n' +
			'8-9=1,0\n' +
			'8-10=2,0\n' +
			'!End');	

		// TODO: unpack command line parameters, diverge accordingly
		let dw = new DrawPanel(root);
		// !! parameter filename instead of default...
		dw.setMolecule(mol);
	}
	else
	{
		let constructor = eval(panelClass);
		let dw:MainPanel = new constructor(root);
		if (filename) dw.loadFile(filename);
	}
}

// high level functionality for opening a window, with a given panel as content
function openNewWindow(panelClass:string, filename?:string):void
{
	const electron = require('electron');
	let bw = new electron.remote.BrowserWindow({'width':800, 'height':700});
	let url = BASE_APP + '/index.html?panel=' + panelClass;
	if (filename) url += '&fn=' + encodeURIComponent(filename);
	bw.loadURL(url);
	/*bw.on('closed', function() {bw = null;});*/
}