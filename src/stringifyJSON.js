// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // console.log("stringifyJSON function is called");

  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean'){
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
        result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
}


  if (typeof obj === 'object') {
    var props = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
          props.push('"' + key + '":' + stringifyJSON(obj[key]));
        }
      }
    }
    return '{' + props.join(',') + '}';
  }
  return undefined;
};
