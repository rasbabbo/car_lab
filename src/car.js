//require('locus');


function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.state = "off";
  this.previousOwners = [];
  this.currentOwner = "manufacturer";
  this.passangers = []
}

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function(){
	this.state = "on";
};

Car.prototype.off = function() {
	this.state = "off";
};

Car.prototype.driveTo = function(destination) {
	if (this.state == "on") {
		console.log("driving to " + destination);
	} else {
		console.log("gonna turn your car on?")
	};
};

Car.prototype.park = function() {
	if (this.state=="off") {
		console.log("Parked!!");
	} else {
		console.log("can't park if car is on")
	};
};






var Toyota = new Car("Toyota", "FourRunner", 1991, "Blue");
var Volvo = new Car("Volvo", "244e", 1985, "Blue");
var Mercedes = new Car("Mercedes", "300d", 1983, "Blue");

module.exports=Car;describe

//eval(locus);