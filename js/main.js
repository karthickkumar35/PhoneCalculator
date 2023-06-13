let cal = document.getElementById("output");

function display(num){
	cal.value+=num;
}
function calculate(){
	cal.value=eval(cal.value);
}
function c(){
	cal.value ="";
}
function del(){
	cal.value = cal.value.slice(0,-1);
}

