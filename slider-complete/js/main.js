// ----------------- start call html elements ----------------- //

/* 
	$boxSlider: se encarga de almacenar el elemento html con
	la clase box_slider
*/
let $boxSlider = document.querySelectorAll('.box_slider');

/* 
	$dotSlider: se encarga de almacenar el elemento html con
	la clase dot_slider
*/
let $dotSlider = document.querySelectorAll('.dot_slider');

// ----------------- end call html elements ----------------- //

// --------------------- start function slider ------------------- //

/*
	definimos una funcion nombrada slider a la cual pasamos un
	parametro
*/
function show_slide(index) {
	// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ stage condicionals ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ //

	/* 
		condicional aplicado a la accion de ir atras, SI index es 
		menor a la cantidad de cajas sliders el valor de slider_index 
		sera siempre menos uno generando un slider infinito
	*/
	if (index < 0) {
		slider_index = $boxSlider.length - 1;
	}

	/* 
		condicional aplicado a la accion de ir adelante, SI index 
		es mayor o igual a la cantidad de cajas sliders el valor 
		de slider_index sera siempre cero generando un slider infinito
	*/
	if (index >= $boxSlider.length) {
		slider_index = 0;
	}

	// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ stage forEach ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ //

	/*
		realizamos un recorrido forEach en la variable 
		$boxSlider y pasamos 2 parametros
	*/
	$boxSlider.forEach((element, i) => {
		/*
			recordemos que el parametro i nos da la 
			posicion de un elemento dentro de un arreglo
			por ende pasamos ese valor a $boxSlider y
			le definimos el estilo display = 'none' para
			remover el slider seleccionado
		*/
		$boxSlider[i].style.display = 'none';

		/*
			recordemos que el parametro i nos da la 
			posicion de un elemento dentro de un arreglo
			por ende pasamos ese valor a $dotSlider con 
			esto removemos del slider seleccionado la clase
			js_dot_active definida en la hoja de estilos
		*/
		$dotSlider[i].classList.remove('js_dot_active');
	});

	/*
		pasamos como parametro a $boxSlider la variable
		slider_index y le definimos el estilo display = 'block' 
		para mostrar el slider seleccionado
	*/
	$boxSlider[slider_index].style.display = 'block';

	/*
		pasamos como parametro a $dotSlider la variable
		slider_index con esto añadimos al slider seleccionado 
		la clase js_dot_active definida en la hoja de estilos
	*/
	$dotSlider[slider_index].classList.add('js_dot_active');
}

/* 
	slider_index: esta variable se encarga de definir el punto
	de partida del slider
*/
let slider_index = 0;

/* 
	llamado de la funcion esta requiere un valor ya que recibe un
	parametro por ende pasamos la variable slider_index
*/
show_slide(slider_index);

// --------------------- end function slider ------------------- //

// --------------------- start click icons slider ------------------- //

/* 
	$iconPrev: se encarga de almacenar el elemento html con
	el ID icon-prev
*/
let $iconPrev = document.querySelector('#icon-prev');

/* 
	$iconPrev: se encarga de almacenar el elemento html con
	el ID icon-next
*/
let $iconNext = document.querySelector('#icon-next');

/* 
	generamos en $iconPrev un evento click
*/
$iconPrev.addEventListener('click', () => {
	/*
		pasamos la funcion slider y como parametro la 
		variable slider_index con la funcionalidad --
		esto hace que segun la posicion que tenga el slider
		al dar click en $iconPrev este resta en 1, lo que nos
		permite regresar al slider anterior 
	*/
	show_slide(--slider_index);
});

/* 
	generamos en $iconNext un evento click
*/
$iconNext.addEventListener('click', () => {
	/*
		pasamos la funcion slider y como parametro la 
		variable slider_index con la funcionalidad ++
		esto hace que segun la posicion que tenga el slider
		al dar click en $iconNext este suma en 1, lo que nos
		permite ir al slider siguiente 
	*/
	show_slide(++slider_index);
});

// --------------------- end click icons slider ------------------- //

// --------------------- start click dots slider ------------------- //

/*
	realizamos un recorrido forEach en la variable $dotSlider y
	pasamos 1 parametro
*/
$dotSlider.forEach((dot) => {
	/* 
		generamos en el parametro dot un evento click y definimos 
		una funcion nota no permite funciones de flecha
	*/
	dot.addEventListener('click', function () {
		let dots = Array.prototype.slice.call(this.parentElement.children);

		let dot_index = dots.indexOf(dot);

		show_slide((slider_index = dot_index));
	});
});

// --------------------- end click dots slider ------------------- //

// --------------------- start automatic slider ------------------- //

/*
	hacemos uso de la propiedad setInterval para llamar la funcion slider, 
	pasamos como parametro la variable slider_index con la funcionalidad ++
	esto hace que el slider vaya hacia adelante de manera automatica 
	finalemnte le definimos a setInterval un valor de 2000 retrasando el
	desplazamiento de este
*/
setInterval(() => {
	show_slide(++slider_index);
}, 2000);

// --------------------- end automatic slider ------------------- //
