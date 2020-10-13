var request = new XMLHttpRequest();

request.open('GET','https://api2.shop.com/AffiliatePublisherNetwork/v2/products?publisherId=TEST&locale=en_US&site=shop&shipCountry=US&perPage=15&onlyMaProducts=false', true, 'api_Key:0a19dbf48f984da59d96e900d5e06228');

const x = document.getElementById('root');
request.onload = function () {

	console.log('script loaded');

	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400){
		data.forEach((brand)=> {
			const h1 = document.createElement('div');
			h1.textContent = brand.name;
			console.log(brand.name);
		})
	}else{
		console.log("error");
	}
}

request.send();

