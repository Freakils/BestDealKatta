function hello(){
		return "Hello World";
};

function findAvoDeals(avoString){
  	var avoDeals = avoString.split(",");
  	// return avoDeals;
			 
	var avoDealsList = [];
    		for(var i=0; i<avoDeals.length; i++){
        	var avoDealsString = avoDeals[i];
        	
        	    var fish = avoDealsString
        	    	.split("for");
				
				var quantity = Number(fish[0]);
                  

                var pricenumber = fish[1]
                	.replace("R","");

                var prices = Number(pricenumber);
                    avoDealsList.push({
						quantity:quantity,
                        prices:prices,
					});
				
        		        	    


	}
	return avoDealsList;
	// console.log(avoDealsList);
};

console.log(findAvoDeals("1 for R3, 2 for R7, 3 for R10, 5 for R14.50"));