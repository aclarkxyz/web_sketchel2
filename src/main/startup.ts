/*
    SketchEl2

    (c) 2010-2016 Molecular Materials Informatics, Inc.

    All rights reserved
    
    http://molmatinf.com

	[PKG=sketchel2]
*/

///<reference path='../../../WebMolKit/src/decl/corrections.d.ts'/>
///<reference path='../../../WebMolKit/src/decl/jquery.d.ts'/>
///<reference path='../../../WebMolKit/src/util/util.ts'/>

///<reference path='./DrawWindow.ts'/>

/*
	Startup: gets the ball rolling.
*/

function runSketchEl(root:JQuery):void
{
	//console.log('Fnord!');

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

	root.css('background-color', '#A0FFE0');

	let mw = new MainWindow(root);

	let table = $('<table class="data"></table>').appendTo(root);
	let tr = $('<tr></tr>').appendTo(table);
	let td = $('<td class="data"></td>').appendTo(tr);
	td.text('Fnord fnord fnord');
}
