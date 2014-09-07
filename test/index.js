describe('child constructor', function () {

	var Child, Parent, instance;

	beforeEach(function () {

		Child = function () {};

		Parent = function () {};

		Parent.prototype.init = function () {};

		pintxos.inherit(Child, Parent);

		instance = new Child();

	});

	it('Shoud have a property _superClass', function () {
		expect(instance._superClass).toBeDefined();
	});

	it('Should have a prototype _superClass which contains the methods of the parent constructor', function () {
		expect(instance._superClass).toEqual(Parent.prototype);
	});


});
