/* 
	swiper: variable que almacena el contenedor con la
	clase myswiper definido en html
*/
let swiper = new Swiper('.mySwiper', {
	/* 
		navigation: implementa la funcionalidad de ir atras
		o adelante presionando los iconos < > del slider
	*/
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

    /* 
        loop: esta propiedad nos permite repetir el slider
        de manera infinita
    */
    loop: true
});
