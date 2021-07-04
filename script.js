function func() {
	let a = +prompt('число')
	
	for (i = 2; i < a / 2; i++) {
		
		if (a % 2 <= 1) {
			console.log(a % 2);
			return NaN
		}
	}
	return true
}

alert(func())
	

	