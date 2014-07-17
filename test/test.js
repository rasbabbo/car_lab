
var expect = require('chai').expect;
var Car = require("../src/car.js");


describe("#driveTo", function() {
	it('should console the destination', function() {
		if (Toyota.state == "on") {
		expect(Toyota.driveTo("Boston")).to.equal("Boston");
		};
	});
});


describe("sale", function() {
	it('should update currentOwner and append prev owners', function() {
		expect(Volvo.sale("Manny")).to.equal(Volvo.currentOwner("Manny"))
	});
});