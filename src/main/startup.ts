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
	Startup: gets the ball rolling.
*/

function runSketchEl(root:JQuery):void
{
	// node/electron imports; note these are defined inside the function so as not to perturb normal web-access, which does not
	// include these libraries
	const path = require('path');
	const electron = require('electron');
	const process = require('process');

	var url = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
	RPC.RESOURCE_URL = path.normalize(url + '/../res');

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

	root.css('background-color', '#F8F8F8');

	// TODO: unpack command line parameters, diverge accordingly

	let dw = new DrawPanel(root);
	dw.setMolecule(mol);
}
