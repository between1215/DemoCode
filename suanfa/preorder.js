const bt = {
  val:1,
  left:{
    val:2,
    left:{
      val:4,
      left:null,
      right:null
    },
    right:{
      val:5,
      left:null,
      right:null
    },
  },
  right:{
    val:3,
    left:{
      val:6,
      left:null,
      right:null
    },
    right:{
      val:7,
      left:null,
      right:null
    }
  }
};
//先序遍历 根左右
const preorder = (root) => {
  if(!root) {return}
  console.log(root.val);
  preorder(root.left)
  preorder(root.right)
}

//中序遍历 左根右
const inorder = (root) => {
  if(!root) {return}
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

//后序遍历 左右根
const postorder = (root) => {
  if(!root) {return}
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}

preorder(bt);
console.log('--↑↑先序遍历递归版本↑↑--');

inorder(bt)
console.log('--↑↑中序遍历递归版本↑↑--');

postorder(bt)
console.log('--↑↑后序遍历递归版本↑↑--');
