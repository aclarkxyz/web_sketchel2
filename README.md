# SketchEl2

*SketchEl 2* is a drawing program for chemical structures, based on the [WebMolKit](https://github.com/aclarkxyz/web_molkit) toolkit.
It is written in _TypeScript_, cross-compiled to _JavaScript_, and made available on desktop platforms using _Electron_.

*SketchEl 2* is the successor to the original [SketchEl](http://sketchel.sf.net) application, which was written in _Java_, using
the Swing toolkit, and provided an applet-based web plugin (which is now obsolete).

As of June 2017, the project is very early: there is no guarantee that it is fit for any purpose, but you are welcome to try it out,
provide feedback and/or submit patches.

## License

The whole project is copyrighted by [Molecular Materials Informatics, Inc](http://molmatinf.com) and made available via the
GNU Public License (GPL) v3. In a nutshell, this is the patent-unfriendly viral license: you can use it for whatever you want,
but derived software gets infected with the same license.

## Compilation

To compile a functioning build, you will need to have _WebMolKit_ setup in a parallel directory, e.g.

* ~/wherever/SketchEl2 ([GitHub](https://github.com/aclarkxyz/web_sketchel2))
* ~/wherever/WebMolKit ([GitHub](https://github.com/aclarkxyz/web_molkit))

The primary technology of interest that has to be installed is [TypeScript](https://www.typescriptlang.org), which is easy enough to
setup: just follow the instrutions.

_TypeScript_ is a cross-compiler, which essentially turns all of the files in the <code>src/**.ts</code> subdirectory (and the <i>WebMolKit</i>
dependency) into one big JavaScript file (<code>app/sketchel2.js</code>). The JavaScript output file is included as part of
the GitHub fileset and updated with each source change, so you can continue with the build process without updating it.

Recompiling the JavaScript deliverable can be done at the command line by running <code>tsc</code>: it reads the <code>tsconfig.json</code>
file to figure out what needs to be done. For viewing or editing the source files, the best option is [Visual Studio Code](https://code.visualstudio.com/)
(the excellent cross platform open source project: not to be confused with <i>Visual Studio</i>).

## Building

Execution of *SketchEl 2* is done using the [Electron](https://electron.atom.io) project, which is a wrapper around a stripped down version
of the Google Chrome browser. It adds some extra APIs to [Node.js](https://nodejs.org) to fill out the missing pieces between a pure JavaScript
engine and an HTML-based UI (e.g. menus, icons, opening/closing windows, etc). _Electron_ is a relatively new project and is not especially
well documented, so there is a certain amount of trial and error involved.

The first step to building a package is to install the _Electron_ library in the <code>SketchEl2</code> folder. This is not included in the _git_
repository, so you have to install it from the standard location. Assuming you already have <code>npm</code> (Node.js Package Manage) installed, see 
the script <code>remake\_prebuild.sh</code>. Running this will create and populate the <code>node_modules</code> directory.

Once this is configured, you can either try your luck with the system wide <code>electron_packager</code> binary, or use one of the three shell
scripts provided (<code>linbuild.sh</code>, <code>macbuild.sh</code> and <code>winbuild.sh</code>), which will populate the <code>dist/</code>
directory with a functioning app, if all goes well.

The deliverables are quite different per platform, and your mileage may vary when trying to build for a platform that you're not currently running.
At the present time, it has only been tested with Linux and macOS, although it is highly probable that the Windows analog will also work (feedback
welcome on whether this is the case).

*Note* there is an annoying bug that afflicts _TypeScript_/_Visual Studio Code_: when there is a <code>node\_modules</code> directory, the UI and
compiler scan through all of the TypeScript interfaces within that directory, even though it is not supposed to (and even when it is explicitly told
not to), which generates a slew of compiler warnings. This will presumably be fixed sometime, but it is currently problematic, because the
Electron package manager only works when its files are stored locally (i.e. in the local <code>node_modules</code> directory). It should work
with a global installation (i.e. when those files are stored somewhere else, like /usr/local/lib), but it does not. The workaround is rather ugly: the
build scripts make a symbolic softlink to the global installation, build the package, then remove the link. This works, and it is necessary when
alternating between debugging and building the package. If you are not going to recompile, or you just compile once and are willing to ignore the
warnings, then this workaround is nonessential.

## Debugging

Editing or viewing source code should be done with [Visual Studio Code](https://code.visualstudio.com/). The configured <code>launch.json</code>
file should provide everything you need to simply open up the project and hit _run_. For getting started quickly, this may be simpler than
building the package.
