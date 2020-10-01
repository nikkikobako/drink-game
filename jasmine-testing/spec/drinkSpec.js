
describe ("whatCanIDrink", function() {
    describe ("age tests", function() {
        it ("should return msg for under 14", function() {
            expect(whatCanIDrink(1)).toBe("Drink Toddy"); 
         });
         it ("should return msg for under 18", function() {
            expect(whatCanIDrink(17)).toBe("Drink Coke"); 
         });
    });
});