/**
 * @author Tony
 */


var milesFunction = {
	miles: 3,
	feetPerMile: 5280,
	milesToFeet: function(intMiles) { 'use strict';
		this.miles = intMiles;
		return (this.miles * this.feetPerMile);
	}
};

console.log('Mile to Feet: ' + milesFunction.milesToFeet(5) + ' = ' + milesFunction.miles + ' * ' + milesFunction.feetPerMile);

