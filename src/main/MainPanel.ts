/*
    SketchEl2

    (c) 2010-2016 Molecular Materials Informatics, Inc.

    All rights reserved
    
    http://molmatinf.com

	[PKG=sketchel2]
*/

namespace WebMolKit /* BOF */ {

/*
	Base class for "main windows": an object that takes up the entire browser window document, responds to resizing, etc.
*/

export class MainPanel
{
	constructor(public root:DOM)
	{
		DOM.find('body').setCSS('overflow', 'hidden');

		//root.css({'width': '100%', 'height': document.documentElement.clientHeight + 'px'});
		root.css({'width': '100vw', 'height': '100vh'});
		window.onresize = () => this.onResize();
	}

	// stub: may be called early on to provide a source file upon which to work
	public loadFile(filename:string):void
	{
	}

	// minimum required functionality for resizing windows; override to capture
	protected onResize()
	{
		this.root.setCSS('height', document.documentElement.clientHeight + 'px');
	}

	// stub: override this to receive menu events
	public menuAction(cmd:string):void
	{
	}
} 

/* EOF */ }