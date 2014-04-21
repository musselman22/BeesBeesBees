describe('ForragerBee class functionality', function() {
  
  verifyClass(ForragerBee).followsPattern('pseudoclassical', {}, false);

  beforeEach(function() {
    forragerBee = new ForragerBee();
  });

  /*  Overwrite methods from superclass  */
  
  it('should have an `age` property that is set to `10`', function() {
    expect(forragerBee.age).to.equal(10);
  });

  it('should have a `job` property that is set to `find pollen`', function() {
    expect(forragerBee.job).to.equal('find pollen');
  });

  /*  Inhereted from superclass  */

  it('should have a `color` property inhereted from `bee` that is set to `yellow`', function() {
    expect(forragerBee.color).to.equal('yellow');
  });

  it('should have a `food` property that is inhereted from grub', function() {
    expect(forragerBee.food).to.equal('jelly');
  });

  it('should have an `eat` method that is inhereted from grub', function() {
    expect(forragerBee.eat).to.be.a('function');
  });

  /*  New methods and properties  */

  it('should have a `canFly` property that is set `true`', function() {
    expect(forragerBee.canFly).to.equal(true);
  });

  it('should have a `treasureChest` property that is set to an empty array `[]`', function() {
    expect(forragerBee.treasureChest).to.be.a('array');
  });

  it('should have a `forrage` method that allows the bee to add a `treasure` to the `treasureChest`', function() {
    forragerBee.forrage('pollen');
    forragerBee.forrage('flowers');
    forragerBee.forrage('gold');
    expect(forragerBee.treasureChest).to.have.length(3);
  });

});