doxli
=====

Interactive help documentation (using [dox](https://github.com/visionmedia/dox)) for Node.JS modules on the command line.

When using Node.JS modules on the command line, doxli adds a
```help``` command to a module's exports, so you can view dox
/ jsdoc documentation for its exported functions.

Usage
-----

Running ```node``` on the command line:

```
> var foo = require('foo');
> var doxli = require('doxli');
> doxli('./foo.js');
```
Module ```foo```'s exported methods now have a ```help``` utility!

```
> foo.bar.help();
// => dox / jsdoc comments for this function will be printed here
```

Using doxli in a module to provide ```help``` functions on exported functions.

```
var doxli = require('doxli');
// module definition goes here
// ...
doxli(__filename);
```
