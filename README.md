doxify
======

Get dox documentation for modules on the command line.

This module iterates over a module's exports and adds a ```help```
function to each one. This let's you fetch dox / jsdoc comments
for a module's functions when using it from the command line (in
the node REPL).

Usage
-----

Running ```node``` on the command line:

```
> var foo = require('foo');
> var doxify = require('doxify');
> doxify('./foo.js');
> foo.bar.help();
```

Using doxify in a module to provide ```help``` functions on exported functions.

```
var doxify = require('doxify');
// module definition goes here
// ...
doxify(__filename);
```
