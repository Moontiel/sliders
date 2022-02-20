/* 
	swiper: alamacena el contenedor con la clase mySwiper
	definido en htlm
*/
let swiper = new Swiper('.mySwiper', {
	/* 
        direccion: esta propiedad nos permite definir como
		queremos que sea el desplazamiento de nuestro slider 
		en este ejemplo lo definimos con el valor vertical
    */
	direction: 'vertical',

	/* 
        paginacion: es donde se define las guias para el
		desplazamiento del slider el parametro clickable: true,
		permite cambiar el sldier desde los iconos o puntos
    */
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
