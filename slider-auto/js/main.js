/*
	añadimos al objeto window un evento load el cual una
	vez haya cargado la pagina activa una funcion
*/
window.addEventListener('load', function () {
	/* 
		index: esta variable se encarga de definir el punto
		de partida del slider
	*/
	let index = 0;

	/* 
		imagen: guardamos en un array las imagenes que vamos a
		implementar en nuestro slider, importante definir al
		final la imagen que viene por defecto en el html
	*/
	let images = [
		'./assets/img/img-min-3.jpg',
		'./assets/img/img-min-4.jpg',
		'./assets/img/img-min-1.jpg',
	];

	/* 
		carruselAuto: definimos una funcion
	*/
	function sliderAuto() {
		/* 
			haciendo uso de document. seleccionamos el atributo
			de la img definido en el html seguido de su otro
			atributo src este sera igual al arreglo de imagenes
			que recibe la variable index
		*/
		document.carusel.src = images[index];

		/* 
			si el valor de index es menor a la cantidad de imagenes
			en el arreglo index incrementa su valor en 1 mostrando
			de esta manera la siguiente imagen en el slider
		*/
		if (index < 2) {
			index++;
		} else {
			/* 
				de lo contrario si index es mayor a la cantidad de imagenes
				en el arreglo index vuelve a su valor de 0 mostrando asi la
				primera imagen del slider
			*/
			index = 0;
		}
	}

	/*
		hacemos el llamado de la funcion carruselAuto haciendo
		uso de setInterval al cual le definimos un valor de 
		3000 gnerando de esta manera el slider automatico
	*/
	setInterval(sliderAuto, 3000);
});
