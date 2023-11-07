function upDown() {
	const a = document.getElementById("mestoNumber").value;

	if (a % 2 === 0) {
		document.getElementById("spot").innerHTML = "Верхняя полка";
	} 
	else {
		document.getElementById("spot").innerHTML = "Нижняя полка";
	};

	if (a <= 36) {
		document.getElementById("place").innerHTML = "Купе";
	} 
	else {
		document.getElementById("place").innerHTML = "Боковое место";
	};

	console.log(a)
}