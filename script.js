console.log ("holi")
//Acedemos a una etiqueta del html desde el js, querySelector sirve para llamar a todo el grupo de etiquetas 
//const h1 = document.querySelector('h1') llamamos una etiqueta
//const parrafo = document.querySelector('.parrafo') llamamos una clase
const v1 = document.querySelector('#input1')//Llamamos por id's
const v2 = document.querySelector('#input2')
const btn = document.querySelector('#btnCalcular')
//apesar de ser una funcion, no se le pasan las parentesis 
btn.addEventListener('click', btnOnClick)
function btnOnClick(){
    console.log(Number(v1.value)+Number(v2.value))//Recordar que number nos permite capturar el valor numerico de la variable (Str a int)
    

}