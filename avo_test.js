QUnit.test( "testing hello function", function( assert ) {
		var result = hello();
			assert.equal( "Hello World", result, "testing hello function");
});

QUnit.test( "findAvoDeals", function( assert ) {
		var result = findAvoDeals("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.");

			assert.deepEqual(["1 for R3", " 2 for R7", " 3 for R10", " 5 for R14.50."], result);
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
