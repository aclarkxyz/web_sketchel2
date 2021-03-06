/*
    SketchEl2

    (c) 2010-2016 Molecular Materials Informatics, Inc.

    All rights reserved

    http://molmatinf.com

	[PKG=sketchel2]
*/

///<reference path='./MainPanel.ts'/>

namespace WebMolKit /* BOF */ {

/*
	Drawing window: dedicated entirely to the sketching of a molecular structure.
*/

export class DrawPanel extends MainPanel
{
	private sketcher = new Sketcher();
	private filename:string = null;

	private proxyClip = new ClipboardProxy();

	// ------------ public methods ------------

	constructor(root:DOM)
	{
		super(root);

		const {clipboard} = require('electron');
		this.proxyClip.getString = ():string => clipboard.readText();
		this.proxyClip.setString = (str:string):void => clipboard.writeText(str);
		this.proxyClip.canAlwaysGet = ():boolean => true;

		let w = document.documentElement.clientWidth, h = document.documentElement.clientHeight;
		this.sketcher.setSize(w, h);
		this.sketcher.defineClipboard(this.proxyClip);
		this.sketcher.setup(() => this.sketcher.render(root));
	}

	public setMolecule(mol:Molecule):void
	{
		this.sketcher.defineMolecule(mol);
	}

