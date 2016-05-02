/* * * * * * * * * * * * * * * * * * * * * *
 *   CAVEMAN JS PT 3: STRING.PROTOTYPE     *
 * * * * * * * * * * * * * * * * * * * * * */

// Primitive values can get in on the method madness too!


// `String.prototype.slice` is a phenomenally useful method that copies
// a piece of a string based on a start index (inclusive) and an end
// index (non-inclusive). The `Array.prototype` has a very similar
// method. Design your `slice` to work for both strings and arrays.
var slice = function(stringOrArray, start, end) {
  var sliced, i;
  if (start === undefined) start = 0;
  if (start < 0) start = stringOrArray.length + start;

  if (end === undefined || end > stringOrArray.length) end = stringOrArray.length;
  if (end < 0) end = stringOrArray.length + end;

  if (typeof stringOrArray === 'string') {
  	sliced = '';
    for (i = start; i < end; i++) {
      sliced += stringOrArray[i];
    }
  } else {
  	sliced = [];
    for (i = start; i < end; i++) {
      sliced[sliced.length] = stringOrArray[i];
    }
  }

  return sliced;
};


// `String.prototype.split` can return an array based on a string by
// breaking it up using a delimiter string. The delimiter is not
// included in the final array.
var split = function(string, delim) {
  var arr = [];
  var str = '';
  var i;
  var dLen = delim === undefined ? 0 : delim.length;

  if (delim === '') {
    for (i = 0; i < string.length; i++) {
      push(arr, string[i]);
    }
  } else {
    for (i = 0; i < string.length; i++) {
      if (slice(string, i, i + dLen) === delim) {
        push(arr, str);
        str = '';
        i += dLen - 1;
      } else {
        str += string[i];
      }
      if (i === string.length - 1) {
        push(arr, str);
      }
    }
  }

  return arr;
};


// `String.prototype.trim` is a handy little method for processing text.
// It returns the input string with all white space removed from the
// beginning and the end.
var trim = function(string) {
  var start = 0;
  var startFound = false;
  var end = string.length;
  var endFound = false;

  // for (var i = 0; i < string.length; i++) {
  //   var char = string[i];
  //   if (char !== ' ' && !startFound) {
  //     start = i;
  //     startFound = true;
  //   }
  //   if (char === '\\' && !endFound) {
  //     i++;
  //     end = i;
  //     endFound = true;
  //
  //   }
  //   if (char === ' ' && !endFound) {
  //     end = i;
  //     endFound = true;
  //   }
  //   if (char !== ' ') {
  //     end = string.length;
  //     endFound = false;
  //   }
  // }
  console.log('string: "', string + '"', 'start:', start, 'end:', end)
  return slice(string, start, end);
};


// `String.prototype.replace` modifies a string by searching for a target
// string and replacing it. Note that only the first instance is replaced.
var replace = function(string, target, replacement) {

};
