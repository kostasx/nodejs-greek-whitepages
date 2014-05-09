var request = require("request");
var cheerio = require("cheerio");
var queries = process.argv.slice(2);

// DEPRECATED API
// var url = "http://11888.ote.gr/web/guest/white-pages/search?who=" + telephone + "&where=";

for( entry in queries ){

	if ( queries.hasOwnProperty(entry) ){
		sendRequest( queries[entry] );
	}

}

function sendRequest( query ){

	if ( query.match(/^\d*$/) === null ){
		var queryString = "name&_wpName=" + query + "&_wpWhere=";
	} else {
		var queryString = "number&_wpPhone=" + query;
	}

	var url = "http://11888.ote.gr/web/guest/list-names?_wpType=" + queryString;

	console.log("SENDING REQUEST: " + url); 
	
	request( url, function( error, res, body ){

		if ( error ) throw error;

		$ = cheerio.load( body );
		$("ul.results-list-names li").each(function(){
			var details = $(this).find(".details");
			var title = details.find("span.title").text();
			var tel   = details.find("div.phone").text()
			var address = details.find("div.address").text();
			console.log( "NAME: " + title + "\nTELEPHONE: " + tel + "\nADDRESS: " + address);
		});

	});
}
