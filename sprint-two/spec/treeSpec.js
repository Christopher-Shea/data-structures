describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children['5'].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children['5'].addChild(6);
    expect(tree.children['5'].children['6'].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children['5'].addChild(7);
    tree.children['6'].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly detect parent values', function() {
    tree.addChild(5);
    tree.children['5'].addChild(6);
    tree.children['5'].children['6'].addChild(8);
    expect(tree.parent === null).to.equal(true);
    expect(tree.children['5'].children['6'].parent.value).to.equal(5);
  });

  it('should correctly detach a child from its parent', function() {
    tree.addChild(5);
    tree.children['5'].addChild(6);
    tree.children['5'].children['6'].addChild(8);
    tree.children['5'].children['6'].children['8'].removeFromParent();
    expect(tree.children['5'].children['6'].children['8']).to.equal(undefined);
  });

  it('should correctly call a provided function on each node in a tree', function() {
    let traverseResults = [];
    let callBack = function(tree) {
      traverseResults.push(tree.value);
    };
    tree.value = 0;
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(7);
    tree.children['5'].addChild(8);
    tree.children['5'].addChild(9);
    tree.children['5'].children['8'].addChild(1);
    tree.children['5'].children['8'].addChild(2);
    tree.children['5'].children['9'].addChild(3);
    tree.children['5'].children['9'].addChild(4);
    tree.children['6'].addChild(10);
    tree.children['6'].addChild(11);
    tree.children['6'].children['10'].addChild(12);
    tree.children['6'].children['10'].addChild(13);
    tree.children['6'].children['11'].addChild(14);
    tree.children['6'].children['11'].addChild(15);
    tree.children['7'].addChild(16);
    tree.children['7'].addChild(17);
    tree.children['7'].children['16'].addChild(18);
    tree.children['7'].children['16'].addChild(19);
    tree.children['7'].children['17'].addChild(20);
    tree.children['7'].children['17'].addChild(21);
    tree.traverse(callBack);
    expect(traverseResults.length).to.equal(22);
  });

});
