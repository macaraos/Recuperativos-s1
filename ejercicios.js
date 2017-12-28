//EJERCICIO 4
//Primero creo una funcion para encontrar el numero mas pequeño
function buscar(num){
	return num === masChico;
};
//Creo la variable con numeros
var arr = [34,67,4,23,1,100]
//Uso el metodo Math.min() que devuleve el valor mas bajo
var masChico = Math.min(...arr);
console.log(masChico);
//Uso el metodo findIndex(), ya que devuelve el índice del primer elemento encontrado en la función
console.log(arr.findIndex(buscar));




//EJERCICIO 8
//Creo variable con los numeros
var arr = [2, 5, 4, 7];
//Uso el metodo indexOf para saber la posicion del numero requerido
arr.indexOf(5);




//EJERCICIO 9
//Creo dos variables con los numeros a sumar y un arreglo vacio donde va a ir el resultado
var arr1 = [4,8,1,6,3,5];
var arr2 = [2,1,3,4,7,8];
var resultado = [];
//Luego se suman los indices del arreglo 1 y arreglo 2
for(i = 0; i < arr1.length; i++){
	resultado[i] =arr1[i]+arr2[i];
}
console.log(resultado);




//EJERCICIO 10
//Creo una funcion donde a cada nombre se le asigna un asiento
function Asiento(nombre){
	//Creo variable con los nombres
	var nombres = ["Allison", "Belen", "Nadia", "Marcia", "Ale", "Fabian"];
	//Entro en un ciclo para determinar la posicion de los nombres
	for(var i = 0; i < nombres.length; i++){
		if(nombres[i] === nombre) {
			//+1 para que comience en la posicion 1 y no en la 0
			return i+1;
		}
	}
	//Si la persona no tiene asiento retorna 0
	return 0;
}
console.log(Asiento("Nadia"));




//EJERCICIO 11
//Creo variables notas, suma y promedio
var nota1;
var nota2;
var nota3;
var nota4;
var nota5;
var nota6;
var nota7;
var nota8;
var nota9;
var nota10;
var suma;
var promedio;
//Luego pregunto notas y verifico que sean numeros
nota1=prompt("ingrese su primera nota","");
nota1=parseInt(nota1);
nota2=prompt("ingrese su segunda nota","");
nota2=parseInt(nota2);
nota3=prompt("ingrese su tercera nota","");
nota3=parseInt(nota3);
nota4=prompt("ingrese su cuarta nota","");
nota4=parseInt(nota4);
nota5=prompt("ingrese su quinta nota","");
nota5=parseInt(nota5);
nota6=prompt("ingrese su sexta nota","");
nota6=parseInt(nota6);
nota7=prompt("ingrese su septima nota","");
nota7=parseInt(nota7);
nota8=prompt("ingrese su octava nota","");
nota8=parseInt(nota8);
nota9=prompt("ingrese su novena nota","");
nota9=parseInt(nota9);
nota10=prompt("ingrese su decima nota","");
nota10=parseInt(nota10);
//Realizo calculo
suma = nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10;
promedio = suma/10;
//Muestro promedio
document.write("su promedio es: ");
document.write(promedio);
//Arroja alert, aprobando con notas igual o superior a 4, y reprobando con notas inferiores a 4
if(promedio >=4){
	alert("aprobo curso")
}else{
	alert("no aprobo curso")
}




//EJERCICIO 12
//Comprobar si la palabra escrita es palindroma
var palabras;
palabras = prompt("ingrese palabra");
//Primero creo la funcion que va a determinar si una palabra es palindroma
function esPalindroma(palabra){
	//Uso el metodo split() para separar los caracteres, el metodo reverse() para invertir la palabra,
	//y el metodo join() para unirla
	if(palabra === palabra.split('').reverse().join('')){
		document.write("si lo es");//Para el usuario
		return true;//Para la consola
	}else{
		document.write("no lo es");
		return false;
	}
}
console.log(esPalindroma(palabras));




//EJERCICIO 13
//Primero creo la funcion que va a determinar si una palabra es anagrama de la otra
function anagrama (palabra1,palabra2){
//Ahora con una condicion vamos a ver si es verdadero o falso
//Uso el metodo split() para separar los caracteres, el metodo sort() para ordenar alfabeticamente,
//y el metodo join() para unir los caracteres
if(palabra1.split("").sort("").join("") === palabra2.split("").sort("").join("")){
	return true;
}
return false;
}
console.log(anagrama("ana","casa"));




//EJERCICIO 14
//Creo la variable con los 10 numeros
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Creo un array vacio donde van a ir los numeros pares
var par = [];
//Uso el metodo forEach para ejecutar la función una vez por cada elemento del array
num.forEach(function(num, index) {
	//Compruebo si los numeros son pares
	if (num % 2 === 0) {
		//uso el metodo push() para que me devuelva el array con todos los numeros pares
		par.push(num);
	}
});
console.log(par)




//EJERCICIO 15
//Primero creo una funcion para multiplicar los numeros del arreglo por doce
function multiplicar(num) {
	return num * 12;
}
//Creo la variable de cuatro numeros positivos
var arreglo = [2, 3, 4, 5];
//Uso el metodo map para transformar los elementos, multiplicandolos por 12
var resultado = arreglo.map(multiplicar);
console.log(resultado);