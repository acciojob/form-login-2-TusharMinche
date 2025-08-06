//your JS code here. If required.

function show(){
	let values = document.querySelectorAll("input");

	let str = "";
	let arr = ["First Name: ", " Last Name: ", " Phone Number: ", " Email ID: "];
	for(let i = 0; i < 4; i++){
		str += arr[i];
		str+= values[i].value;
	}

	alert(str);
}

window.onload = () => {
      document.getElementById("myForm").onsubmit = show;
    };