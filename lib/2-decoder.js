'use strict';

var decoder = function(encoded){
  //code your solution here
  let decodePhrase='';
  decodePhrase=encoded.reverse();
  decodePhrase=decodePhrase.map(value=>Math.sqrt(value));
  decodePhrase=decodePhrase.map(decode=>String.fromCharCode(decode)).join('');

  return decodePhrase;
};

module.exports = decoder;

