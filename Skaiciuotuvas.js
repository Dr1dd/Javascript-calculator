
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
	if(input.value.charAt(input.value.length-1) == '=') {
		input.value = "";
		tempValue = "";
	}
	if(input.value.length<21){
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
	if(input.value.length<21){
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
			break;
		case '.':
			input.value += '.';
			break;
		case '%':
			input.value += '%';
			break;
		}
	}
	}
	operatorArray.push(operator);
}
}
function advancedOperators(op) {
	input = document.getElementById('input');
	var open = true;
	if(input.value.length<21){
		if(input.value.charAt(input.value.length-1) != '='){		
			switch(op){
				case '√':
					input.value += '√(';

					operator = '√';
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
	//string = regexSearch(string);
	console.log(string.length);
	for(var i = 0; i < string.length; i++){
		if(isNaN(string.charAt(i))) {
				if(string.charAt(i) == '.'){
					i++;
				}
				else{

					oper.push(string.charAt(i));
					firstop.push(string.substr(tempAt, i));
					console.log(string.charAt(i));
					tempAt =i+1;			
				}				
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
				case '%':
					rez =parseFloat(rez) %parseFloat(firstop[j+1]);
					break;

			}

		}
	}
	console.log(rez);
	return rez;
}
function convert(string){
	var firstHalf;
	var secondHalf;
//	if(string.match(/nth/)!=null) string = string.replace(/nth/, '√');
	for(var i = 0; i < string.length;i++){
		if(isNaN(string[i])){
			switch(string[i]){
				case '^':
					console.log(string);
					string = Math.pow(parseFloat(string.substr(0, i), 10), parseFloat(string.substr(i+1, string.length-1), 10));
					break;
				case '√':
				console.log(string);
					if(string.charAt(0)=='√'){
					 string = Math.pow(parseFloat(string.substr(i+1, string.length-1)), 1/2);
					} 
					else{
						firstHalf = parseFloat(string.substr(i+1, string.length-1))
						secondHalf =parseFloat(string.substr(0, i));
						string = Math.pow(firstHalf, 1/secondHalf);
						 if(Math.pow(string, secondHalf) != firstHalf) string = Math.round(string);
						} 
					break;
			}
		}
	}


	return string;
}
function regexSearch(tempValue){
	var searchRoot = new String();
	var searchRootnth = new String();
	var searchsquared = new String();
	var searchOperandFrontPlus;
	var searchOperandFrontMinus;
	var searchMat;
	var searchDiv;
	var searchMod;
	var found = 1;
	while(found!=0){
		found = 0;
		
	searchRootnth = tempValue.match(/[0-9.]+√[-0-9.]+/);
	if(tempValue.match(/[0-9.]+√[-0-9.]+/) !=null) {
		tempValue = tempValue.replace(/[0-9.]+√[-0-9.]+/, +convert(searchRootnth[0]));
		found++;
	}
	searchRoot = tempValue.match(/√[-0-9.]+/);
	if(searchRoot != null ) {
		tempValue = tempValue.replace(/√[-0-9.]+/, convert(searchRoot[0]));
		found++;
	}
	searchsquared = tempValue.match(/[0-9.-]+\^[0-9.-]+/);
	console.log(tempValue);
	if(searchsquared != null ) {
		tempValue = tempValue.replace(/[0-9.-]+\^[0-9.-]+/, convert(searchsquared[0]));
		found++;
	}
	console.log(tempValue);
	if(tempValue.match(/\/0/) != null || tempValue.match(/0\//) != null) {
		tempValue = "Negalima dalyba iš nulio";
		found++;
	}

	searchOperandFront = tempValue.match(/^\+[0-9.]+/);
	if(tempValue.match(/^\+[0-9.]+/) !=null) {
		tempValue = tempValue.replace(/^\+[0-9.]+/, searchOperandFrontPlus[0].substr(1));
		found++;
	}

	searchOperandFrontMinus = tempValue.match(/^\-[0-9.]+/);
	if(tempValue.match(/^\-[0-9.]+/) !=null) {
		tempValue = tempValue.replace(/^\-[0-9.]+/, "0"+searchOperandFrontMinus[0]);
		found++;
	}



	searchMod = tempValue.match(/[0-9.-]+%[0-9.-]+/);
	if(searchMod!= null ) {
		tempValue = tempValue.replace(/[0-9.-]+%[0-9.-]+/, calculate(searchMod[0]));
		found++;
	}
	searchMat = tempValue.match(/[0-9.-]+\*[0-9.-]+/);
	if(searchMat!= null ) {
		tempValue = tempValue.replace(/[0-9.-]+\*[0-9.-]+/, calculate(searchMat[0]));
		found++;
	}
	
	searchDiv = tempValue.match(/[0-9.-]+\/[0-9.-]+/);
	if(searchDiv!= null ) {
		tempValue = tempValue.replace(/[0-9.-]+\/[0-9.-]+/, calculate(searchDiv[0]));
		found++;
	}

}
	return tempValue;

}
function resultOutput() {
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
	if(tempValue.charAt(tempValue.length-1) != '=') tempValue += '=';
	console.log(tempValue);
	if(tempValue == "Negalima dalyba iš nulio" || tempValue =="Negalima dalyba iš nulio=") {
		result = "Negalima dalyba iš nulio";
		var output = document.getElementById('output');
		output.value = result;
		console.log(result);
		result = "";
	}
	else{

		for(var i = 0; i < tempValue.length; i++){
			if(isNaN(tempValue.charAt(i))){
				if(tempValue.charAt(i) == '.'){
					i++;
				}
				else{

					oper.push(tempValue.charAt(i));
					firstop.push(tempValue.substr(tempAt, i));
					console.log(tempValue.charAt(i));
					tempAt =i+1;			
				}	
				
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
							case '%':
								result =  parseFloat(result) %parseFloat(firstop[j+1]);
								break;
						}

					}
				}
		
		var output = document.getElementById('output');
		if(result.length> 10**80){
			result = "Begalybė";
			output.value = result;
		}
		else{
		output.value = parseFloat(result);
		console.log(result);
		}
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
function deleteInputByOne(){
	input = document.getElementById('input');
	if(input.value.charAt(input.value.length-1) == '=') {
		input.value = "";
		tempValue = "";
		result = "";
	}
	else input.value = input.value.slice(0, input.value.length-1); 
}
