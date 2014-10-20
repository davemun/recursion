// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  //You should use document.body, element.childNodes, and element.classList

  var output = []
  
  if(typeof(arguments[1]) == 'undefined'){
	arguments[1] = document.body;
  };

  var elements = arguments[1];	//elements is an array of nodes 

	for(var i = 0; i < elements.length; i++){	//iterate through nodes-reported
		if (typeof(elements[i].classList) !== 'undefined'){
		
		for(var j = 0; j < elements[i].classList.length; j++){	//checkthrough through each nodes-reported's classList
			if(elements[i].classList[j] == className){ 
				output.push(elements[i]);					//if matches className stores node element
			};
		};
	
		};
		//recursive DOM class DFS
		for(var k = 0; k < children.length; k++){
			getElementsByClassName(className, elements[i].childNodes);
		};	
			
			
	};	//end of for loop	

  
	if (document.body.className = className){
		output.unshift(document.body);
	};
  
  return output;
  };


/*fails on  '<p><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></p>'
cant find nested <span>
result;
[<body class=​"targetClassName">​…​</body>​]
expectedArray;
[<body class=​"targetClassName">​…​</body>​, <span class=​"targetClassName">​yay​</span>​]


var htmlStrings = [
  '<p class="targetClassName"></p>',
  '<p class="otherClassName targetClassName"></p>',
  '<p><p class="targetClassName"></p></p>',
  '<p><p class="targetClassName"><p class="targetClassName"></p></p></p>',
  '<p><p></p><p><p class="targetClassName"></p></p></p>',
  '<p><p class="targetClassName"></p><p class="targetClassName"></p></p>',
  '<p><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></p>'
];


*/