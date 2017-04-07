var BinarySearchTree = function() {
  this.root = null;
}

BinarySearchTree.prototype.insertNode = function (val) {
  var currentNode;
  var node;

  node = {
    data : val,
    left : null,
    right : null,
  };

  if (!this.root) { // if the root is null then replace it with a node with val
    this.root = node;
  } else {
    currentNode = this.root; // otherwise set the currentNode to root
    while (currentNode) { // while currentNode is null decide to place it left or right
      if (val < currentNode.data) { // value inserting is less than current node go left
        if (!currentNode.left) { // if the currentNode's left node is not null
          currentNode.left = node;
          break; // get out of the while loop
        } else { // otherwise set that node to the current and repeat
          currentNode = currentNode.left;
        }
      } else if (val > currentNode.data) { // value inserting is greater than current node go right
        if (!currentNode.right) { // if current node's right node is not null
          currentNode.right = node;
          break; // get out of the while loop
        } else { // otherwise set that node to the current and repeat
          currentNode = currentNode.right;
        }
      } else {
        break;
      }
    }
  }
};

BinarySearchTree.prototype.superbalanced = function(root) {
  var stack = [];
  var depthStorage = []; // depth storage will never be more than two items

  // store the node and the depth in a tuple
  stack.push([root, 0]);

  while (stack.length !== 0) {
    var tuple = stack.pop();

    var node = tuple[0];
    var nodeDepth = tuple[1];

    if (!node.left && !node.right) { // two falsy values equal a false

      if (depthStorage.indexOf(nodeDepth) === -1) { // if that nodeDepth hasn't been stored, store it
        depthStorage.push(nodeDepth);
      }

      // if the storage container is greater than two or the greatest depth minus the second greatest is greater than 1 and equal to two
      if ( depthStorage.length > 2 || depthStorage.length === 2 && Math.abs(depthStorage[0] - depthStorage[1] > 1) ) {
        return false;
      }
    }

    if (node.left) {
      stack.push([node.left, nodeDepth + 1]);
    }

    if (node.right) {
      stack.push([node.right, nodeDepth + 1]);
    }
  }


  return true;
};


var BST = new BinarySearchTree();
BST.insertNode(8);
BST.insertNode(3);
BST.insertNode(10);
BST.insertNode(1);
BST.insertNode(6);
BST.insertNode(14);
BST.insertNode(4);
BST.insertNode(7);
BST.insertNode(13);

BST.superbalanced(BST.root)
