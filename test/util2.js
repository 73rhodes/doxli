var doxli = require('../doxli');

/**
 * Escape the given 'html'.
 *
 * @example
 *   utils.escape('<script></script>');
 *   // => '&lt;script&gt;&lt;/script&gt;'
 *
 * @param {String} html string to be escaped
 * @return {String} escaped html
 * @api public
 */

exports.escape = function (html) {
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

/**
 * Count the instances of 'foo'.
 *
 * @example
 *   countfoo('foofoofoo');
 *   // => 3
 *
 * @param {String} foostring string to count occurences of 'foo'
 * @param {String} barstring string to ignore
 * @return {Number} number of times 'foo' occurs
 * @api publi
 */

exports.countfoo = function (foostring, barstring) {
  return foostring.match(/foo/g).length;
};

doxli(__filename);
