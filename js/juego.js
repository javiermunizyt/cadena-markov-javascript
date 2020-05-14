/*
Tutorial completo en mi canal de YouTube
https://youtu.be/Y484uXoyJMU

Creado por: Javier Muñiz
Para el canal: Programar es increíble.

Inspirado en el código del profesor Daniel Shiffman publicado en su canal The Coding Train:
https://www.youtube.com/watch?v=eGFJ8vugIWA
*/


const orden = 6;
var ngramas = {};	//objeto ngrama



function creaNgrama(){
	for(i=0; i<=txt.length - orden; i++){
		var ngrama = txt.substring(i,i+orden);

		if(!ngramas[ngrama]){
			ngramas[ngrama] = [];
		}
		ngramas[ngrama].push(txt.charAt(i+orden));
	}

	console.log(ngramas);
}



function markov(){
	var posibilidadesArray;
	var posiSigLetra;
	var letraSiguiente;

	var ngramaActual = txt.substring(0,orden);
	var resultado = ngramaActual;

	for(var i=0; i<200; i++){
		posibilidadesArray = ngramas[ngramaActual];
		posSigLetra = Math.floor(Math.random()*posibilidadesArray.length);
		letraSiguiente = posibilidadesArray[posSigLetra];

		resultado += letraSiguiente;	//añadimos una letra

		var inicioPos = resultado.length - orden;
		var finPos = resultado.length;
		ngramaActual = resultado.substring(inicioPos,finPos);

	}

	console.log(resultado);

}
