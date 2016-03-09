QUnit.test( "testing hello function", function( assert ) {
		var result = hello();
			assert.equal( "Hello World", result, "testing hello function");
});

QUnit.test("findAvoDeals convert the string into an array (split out the quantity and the price", function( assert ) {
		var result = findAvoDeals("1 for R3, 2 for R7, 3 for R10, 5 for R14.50");
		var expectedList = [{
							  prices: 3,
							  quantity: 1
							},
							{
							  prices: 7,
							  quantity: 2
							},
							{
							  prices: 10,
							  quantity: 3
							},
							{
							  prices: 14.5,
							  quantity: 5
							}];

			assert.deepEqual(expectedList, result);

});

// QUnit.test( "find the cheapest deal", function( assert ) {

//     var Avos = findAvos("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.");

//     assert.equal( "", Avos);
// });

// QUnit.test( "find the most expensive deal", function( assert ) {

//     var Avos = findAvos("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.");

//     assert.equal( "", Avos);
// });

// QUnit.test( "find the average price across all the deals", function( assert ) {

//     var Avos = findAvos("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.");

//     assert.equal( "", Avos);
// });
