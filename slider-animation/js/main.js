/* 
	swiper: alamacena el contenedor con la clase mySwiper
	definido en htlm
*/
let swiper = new Swiper('.mySwiper', {
	/* 
        paginacion: es donde se define las guias para el
		desplazamiento del slider el parametro a 
		type: 'fraccion' muestra un slider numerico 
		type: 'progressabr' muestra un slieder con una 
		barra de progreso
    */
	pagination: {
		el: '.swiper-pagination',
		// type: 'fraction',
		type: 'progressbar',
	},

	/* 
		navigation: implementa la funcionalidad de ir 
		atras o adelante presionanado los iconos < >
		del slider
	*/
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
