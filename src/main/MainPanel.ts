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

/*
	Base class for "main windows": an object that takes up the entire browser window document, responds to resizing, etc.
*/

class MainPanel
{
	constructor(public root:JQuery)
	{
		const self = this;

		root.css('width', '100%');
		root.css('height', document.documentElement.clientHeight + 'px');
		$(window).resize(function() {self.onResize();}); 

		root.on('menuAction', function(event:any, cmd:string) {self.menuAction(cmd);});
	}

	// minimum required functionality for resizing windows; override to capture
	protected onResize()
	{
		this.root.css('height', document.documentElement.clientHeight + 'px');
	}

	// stub: override this to receive menu events
	public menuAction(cmd:string):void
	{
	}
} 