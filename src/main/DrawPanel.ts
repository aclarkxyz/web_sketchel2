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
	private sketcher = new Sketcher();
	
	// ------------ public methods ------------

	constructor(root:JQuery)
	{
		super(root);

		let w = document.documentElement.clientWidth, h = document.documentElement.clientHeight;
		this.sketcher.setSize(w, h);
		this.sketcher.setup(() => this.sketcher.render(root));
	}

	public setMolecule(mol:Molecule):void
	{
        this.sketcher.defineMolecule(mol);
	}

	public loadFile(filename:string):void
	{
		const fs = require('fs');
		const self = this;
		fs.readFile(filename, 'utf-8', (err:any, data:string):void =>
		{
			if (err) throw err;
			let mol = Molecule.fromString(data);
			if (!mol)
			{
				let mdl = new MDLMOLReader(data);
				mol = mdl.parse();
			}
			// (other formats to be added later)
			if (!mol) {alert('Molecule not readable:\n\n' + filename); return;}
			self.sketcher.defineMolecule(mol);
		});		
	}

	protected onResize()
	{
		super.onResize();

		let w = document.documentElement.clientWidth, h = document.documentElement.clientHeight;
		this.sketcher.changeSize(w, h); // force a re-layout to match the new size
	}

	public menuAction(cmd:string):void
	{
		if (cmd == 'new') openNewWindow('DrawPanel');
		else if (cmd == 'open') this.actionFileOpen();
		else if (cmd == 'save') this.actionFileSave(false);
		else if (cmd == 'saveAs') this.actionFileSave(true);
		else if (cmd == 'undo') this.sketcher.performUndo();
		else if (cmd == 'redo') this.sketcher.performRedo();
		else if (cmd == 'cut') this.actionCopy(true);
		else if (cmd == 'copy') this.actionCopy(false);
		else if (cmd == 'paste') this.actionPaste();
		else if (cmd == 'delete') new MoleculeActivity(this.sketcher, ActivityType.Delete, {});
		else if (cmd == 'selectAll') new MoleculeActivity(this.sketcher, ActivityType.SelectAll, {});
		else if (cmd == 'zoomFull') this.sketcher.autoScale();
		else if (cmd == 'zoomIn') this.sketcher.zoom(1.25);
		else if (cmd == 'zoomOut') this.sketcher.zoom(0.8);
		else console.log('MENU:'+cmd);
	}

	// ------------ private methods ------------

	private actionFileOpen():void
	{
		const electron = require('electron');
		const dialog = electron.remote.dialog; 
		let params:any =
		{
			'title': 'Open Molecule',
			'properties': ['openFile'],
			'filters':
			[
				{'name': 'SketchEl Molecule', 'extensions': ['el']},
				{'name': 'MDL Molfile', 'extensions': ['mol']}
			]
		};
		dialog.showOpenDialog(params, (filenames:string[]):void =>
		{
			let inPlace = this.sketcher.getMolecule().numAtoms == 0;
			if (filenames) for (let fn of filenames) 
			{
				if (inPlace)
				{
					this.loadFile(fn);
					inPlace = false;
				}
				else openNewWindow('DrawPanel', fn);
			}
		});
	}

	private actionFileSave(saveAs:boolean):void
	{
		alert('save:as='+saveAs); // !!
	}

	private actionCopy(andCut:boolean):void
	{
		alert('copy');
	}

	private actionPaste():void
	{
		alert('paste');
	}
}