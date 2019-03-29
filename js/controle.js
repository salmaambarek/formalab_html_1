alert('hello world');
var x =2;
document.write("type de x:"+ typeof x);
var h="5";
var saisie = prompt("entrer un nombre:");
var nb =Math.floor(Math.random()*100)+1
do{
    var x=Number(prompt('entrer un entier'));
 if(!isNaN(x)){
     if(x==nb){
         console.log('Bravo')
     }
     else{console.log('echec')}

}
 
 }while(x!=nb|| rep!=8)

