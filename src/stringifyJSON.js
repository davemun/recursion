// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
    if (obj == null){
		return 'null';
	}
	
   if (typeof(obj) == 'string'){
		return '"' + obj + '"';
	}
	
	if ( typeof obj !== 'object' ) {
        return "" + obj;
    } //not necessary? catch all?

	if (Array.isArray(obj)) {
	var arrayOutput = [];	
		for(i = 0; i < obj.length; i++){
			arrayOutput.push(stringifyJSON(obj[i]));
		}
	return '[' + arrayOutput + ']';
	}

    var elements = [];
	
    for ( var prop in obj ) {           
    if ( 
	( stringifyJSON(obj[prop]).slice(0,13).replace(/ /g,'') !== 'function(){}')
	&& !( obj[prop] === undefined)
		) {
            elements += ('"' + prop + '":' + stringifyJSON(obj[prop]) + ',');
         };
    };
	elements = elements.slice(0,-1)
    return '{' + elements + '}';
};