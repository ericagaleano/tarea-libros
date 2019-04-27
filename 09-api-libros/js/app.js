 // paso 1
 let plantilla = $(".contenedor").html(); // recupera la plantilla en formato string y guarda la variable

 $(".contenedor").html("");  // elimina el contenido del elemento con la clase .row

 $.get('https://3a8i3.github.io/libros/', function( datos ){
 	mostrarDatos(datos);
 	console.log(datos);
 });

 function mostrarDatos( d ){   //codigo para crear función
 	//console.log(d);

 	//para recorrer el array
 	for (let i = 0; i < d.length; i++) {   
 		//console.log(d[i].musica);
 	
 	let plantJQ = $(plantilla);

 	plantJQ.find('.titulo').text(d[i].titulo); 	
 	plantJQ.find('.anho').text(d[i].anho);
 	plantJQ.find('.editorial').text(d[i].editorial);

 	plantJQ.find('.foto').attr('src', d[i].autor.foto);
 	plantJQ.find('.portada').attr('src', d[i].portada);

 	plantJQ.find('.autor').text(d[i].autor.nombre);
 	plantJQ.find('.fecha-autor').text(d[i].autor.nacimiento.fecha);
 	plantJQ.find('.pais-autor').text(d[i].autor.nacimiento.pais);
 	plantJQ.find('.bio-autor').text(d[i].autor.biografia);

 	plantJQ.find('.temas').text(d[i].temas);
 	plantJQ.find('.resumen').text(d[i].resumen);
 	

 	$('.contenedor').append(plantJQ);

 	}
 }

// let mostrar = () => {  --------esa es otra opcion de como crear una función