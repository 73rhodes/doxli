var dox  = require('dox');
var fs   = require('fs');
var djs  = null;
var pHeader = false;

function getdox(name) {
  return function () {
    var comment = null;
    if (name) {
      comment = djs.filter(function (i) {
        return (i.ctx && i.ctx.name === name);
      })[0];
    } else {
      comment = djs[0];
    }
    if (!comment) {
      return console.log("Sorry, no dox comments for " + name);
    }
    var tags = comment.tags;
    var desc = comment.description.full;
    console.log(name + '\n' + desc.replace(/(<([^>]+)>)/ig,"") + '\n');
    printTags(tags);
  }
}

function printTags(tags) {
    var i = 0;
    paramHeader = false;
    for (i = 0; i < tags.length; i++) {
      printTag(tags[i]);
    }
}

function printTag(t) {
   switch(t.type) {
     case 'example':
       console.log("Example:\n" + t.string);
       break;
     case 'param':
       if(!paramHeader) {
         console.log("Parameters:");
         paramHeader = true;
       }
       var op = t.optional ? "Optional. " : " ";
       console.log( `  ${t.name} (${t.types.toString()}) - ${op}${t.description}\n`);
       break;
     case 'return':
       console.log(`Returns:\n  (${t.types.toString()}) - ${t.description}\n`);
       break;
     default:
       break;
   }
}

function getCachedPath(mod) {
  let path = null;
  for (var i in require.cache) {
    if (mod === require.cache[i].exports) {
      path = require.cache[i].filename;
    }
  }
  return path;
}

function doxli(mod) {
  var path = getCachedPath(mod);;
  djs = dox.parseComments(fs.readFileSync(path).toString());
  if (typeof mod === 'object') {
    let i;
    for (i in mod) {
      mod[i].help = getdox(i);
    }
  } else if (typeof mod === 'function') {
    mod.help = getdox();
  }
}

module.exports = doxli;
