var inputs = document.getElementsByClassName('formulario__input');

for (var indice = 0; indice < inputs.length; indice ++)
{
	inputs[indice].addEventListener('keyup', function() {
		if(this.value.length >= 1) {
			this.nextElementSibling.classList.add('fijar');
		} else {
			this.nextElementSibling.classList.remove('fijar');
		}
	})
}
