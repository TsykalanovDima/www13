let a = +prompt("Введите число: ");
	
	b = +prompt("Введите степень: ");

	z = 1;
	
function abc(a,b = 1) {
	if (typeof a !== 'number') return 'error'
	if (typeof b !== 'number') return 'error'

	return z = a**b
};

alert(abc(z))



