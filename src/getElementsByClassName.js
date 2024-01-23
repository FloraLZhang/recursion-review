// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className,node) {
  var result = [];
  // check if node exists, if not asign it to document.body
  if (node === undefined) {
    node = document.body;
  }
  // check node type, if its 1, cheeck for class, push if yes
  if (node.nodeType === 1 && node.classList && node.classList.contains(className)) {
      result.push(node);
    }

  // check for childnodes, iterate through childnodes
  if (node.hasChildNodes) {
    for (var i = 0; i < node.childNodes.length; i ++) {
      var childResults = getElementsByClassName(className, node.childNodes[i]);
      result = result.concat(childResults);
    }
  }
  return result;
};
//   var result = [];

//   var searchNode = function(node) {
//     // Check if the current node has a classList and if that classList contains the className
//     if (node.classList && node.classList.contains(className)) {
//       result.push(node);
//     }

//     // Recursively search through child nodes
//     node.childNodes.forEach(function(child) {
//       searchNode(child);
//     });
//   };

//   // Start the search with document.body as the root node
//   searchNode(document.body);
//   return result;
// }