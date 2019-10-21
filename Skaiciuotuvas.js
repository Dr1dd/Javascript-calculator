
var input = new String();
var tempValue = new String();
var firstOperand = "";
var secondOperand = "";
var operator = "";
var result = "";
var numberArray = new Array();
var operatorArray = new Array();

function number(num) {
	input = document.getElementById('input');
	console.log(input.value.charAt(input.value.length-1));
	if(input.value.charAt(input.value.length-1) == '=') {
		input.value = "";
		tempValue = "";
	}
	switch(num){
		case 1:
			input.value += '1';
			if(operator.length>0) secondOperand += 1;
			else firstOperand += '1';
			break;
		case 2:
			input.value += '2';
			if(operator.length>0) secondOperand += '2';
			else firstOperand += '2';
			break;	
		case 3:
			input.value += '3';
			if(operator.length>0) secondOperand += '3';
			else firstOperand += '3';
			break;
		case 4:
			input.value += '4';
			if(operator.length>0) secondOperand += '4';
			else firstOperand += '4';
			break;
		case 5:
			input.value += '5';
			if(operator.length>0) secondOperand += '5';
			else firstOperand += '5';
			break;
		case 6:
			input.value += '6';
			if(operator.length>0) secondOperand += '6';
			else firstOperand += '6';
			break;
		case 7:
			input.value += '7';
			if(operator.length>0) secondOperand += '7';
			else firstOperand += '7';
			break;
		case 8:
			input.value += '8';
			if(operator.length>0) secondOperand += '8';
			else firstOperand += '8';
			break;
		case 9:
			input.value += '9';
			if(operator.length>0) secondOperand += '9';
			else firstOperand += '9';
			break;
		case 0:
			input.value += '0';
			if(operator.length>0) secondOperand += '0';
			else firstOperand += '0';
			break;
	}
	//console.log(num);
}
function operand(op){
	input = document.getElementById('input');
	if(input.value.charAt(input.value.length-1) != '='){
	if(firstOperand.length > 0 || secondOperand.length > 0){
	numberArray.push(firstOperand);
	firstOperand = "";
	secondOperand = "";
	switch(op){
		case '+':
			input.value += '+';
			operator = '+';
			break;
		case '-':
			input.value += '-';
			operator = '-';
			break;
		case '*':
			input.value += '*';
			operator = '*';
			break;
		case '/':
			input.value += '/';
			operator = '/';
			break;
		case '^':
			input.value += '^';
			operator = '^';
		}
	}
	operatorArray.push(operator);
}
}
function roots(op) {
	input = document.getElementById('input');
	var open = true;
	if(input.value.charAt(input.value.length-1) != '='){		
	switch(op){
		case '√':
			input.value += '√(';

			operator = '√';
			break;
		case '^':
			input.value += '^';
			break;
		case ')':
			input.value += ')';
			open = false;
			break;
		case '(':
			input.value += '(';
			break;
		}
	}
		if(open == false ){
				tempValue = "";
				var searching = new String();
			searching = input.value.match(/\(([^)]+)\)/);
			var stringVar = searching[1];
			//searching = searching.replace(/\(|\)/, "");
			tempValue = input.value.replace(/\(([^)]+)\)/, calculate(stringVar));
			console.log(tempValue);
		}


		//operatorArray.push(op);
}

