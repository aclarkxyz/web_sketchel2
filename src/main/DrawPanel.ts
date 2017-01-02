/*
    SketchEl2

    (c) 2010-2016 Molecular Materials Informatics, Inc.

    All rights reserved
    
    http://molmatinf.com

	[PKG=sketchel2]
*/

///<reference path='../decl/node.d.ts'/>
///<reference path='../decl/electron.d.ts'/>

///<reference path='../../../WebMolKit/src/decl/corrections.d.ts'/>
///<reference path='../../../WebMolKit/src/decl/jquery.d.ts'/>
///<reference path='../../../WebMolKit/src/util/util.ts'/>
///<reference path='../../../WebMolKit/src/sketcher/Sketcher.ts'/>

///<reference path='./MainPanel.ts'/>

/*
	Drawing window: dedicated entirely to the sketching of a molecular structure.
*/

class DrawPanel extends MainPanel
{
	private sketcher = new Sketcher(null);
	
	// ------------ public methods ------------

	constructor(root:JQuery)
	{
		super(root);

		let w = document.documentElement.clientWidth, h = document.documentElement.clientHeight;
		this.sketcher.setSize(w, h);
		this.sketcher.setup(function() {this.sketcher.render(root);}, this);
	}

	public setMolecule(mol:Molecule):void
	{
        this.sketcher.defineMolecule(mol);
	}

	protected onResize()
	{
		super.onResize();

		let w = document.documentElement.clientWidth, h = document.documentElement.clientHeight;
		this.sketcher.changeSize(w, h); // force a re-layout to match the new size
	}

	public menuAction(cmd:string):void
	{
		console.log('MENU:'+cmd);
	}

	// ------------ private methods ------------

} 