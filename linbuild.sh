#!/bin/sh

electron-packager app --overwrite\
 --platform=linux --arch=x64\
 --icon=img/icon --prune=true --out=dist

