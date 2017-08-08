var chai = require('chai');
var sinon = require('sinon');

beforeEach(function() {
  expect.spyOn(console, 'log')
})

afterEach(function() {
  expect.restoreSpies()
})


describe('#inOrder', function() {
  it("prints out the data in the node from lowest to highest", function() {
    let node = {data: 5, left:
                      {data: 3, left: null, right: null},
                        right: {data: 7, left: null,
                        right: {data: 9, left: null, right: null}
                      }}
    inOrder(node)
    expect(console.log).toHaveBeenCalledWith(3)
    expect(console.log).toHaveBeenCalledWith(5)
    expect(console.log).toHaveBeenCalledWith(7)
    expect(console.log).toHaveBeenCalledWith(9)
  })
})

describe('#findOrAdd', function() {
  it("should add the presented node if the data does not already exist", function() {
    let rootNode = {data: 5, left: null, right: null}
    let firstNewNode = {data: 3, left: null, right: null}
    let secondNewNode = {data: 7, left: null, right: null}
    findOrAdd(rootNode, firstNewNode)
    findOrAdd(rootNode, secondNewNode)
    expect(rootNode.left).toEqual(firstNewNode)
    expect(rootNode.right).toEqual(secondNewNode)
  });

  it("should add new elements on a multilevel tree", function() {
    let rootNode = {data: 5, left: null, right: null}
    let firstNewNode = {data: 3, left: null, right: null}
    let secondNewNode = {data: 7, left: null, right: null}
    let thirdNewNode = {data: 9, left: null, right: null}
    findOrAdd(rootNode, firstNewNode)
    findOrAdd(rootNode, secondNewNode)
    expect(rootNode.left).toEqual(firstNewNode)
    expect(rootNode.right).toEqual(secondNewNode)
    findOrAdd(rootNode, thirdNewNode)
    expect(rootNode.right.right).toEqual(thirdNewNode)
  });

  it("should return true if the and not modify the tree if the element exists", function(){
    let rootNode = {data: 5, left: null, right: null}
    let firstNewNode = {data: 3, left: null, right: null}
    let secondNewNode = {data: 7, left: null, right: null}
    let thirdNewNode = {data: 9, left: null, right: null}
    findOrAdd(rootNode, firstNewNode)
    findOrAdd(rootNode, secondNewNode)
    findOrAdd(rootNode, thirdNewNode)
    let result = findOrAdd(rootNode, thirdNewNode)
    expect(result).toEqual(true)
  })
});

describe('#max', function() {
  it("should return the maximum element in a tree", function(){
    let node = {data: 5, left:
                      {data: 3, left: null, right: null},
                        right: {data: 7, left: null,
                        right: {data: 9, left: null, right: null}
                      }}
  expect(max(node).data).toEqual(9)
  })
})

describe('#min', function() {
  it("should return the minimum element in a tree", function(){
    let node = {data: 5, left:
                      {data: 3, left: null, right: null},
                        right: {data: 7, left: null,
                        right: {data: 9, left: null, right: null}
                      }}
    expect(min(node).data).toEqual(3)
  })
})
