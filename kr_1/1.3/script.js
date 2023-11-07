function change() {
	var ru = document.getElementById("ru")
	var eng = document.getElementById("eng")

	if (ru.checked) {
		document.getElementsByClassName('block4')[0].innerHTML = 'Гущина'
		document.getElementsByClassName('block5')[0].innerHTML = 'Анна'
		document.getElementsByClassName('block6')[0].innerHTML = 'Андреевна'
	}
	if (eng.checked) {
		document.getElementsByClassName('block4')[0].innerHTML = 'Gushchina'
		document.getElementsByClassName('block5')[0].innerHTML = 'Anna'
		document.getElementsByClassName('block6')[0].innerHTML = 'Andreevna'
	}
}


