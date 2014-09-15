doxify
======

Interactive help from [dox](https://github.com/visionmedia/dox) when using Node.JS modules on the command line.

When using Node.JS modules on the command line, doxify adds a
```help``` command to a module's exports, so you can fetch dox
/ jsdoc usage details.

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
