## Tree Methods

Now that we have seen some of the benefits of trees, we should become familiar with using them.  Just as we are familiar with using arrays and linked lists.  In the following lab, you will implement methods to print out the nodes of a tree in order, and find the maximum and minimum.  

### In Order, together

Let's write the inOrder method together.  Here's what this method will do, given a root node, the inOrder method will `console.log` all of the other nodes in a tree, in sequential order.  How do we do something like this?

1. Problem solve with an example (in a diagram)  


Well first let's give ourselves an example and stay away from code.  Here is a diagram of a tree.  

```text
   6     
  / \
 1   8
  \
   4
  /  \
 2   5  
```

Ok so let's try to figure out this method by virtue of the characteristics of a binary search tree.  Remember that the rules of a binary search tree says that everything to the left of a node is smaller than every node on a branch to the right.  Let's simplify our tree a little.    

```text
   6     
  / \
 1   8
```

So to place this in order, we would take the branch to the left, then the center node, followed by the branch to the right.  Now let's build our tree back up again.

```text
   6     
  / \
 1   8
  \
   4
```

Now can we still say that to write the nodes in order we go to the node to the left of our root node followed by the node to the right of our root node?  We start with the left branch, which is number 1, then 6, then 8.  So we are missing our 4.  

Let's try again.  Instead of the node to the left, we can have the branch to the left *in order* (in other words left child of 1, center (1), and right child of 1 (4)).  Followed by the root node of 6, followed by the branch *in order* to the right. So the left branch in order would give us no left child, followed by the root node of 1, followed by the right child of 4.

 Seems like we might be onto something.
 
 ```text 
 inOrder = inOrder(Right branch), root node, inOrder(left branch)
 ```
 
 Let's move back to our original data structure.

```text
   6     
  / \
 1   8
  \
   4
  /  \
 2   5  
```

Ok, so we say the definition of in order is really, the inOrder of everything to the left, followed by the center node, followed by inOrder of everything to the right.  Does that work?  Well in order of everything to the left has 1 as the next tree to consider.  One does not have a left child, so then we print out the one, followed by the right tree, but *in order*.  So that leaves us with 2, then 4, then 5.  So now the subtree of one is complete, so our tree's root node 6 is printed out, and finally we print the right branch in order, which is 8.  

Let's try to translate this into code.  

```javascript
function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}
```

Try this out in the console and see that it works.  Trace through the logic in your head again, and try to deconstruct what is occurring if still unclear to you.

Now you can move on to complete the rest of the tests.  Don't worry the rest of the problems are not as difficult as discovering inOrder.  

Good luck!

<p class='util--hide'>View <a href='https://learn.co/lessons/tree-methods-lab'>Tree Methods Lab</a> on Learn.co and start learning to code for free.</p>
