
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
		}
	}
	operatorArray.push(operator);

}
function roots(op) {
	input = document.getElementById('input');
	var open = true;
			
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
		if(open == false ){
				tempValue = "";
				var searching = new String();
			searching = input.value.match(/\(([^)]+)\)/);
			var stringVar = searching[1];
			//searching = searching.replace(/\(|\)/, "");
			tempValue = input.value.replace(/\(([^)]+)\)/, calculate(stringVar));
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
	for(var j = 0; j < len; j++){
			if(j == 0 ) rez = firstop[0];
			console.log(rez);
		switch(oper[j]){
			case '+':
				rez = parseInt(rez, 10) + parseInt(firstop[j+1], 10);
				break;
			case '-':
				rez = parseInt(rez, 10) - parseInt(firstop[j+1], 10);
				break;
			case '*':
				rez = parseInt(rez, 10) * parseInt(firstop[j+1], 10);
				break;
			case '/':
				rez = parseInt(rez, 10) / parseInt(firstop[j+1], 10);
				break;

		}

	}
	console.log(rez);
	return rez;
}
function resultop() {
	input.value += '=';
	result = "";
	var firstop = new Array();
	var oper = new Array();
	var temp = 0;
	var tempAt = 0;
	if(tempValue.length <1) tempValue = input.value;

	for(var i = 0; i < tempValue.length; i++){
		if(isNaN(tempValue.charAt(i))) {
			firstop.push(tempValue.substr(tempAt, i));
			oper.push(tempValue.charAt(i));
			tempAt =i+1;				
			}

		}
	
	var len 
	len = oper.length;
	for(var j = 0; j < len; j++){
			if(j == 0 ) result = firstop[0];
			console.log(firstop[j+1]);
		switch(oper[j]){
			case '+':
				result = parseInt(result, 10) + parseInt(firstop[j+1], 10);
				break;
			case '-':
				result = parseInt(result, 10) - parseInt(firstop[j+1], 10);
				break;
			case '*':
				result = parseInt(result, 10) * parseInt(firstop[j+1], 10);
				break;
			case '/':
				result = parseInt(result, 10) / parseInt(firstop[j+1], 10);
				break;
			case '√':
				if(oper[j-1] == undefined) result = Math.pow(parseInt(firstop[j], 10), 1/2);
				else{
					switch(oper[j-1]){
						case '+':
							result = parseInt(result, 10) + Math.pow(parseInt(firstop[j+1], 10), 1/2);
							break;
						case '-':
							result = parseInt(result, 10) - Math.pow(parseInt(firstop[j+1], 10), 1/2);
							break;
						case '*':
							result = parseInt(result, 10) * Math.pow(parseInt(firstop[j+1], 10), 1/2);
							break;
						case '/':
							result = parseInt(result, 10) / Math.pow(parseInt(firstop[j+1], 10), 1/2);
							break;
					}
				}
				break;
		}

	}
	var output = document.getElementById('output');
	output.value = result;
	result = "";
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
}
function deleteInput(){
	var input = document.getElementById('input');
	var v = input.value;
	if(v.length >0){
		v.substring(0, v.length-1);
		input.value = v;
	}
}
