export function outputConsole(msg) {
     console.log("msg=");
     console.log(msg);
 }

 export function testCovidApi() {
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a700362213msh5488758fad7aa33p185971jsn393a5db8dfbd',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
    };

    fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada', options)
	    .then(response => response.json())
	    .then(response => console.log(response))
	    .catch(err => console.error(err));
}

export function testClimateApi(){
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a700362213msh5488758fad7aa33p185971jsn393a5db8dfbd',
		'X-RapidAPI-Host': 'climate-change-live319.p.rapidapi.com'
	}
    };

    fetch('https://climate-change-live319.p.rapidapi.com/news/bbc?newspaperId=bbc', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}

export function testSpaceApi() {
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a700362213msh5488758fad7aa33p185971jsn393a5db8dfbd',
		'X-RapidAPI-Host': 'space-news.p.rapidapi.com'
	}
};

fetch('https://space-news.p.rapidapi.com/news/guardian', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}   

