// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    // your code here
    //You should use document.body, element.childNodes, and element.classList

    var output = Object.prototype.toString.call(output) == "[object Array]" ? output : [];
	var output = (typeof(arguments[2]) !== 'undefined') ? arguments[2] : [];

    var elements = arguments[1]; //elements is an array of nodes, readability alias

    var initialize = _.once(function() {
        if (typeof(elements) === 'undefined') {
            elements = Array.prototype.slice.apply(document.body.childNodes);
        };
    });
    initialize();

    var debugLength = elements.length;

    for (var i = 0; i < elements.length; i++) { //iterate through nodes
        element = elements[i];

        if (element.className == 'somediv') {
            var debug = true;
        };

        if (typeof(element.classList) !== 'undefined') {
            for (var j = 0; j < element.classList.length; j++) { 
                if (element.classList[j] == className) {
                    output.push(element); //if matches className stores node element
                };
            };
        };


        var children = Array.prototype.slice.apply(element.childNodes)
            //recursive DOM class DFS
        for (var k = 0; k < children.length; k++) {
            var childrenList = [];
            childrenList.push(children[k]);
            getElementsByClassName(className, childrenList, output); //sends single object, expects array?
        };

    }; //end of for loop	

    return (document.body.className == className) ? [document.body].concat(output) : output;
};
