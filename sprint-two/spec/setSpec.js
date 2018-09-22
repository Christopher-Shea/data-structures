describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add(1);
    set.add({'nik': 'mentakis'});
    set.add(['is', 'awesome']);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains({'nik': 'mentakis'})).to.equal(true);
    expect(set.contains(['is', 'awesome'])).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
    set.add({'nik': 'mentakis'});
    set.remove({'nik': 'mentakis'});
    expect(set.contains({'nik': 'mentakis'})).to.equal(false);
  });

});
