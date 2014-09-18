var util = require('util');
var dox  = require('dox');
var fs   = require('fs');
var djs  = null;

function getdox(name) {
  return function () {
    var comment = djs.filter(function (i) {
      return (i.ctx && i.ctx.name === name);
    })[0];
    if (!comment) {
      return console.log("Sorry, no dox comments for " + name);
    }
    var tags = comment.tags;
    var desc = comment.description.full;
    console.log(name + '\n' + desc.replace(/(<([^>]+)>)/ig,"") + '\n');
    var i = 0;
    var p = 0;
    var op = "";
    for (i = 0; i < tags.length; i++) {
      switch(tags[i].type) {
        case 'example':
          console.log("Example:\n" + tags[i].string);
          break;
        case 'param':
          if(!p) {
            console.log("Parameters:");
            p++;
          }
          op = tags[i].optional ? "Optional. " : " ";
          console.log(
            '  ' + tags[i].name +
            ' (' + tags[i].types.toString() + ') - ' +
            op + tags[i].description + '\n'
          );
          break;
        case 'return':
          console.log(
            'Returns:\n  (' +
            tags[i].types.toString() +
            ') - ' + tags[i].description + '\n'
          );
          break;
        default:
          break;
      }
    }
  }
}

module.exports = function (mod) {
  var i;
  var path;
  for (i in require.cache) {
    if (mod === require.cache[i].exports) {
      console.log(require.cache[i]);
      path = require.cache[i].filename;
    }
  }
  djs = dox.parseComments(fs.readFileSync(path).toString());
  for (i in mod) {
    mod[i].help = getdox(i);
  }
}

