describe("MilesConvert Jasmine Three Suite", function() {
	it("expects milesConvert.milesToFeet() to be 15840", function() {
		expect(milesConvert.milesToFeet()).toBe(15840);		
	});
	
	it("expects milesConvert.miles = 5 to be 5", function() {
		milesConvert.miles = 5;
		var newMiles = milesConvert.miles;
		expect(newMiles).toBe(5);
	});

	it("expects milesConvert.milesToFeet() to be 26400", function() {
		expect(milesConvert.milesToFeet()).toBe(26400);		
	});
});
