describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added to the tail', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should set the tail to null when removeHead is called on a list with one item', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.tail).to.equal(null);
  });


  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
  it('should designate a new head when new nodes are added to the front of the list', function() {
    linkedList.addToHead(4);
    expect(linkedList.head.value).to.equal(4);
    linkedList.addToHead(5);
    expect(linkedList.head.value).to.equal(5);
    expect(linkedList.head.next.value).to.equal(4);
    expect(linkedList.tail.value).to.equal(4);
  });

  it('should insert a new node at the correct position in the list', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(7);
    linkedList.addToTail(9);
    linkedList.insert(4, 4.5);
    expect(linkedList.head.next.value).to.equal(4.5);
    expect(linkedList.head.next.next.value).to.equal(5);
    linkedList.insert(9, 32);
    expect(linkedList.head.next.next.next.next.next.value).to.equal(32);
    expect(linkedList.tail.value).to.equal(32);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
    linkedList.removeTail();
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.tail.value).to.equal(4);
    expect(linkedList.removeTail()).to.equal(4);
    expect(linkedList.head).to.equal(null);
    expect(linkedList.tail).to.equal(null);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeTail()).to.equal(4);
  });

  it('should remove a node at the correct position in the list', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(7);
    linkedList.addToTail(9);
    expect(linkedList.remove(5)).to.equal(5);
    expect(linkedList.head.next.value).to.equal(7);
  });

});
