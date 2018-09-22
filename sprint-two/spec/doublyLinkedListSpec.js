describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added to the tail', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should set the tail to null when removeHead is called on a list with one item', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.tail).to.equal(null);
  });


  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublyLinkedList
  it('should designate a new head when new nodes are added to the front of the list', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.head.next.value).to.equal(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
  });

  it('should insert a new node at the correct position in the list', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToTail(9);
    doublyLinkedList.insert(4, 4.5);
    expect(doublyLinkedList.head.next.value).to.equal(4.5);
    expect(doublyLinkedList.head.next.next.value).to.equal(5);
    doublyLinkedList.insert(9, 32);
    expect(doublyLinkedList.head.next.next.next.next.next.value).to.equal(32);
    expect(doublyLinkedList.tail.value).to.equal(32);
  });

  // add more tests here to test the functionality of doublyLinkedList
  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.removeTail()).to.equal(5);
  });

  it('should properly maintain the previous property when calling methods on the list', function() {
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToTail(9);
    expect(doublyLinkedList.head.previous).to.equal(null);
    expect(doublyLinkedList.tail.previous.value).to.equal(7);
    expect(doublyLinkedList.head.next.previous.value).to.equal(3);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.previous.value).to.equal(4);
    doublyLinkedList.removeTail();
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.previous).to.equal(null);
    doublyLinkedList.addToHead(32);
    expect(doublyLinkedList.tail.previous.value).to.equal(32);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.tail.previous).to.equal(null);
  });
});