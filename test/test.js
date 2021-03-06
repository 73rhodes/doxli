#!/usr/bin/env node
var util2= require('./util2.js');
var util3 = require('./util3.js');
var doxli = require('../doxli');

util2.escape.help();
util2.countfoo.help();

doxli(util3);
util3.help();
