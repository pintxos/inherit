describe('inherit', function () {

	var Child, Parent, instance;

	beforeEach(function () {

		Child = function () {};

		Parent = function () {};

		Parent.prototype.init = function () {};

		pintxos.inherit(Child, Parent);

		instance = new Child();

	});

	it('Child should have a method called init', function () {
		expect(instance.init).toBeDefined();
	});

	it('Should have a prototype _superClass which contains the methods of the parent constructor', function () {
		expect(Child._super).toEqual(Parent.prototype);
	});

	it('Should have a property constructor pointing to the Child constructor', function () {
		expect(instance.constructor).toBe(Child);
	});


});
