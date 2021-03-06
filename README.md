doxli
=====

Interactive help documentation (using [dox](https://github.com/visionmedia/dox)) for Node.JS modules on the command line.

When using Node.JS modules on the command line, doxli adds a
```help``` command to a module's exports, so you can view dox
/ jsdoc documentation for its exported functions.

Installation
------------
`npm install doxli`

<a href="https://codeclimate.com/github/73rhodes/doxli/maintainability"><img src="https://api.codeclimate.com/v1/badges/4a08cd1e22c0203c0df3/maintainability" /></a>
<img src="https://packagequality.com/shield/doxli.svg"/>
[![DeepScan grade](https://deepscan.io/api/teams/1201/projects/16146/branches/340262/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1201&pid=16146&bid=340262)

Usage
-----

Running ```node``` on the command line:

```
> var foo = require('foo');
> var doxli = require('doxli');
> doxli(foo);
```
Module ```foo```'s exported methods now have a ```help``` utility!

```
> foo.bar.help();
// => dox / jsdoc comments for this function will be printed here
```

Using ```doxli``` in a module to automatically provide ```help``` functions for exports:

```
var doxli = require('doxli');
// module definition goes here
doxli(this);
```
