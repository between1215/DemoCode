const testtree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [{
        val: 'd',
      }, {
        val: 'e',
      }]
    },
    {
      val: 'c',
      children: [{
        val: 'f',
      }, {
        val: 'g',
      }]
    }
  ]
};
var maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left,right) + 1
  }
  
};
console.log(maxDepth(testtree));