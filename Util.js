/**
* Data structure for tree node
* How to use:
*  a = new TreeNode(1)
*/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isBalanced = function(root) {
    if(root == null)
        return true
    if(root.left == null && root.right == null)
        return true
    if(root.left == null)
        return depthOfTree(root.right) < 2
    if(root.right == null)
        return depthOfTree(root.left) < 2
    if(!isBalanced(root.left))
        return false
    if(!isBalanced(root.right))
        return false
    
    var leftD = depthOfTree(root.left)
    var rightD = depthOfTree(root.right)
    console.log(leftD +":" + rightD)
    var balanced = (leftD - rightD) < 2 && (leftD - rightD) > -2
    return balanced
};

var depthOfTree = function(root){
    if(null == root)
        return 0;
    if(null == root.left && null == root.right)
        return 1;
    var leftDepth = depthOfTree(root.left)
    var rightDepth = depthOfTree(root.right)
    return leftDepth > rightDepth ? leftDepth + 1: rightDepth + 1
}
