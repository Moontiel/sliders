/* 
	swiper: alamacena el contenedor con la clase mySwiper
	definido en htlm
*/
let swiper = new Swiper('.swiper-container', {
	/* 
        paginacion: es donde se define las guias circulares 
		del slider, modificando el parametro clickable podemos
		elegir la manera en que estos se pueden visualizar
    */
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	/* 
        genera margen general a cada targeta aplicada a
        todas las medidas responsive
    */
	spaceBetween: 30,

	/* 
        breakpoints: puntos de ruptura para el diseño responsive el
		parametro slidesPerView elejimos cuantos elementos se pueden
		ver en pantalla
    */
	breakpoints: {
		624: {
			slidesPerView: 1,
			/* 
                spaceBetween: genera margen individual a cada
                targeta segun definamos una medida responsive 
            */
			// spaceBetween: 30,
		},
		625: {
			slidesPerView: 2,
		},
		820: {
			slidesPerView: 3,
		},
		1080: {
			slidesPerView: 4,
		},
	},
});
