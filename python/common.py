from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
    def printNode(self):
        if not self:
            print("null")
            return
        print(self.val)
        if self.left:
            self.left.printNode();
        if self.right:
            self.right.printNode();