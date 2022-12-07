 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8ce8386fd3mshd50f37b9c6546d0p11d7c9jsnbcb54db58d88',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=%20-20.6971%2C%20-44.8278&lang=pt', options)
	.then(response => response.json())
	.then(response => {
		//console.log(response);
		let horario = moment(response.location.localtime).format('DD/MM/YYYY hh:mm A');
		let temperatura = response.current.temp_c;
		let cidade = response.location.name;
		let regiao = response.location.region;
		let situacao = response.current.condition.text;
		let icone = response.current.condition.icon
		let tempMax = "Max " + response.forecast.forecastday[0].day.maxtemp_c + "°C";
		let tempMin = "Min " + response.forecast.forecastday[0].day.mintemp_c + "°C";
		let hora = new Date(horario).getHours();
		let chanceChuvaAgora = "Possibilidade de " + response.forecast.forecastday[0].hour[hora].chance_of_rain + "% de Chuva";

		document.getElementById("tempo").innerHTML = horario;
		document.getElementById("temperatura").innerHTML = temperatura + "°C";
		document.getElementById("cidade").innerHTML = cidade +" - "+ regiao ;
		document.getElementById("situacao").innerHTML = situacao;
		document.getElementById("icone").src = icone;
		document.getElementById("tempMax").innerHTML = tempMax;
		document.getElementById("tempMin").innerHTML = tempMin;
		document.getElementById("chuvaAgora").innerHTML = chanceChuvaAgora;
	})

