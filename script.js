imageUpdate = '' // Global var
nameUpdate = '' // Global var
priceUpdate = 0 // Global var
descUpdate = '' // Global var

function searchF() {

	alert("Loading, Click Ok and please wait.")

	var searchTerm = document.getElementById("searchID");
	var request = new XMLHttpRequest();

	if (searchTerm.value === '') {
		alert("Search is empty!\nPlease input product name.")
		return
	}

	request.open('GET', 'https://api2.shop.com/AffiliatePublisherNetwork/v2/products?publisherId=test&locale=en_US&site=shop&shipCountry=US&term=' + searchTerm.value + '&perPage=15&brandId=%22Calvin%20Klein%22&categoryId=1-32838&onlyMaProducts=false', true);
	request.setRequestHeader('api_Key', '0a19dbf48f984da59d96e900d5e06228')

	const x = document.getElementById('root');
	request.onload = function () {

		console.log('script loaded');

		var data = JSON.parse(this.response);

		const product = Object.entries(data)[4][1];
		if (product.length === 0) {
			alert("No products found.\nPlease check spelling or try a different term.");
			return
		}


		for(var output of product)
		{
			console.log(output)
			console.log(output.name)
			console.log(output.shortDescription)
			console.log(output.maximumPriceString)
			console.log(output.image.sizes[2].url)
			console.log("\n")
		}

		//dataGot = Object.entries(product)[0][1]

		//nameUpdate = dataGot.name
		//imageUpdate = dataGot.image.sizes[2].url
		//descUpdate = dataGot.shortDescription
		//priceUpdate = dataGot.maximumPriceString

		//open("ProductUD.html", "_self")





	}

	request.send();
}