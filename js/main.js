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
		console.log(response);
		let dataHoje = moment(response.location.localtime).format('DD/MM/YYYY');
		let horario = moment(response.location.localtime).format('DD/MM/YYYY hh:mm A');
		let horaAgr = moment(response.location.localtime).format('H:mm');
		let temperatura = response.current.temp_c;
		let cidade = response.location.name;
		let regiao = response.location.region;
		let situacao = response.current.condition.text;
		let icones = response.current.condition.icon;
		let icone = icones.substring(34);
		let tempMax = "Max.: " + response.forecast.forecastday[0].day.maxtemp_c + "°C";
		let tempMin = "Min.: " + response.forecast.forecastday[0].day.mintemp_c + "°C";
		let hora = new Date(horario).getHours();
		let chanceChuvaAgora = "Chuva: " + response.forecast.forecastday[0].hour[hora].chance_of_rain + "%";
		let fundoDia = "linear-gradient(0deg, #48b0ff 0%, #0FBBEE 52%, #63e8ff 98%)";
		let fundoNoite = "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(6,5,85,1) 52%, rgba(9,9,121,1) 98%)"; 

		document.getElementById("tempo").innerHTML = horaAgr;
		document.getElementById("temperatura").innerHTML = temperatura + "°C";
		document.getElementById("cidadeTempo").innerHTML = `${cidade} - MG <br>${dataHoje}` ;
		document.getElementById("situacao").innerHTML = situacao;
		document.getElementById("icone").src = `//cdn.weatherapi.com/weather/128x128/${icone}`;
		document.getElementById("tempMax").innerHTML = tempMax;
		document.getElementById("tempMin").innerHTML = tempMin;
		document.getElementById("chuvaAgora").innerHTML = chanceChuvaAgora;
		response.current.is_day == 1 ? document.querySelector(".sombra").style.background = fundoDia : document.querySelector(".sombra").style.background = fundoNoite;
	})

