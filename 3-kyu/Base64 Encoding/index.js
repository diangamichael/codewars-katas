/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Base64 Encoding

  Description:
    Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.
    Do not use built in functions.

    You can learn more about Base64 encoding and decoding https://en.wikipedia.org/wiki/Base64

  Kata Link:
    https://www.codewars.com/kata/base64-encoding

  Discuss Link:
    https://www.codewars.com/kata/base64-encoding/discuss

  Solutions Link:
    https://www.codewars.com/kata/base64-encoding/solutions
*/

// Long Solution
String.prototype.toBase64 = function() {
  return Buffer.from(this).toString('base64')
}

String.prototype.fromBase64 = function() {
  return Buffer.from(this, 'base64').toString()
}

// Function Export
module.exports = String
