doxli
=====

Interactive help from [dox](https://github.com/visionmedia/dox) when using Node.JS modules on the command line.

When using Node.JS modules on the command line, doxli adds a
```help``` command to a module's exports, so you can fetch dox
/ jsdoc usage details.

Usage
-----

Running ```node``` on the command line:

```
> var foo = require('foo');
> var doxli = require('doxli');
> doxli('./foo.js');
> foo.bar.help();
```

Using doxli in a module to provide ```help``` functions on exported functions.

```
var doxli = require('doxli');
// module definition goes here
// ...
doxli(__filename);
```
