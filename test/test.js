#!/usr/bin/env node
var u2= require('./util2.js');
u2.escape.help();
u2.countfoo.help();
var u3 = require('./util3.js');
var doxli = require('../doxli');
doxli(u3);
u3.help();