function calculate(string){

	var rez;
	var firstop = new Array();
	var oper = new Array();
	var temp = 0;
	var tempAt = 0;
	string += '=';
	console.log(string.length);
	for(var i = 0; i < string.length; i++){
		if(isNaN(string.charAt(i))) {
				firstop.push(string.substr(tempAt, i));
				oper.push(string.charAt(i));
				tempAt =i+1;				
			}
		}
	
	var len 
	len = oper.length;

	if(oper.length <1) rez = string;
	else{
		for(var j = 0; j < len; j++){
				if(j == 0 ) rez = firstop[0];
				console.log(rez);
			switch(oper[j]){
				case '+':
					rez =parseFloat(rez) +parseFloat(firstop[j+1]);
					break;
				case '-':
					rez =parseFloat(rez) -parseFloat(firstop[j+1]);
					break;
				case '*':
					rez =parseFloat(rez) *parseFloat(firstop[j+1]);
					break;
				case '/':
					rez =parseFloat(rez) /parseFloat(firstop[j+1]);
					break;

			}

		}
	}
	console.log(rez);
	return rez;
}
function convert(string){
	switch(string.charAt(0)){
		case '√':
			string = Math.pow(parseFloat(string.substr(1, string.length-1), 10), 1/2);
	}
	for(var i = 0; i < string.length;i++){
		if(isNaN(string[i])){
			switch(string[i]){
				case '^':
					string = Math.pow(parseFloat(string.substr(0, i)), parseFloat(string.substr(i+1, string.length-1)));
					break;
			}
		}
	}


	return string;
}
function regexSearch(tempValue){
	var searchRoot = new String();
	var searcRootnth = new String();
	var searchsquared = new String();

	searchRoot = tempValue.match(/√[0-9]+/);
	console.log(searchRoot);
	if(searchRoot != null ) tempValue = tempValue.replace(/√[0-9]+/, convert(searchRoot[0]));

	searchsquared = tempValue.match(/[0-9]+\^[0-9]+/);
	console.log(tempValue);
	if(searchsquared != null ) tempValue = tempValue.replace(/[0-9]+\^[0-9]+/, convert(searchsquared[0]));

	if(tempValue.match(/\/0/) != null || tempValue.match(/0\//) != null) tempValue = "Negalima dalyba iš nulio";

	var searchOperandFrontPlus;
	searchOperandFront = tempValue.match(/^\+[0-9]+/);
	if(tempValue.match(/^\+[0-9]+/) !=null) tempValue = tempValue.replace(/^\+[0-9]+/, searchOperandFrontPlus[0].substr(1));

	var searchOperandFrontMinus;
	searchOperandFrontMinus = tempValue.match(/^\-[0-9]+/);
	if(tempValue.match(/^\-[0-9]+/) !=null) tempValue = tempValue.replace(/^\-[0-9]+/, "0"+searchOperandFrontMinus[0]);
	return tempValue;
}
function resultop() {
	if(input.value.charAt(input.value.length-1) != '=' && input.value.length >0){
	input.value += '=';
	tempValue += '';
	result = "";
	var firstop = new Array();
	var oper = new Array();
	var temp = 0;
	var tempAt = 0;

	if(tempValue.length <1) tempValue = input.value;

	tempValue = regexSearch(tempValue);
	console.log(tempValue);
	if(tempValue == "Negalima dalyba iš nulio") {
		result = "Negalima dalyba iš nulio";
		var output = document.getElementById('output');
		output.value = result;
		console.log(result);
		result = "";
	}
	else{

		for(var i = 0; i < tempValue.length; i++){
			if(isNaN(tempValue.charAt(i))){
				//console.log(tempValue.charAt(i));
			//	if(tempValue.charAt(i) == '+' || tempValue.charAt(i) == '-' || tempValue.charAt(i) == '*' ||  tempValue.charAt(i) == '/') {
					oper.push(tempValue.charAt(i));
					firstop.push(tempValue.substr(tempAt, i));
					console.log(tempValue.charAt(i));
					tempAt =i+1;			
				//}

				
			}
		}
		var len 
		len = oper.length;
		if(oper.length < 1) {
			result = parseFloat(tempValue);
		}
		else{
					for(var j = 0; j < len; j++){
							if(j == 0 ) result = firstop[0];
							console.log(firstop[j+1]);
						switch(oper[j]){
							case '+':
								result =parseFloat(result) +parseFloat(firstop[j+1]);
								break;
							case '-':
								result =parseFloat(result) -parseFloat(firstop[j+1]);
								break;
							case '*':
								result =parseFloat(result) *parseFloat(firstop[j+1]);
								break;
							case '/':
								result =parseFloat(result) /parseFloat(firstop[j+1]);
								break;
							case '^':
								result = Math.pow(parseFloat(result),parseFloat(firstop[j+1])); 
								break;
						}

					}
				}
		
		var output = document.getElementById('output');
		output.value = result;
		console.log(result);
		result = "";
	}
}
}
function clearText(){
	 input = document.getElementById('input');
	console.log(input.value);
	input.value = "";
	var output = document.getElementById('output');
	output.value = ' ';
	input ="";
	firstOperand = "";
    secondOperand = "";
    operator = "";
    result = "";
    tempValue = "";
}
function deleteInput(){
	input = document.getElementById('input');
	if(input.value.charAt(input.value.length-1) == '=') {
		input.value = "";
		tempValue = "";
		result = "";
	}
	else input.value = input.value.slice(0, input.value.length-1); 
}
