describe("milesFunction Jasmine Three Suite", function() {
	it("expects milesFunction.milesToFeet(3) to be 15840", function() {
		expect(milesFunction.milesToFeet(3)).toBe(15840);		
	});
	
	it("expects milesFunction.milesToFeet(5) to be 26400", function() {
		expect(milesFunction.milesToFeet(5)).toBe(26400);		
	});
});
