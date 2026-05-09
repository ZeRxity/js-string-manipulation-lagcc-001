'use strict';
const decoder = require('./2-decoder');


var encoder = function(phrase){
  //code your solution here
  let encodePhrase=[]

  for(let i=0;i<phrase.length;i++){
    encodePhrase.push(phrase.charCodeAt(i));
  }
    encodePhrase=encodePhrase.map(value => value*value);
  return encodePhrase.reverse();

};
  let phrase="This is not a secret"
  let encoded=encoder(phrase);
  console.log(encoded);
  console.log(decoder(encoded));

module.exports = encoder;