	public loadFile(filename:string):void
	{
		const fs = require('fs');
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
			this.sketcher.defineMolecule(mol);

			this.filename = filename;
			this.updateTitle();
		});
	}

	public saveFile(filename:string):void
	{
		const fs = require('fs');

		let mol = this.sketcher.getMolecule();
		let content = '';
		if (filename.endsWith('.mol'))
			content = MoleculeStream.writeMDLMOL(mol);
		else
			content = MoleculeStream.writeNative(mol);

		fs.writeFile(filename, content, (err:any):void =>
		{
			if (err) alert('Unable to save: ' + err);
		});
	}

	public exportAsSVG(filename:string):void
	{
		const fs = require('fs');

		let mol = this.sketcher.getMolecule()
		let policy = RenderPolicy.defaultColourOnWhite(20);
		let effects = new RenderEffects();
		let measure = new OutlineMeasurement(0, 0, policy.data.pointScale);

		let gfx = new MetaVector();
		let layout = new ArrangeMolecule(mol as Molecule, measure, policy, effects);
		layout.arrange();
		layout.limitBounds(100, 100);
		new DrawMolecule(layout, gfx).draw();
		gfx.normalise();
		let svg = gfx.createSVG();

		fs.writeFile(filename, svg, (err:any):void =>
		{
			if (err) alert('Unable to export SVG: ' + err);
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
		else if (cmd == 'save') this.actionFileSave();
		else if (cmd == 'saveAs') this.actionFileSaveAs();
		else if (cmd == 'exportSVG') this.actionFileExportSVG();
		else if (cmd == 'undo') this.sketcher.performUndo();
		else if (cmd == 'redo') this.sketcher.performRedo();
		else if (cmd == 'cut') this.actionCopy(true);
		else if (cmd == 'copy') this.actionCopy(false);
		else if (cmd == 'copyMDL') this.actionCopyMDL();
		else if (cmd == 'paste') this.actionPaste();
		else if (cmd == 'delete') new MoleculeActivity(this.sketcher.getState(), ActivityType.Delete, {}).execute();
		else if (cmd == 'selectAll') new MoleculeActivity(this.sketcher.getState(), ActivityType.SelectAll, {}).execute();
		else if (cmd == 'zoomFull') this.sketcher.autoScale();
		else if (cmd == 'zoomIn') this.sketcher.zoom(1.25);
		else if (cmd == 'zoomOut') this.sketcher.zoom(0.8);
		else console.log('MENU:' + cmd);
	}

	// ------------ private methods ------------

	private actionFileOpen():void
	{
		const {dialog} = require('@electron/remote') as Electron.Remote;
		let params:Electron.OpenDialogOptions =
		{
			'title': 'Open Molecule',
			'properties': ['openFile'],
			'filters':
			[
				{'name': 'SketchEl Molecule', 'extensions': ['el']},
				{'name': 'MDL Molfile', 'extensions': ['mol']}
			]
		};
		dialog.showOpenDialog(params).then((value) =>
		{
			if (value.canceled) return;
			let inPlace = this.sketcher.getMolecule().numAtoms == 0;
			for (let fn of value.filePaths)
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

	private actionFileSave():void
	{
		if (!this.filename) {this.actionFileSaveAs(); return;}

		let mol = this.sketcher.getMolecule();
		if (mol.numAtoms == 0) return;

		this.saveFile(this.filename);
	}

	private actionFileSaveAs():void
	{
		const {dialog} = require('@electron/remote') as Electron.Remote;
		let params:Electron.SaveDialogOptions =
		{
			'title': 'Save Molecule',
			//defaultPath...
			'filters':
			[
				{'name': 'SketchEl Molecule', 'extensions': ['el']},
				{'name': 'MDL Molfile', 'extensions': ['mol']}
			]
		};
		dialog.showSaveDialog(params).then((value) =>
		{
			if (value.canceled) return;
			this.saveFile(value.filePath);
			this.filename = value.filePath;
			this.updateTitle();
		});
	}

	private actionFileExportSVG():void
	{
		const {dialog} = require('@electron/remote') as Electron.Remote;
		let params:Electron.SaveDialogOptions =
		{
			'title': 'Export as SVG',
			//defaultPath...
			'filters':
			[
				{'name': 'Scalable Vector Graphics', 'extensions': ['svg']},
			]
		};
		dialog.showSaveDialog(params).then((value) =>
		{
			if (value.canceled) return;
			this.exportAsSVG(value.filePath);
		});
	}

	private actionCopy(andCut:boolean):void
	{
		let input = this.sketcher.getState(), mol = input.mol;
		let mask = Vec.booleanArray(false, mol.numAtoms);
		if (Vec.anyTrue(input.selectedMask)) mask = input.selectedMask;
		else if (input.currentAtom > 0) mask[input.currentAtom - 1] = true;
		else if (input.currentBond > 0) {mask[mol.bondFrom(input.currentBond) - 1] = true; mask[mol.bondTo(input.currentBond) - 1] = true;}
		else mask = Vec.booleanArray(true, mol.numAtoms);

		let copyMol = Vec.allTrue(mask) ? mol.clone() : MolUtil.subgraphWithAttachments(mol, mask);

		if (andCut)
		{
			this.sketcher.clearSubject();
			this.setMolecule(MolUtil.subgraphMask(mol, Vec.notMask(mask)));
		}

		const {clipboard} = require('electron');
		clipboard.writeText(copyMol.toString());

		this.sketcher.showMessage('Molecule with ' + copyMol.numAtoms + ' atom' + (copyMol.numAtoms == 1 ? '' : 's') + ' copied to clipboard.');
	}

	private actionCopyMDL():void
	{
		let mol = this.sketcher.getMolecule();
		if (MolUtil.isBlank(mol)) {this.sketcher.showMessage('Draw a molecule first.'); return;}

		const {clipboard} = require('electron');
		let mdl = new MDLMOLWriter(mol);
		clipboard.writeText(mdl.write());

		this.sketcher.showMessage('Molfile with ' + mol.numAtoms + ' atom' + (mol.numAtoms == 1 ? '' : 's') + ' copied to clipboard.');
	}

	private actionPaste():void
	{
		const {clipboard} = require('electron');
		let content = clipboard.readText();
		if (!content) {alert('Clipboard has no text on it.'); return;}
		try
		{
			let mol = MoleculeStream.readUnknown(content);
			this.sketcher.pasteMolecule(mol);
		}
		catch (ex) {alert('Clipboard does not contain a recognisable molecule.'); return;}
	}

	private updateTitle():void
	{
		if (this.filename == null) {document.title = 'SketchEl'; return;}

		let slash = Math.max(this.filename.lastIndexOf('/'), this.filename.lastIndexOf('\\'));
		document.title = 'SketchEl - ' + this.filename.substring(slash + 1);
	}
}

/* EOF */ }