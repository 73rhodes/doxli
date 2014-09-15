doxify
======

When using Node.JS modules on the command line (the node REPL),
it's useful to get help on the various module functions. Doxify
adds a ```help``` command to a module's exports, so you can
fetch usage information based on the dox / jsdoc comments in
the module.

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
