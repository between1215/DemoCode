const bt2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
};
//先序遍历 根左右
const preorder2 = (root) => {
  if (!root) { return }
  const stack = [root];
  while (stack) {
    const n = stack.pop();
    console.log(n.val); //把根节点弹出并访问
    if (n.right) stack.push(n.right); //把右节点放进去，因为栈是先进后出。
    if (n.left) stack.push(n.left); //把左节点放进去
  }
}

//中序遍历 左根右
const inorder2 = (root) => {
  if (!root) { return }
  const stack = [root];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop();
    console.log(n.val);
    p = p.right;
  }
}

//后序遍历 左右根
const postorder2 = (root) => {
  if (!root) { return }
  const stack = [];
  const outputStack = [];
  while (stack) {
    const n = stack.pop();
    outputStack.push(n)
    if (n.left) stack.push(n.left); 
    if (n.right) stack.push(n.right); 
  }
  while(outputStack.length){
    const n = outputStack.pop();
    console.log(n);
  }
}

preorder(bt2);
console.log('--↑↑先序遍历非递归版本↑↑--');

inorder(bt2)
console.log('--↑↑中序遍历非递归版本↑↑--');

postorder(bt2)
console.log('--↑↑后序遍历非递归版本↑↑--');
