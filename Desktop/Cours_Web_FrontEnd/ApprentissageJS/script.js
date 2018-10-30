console.log("Hello John");

			/* Variables et nombres */

/* Variable string = chaîne de caractère */
var name = "John";
console.log(name)

/* Variable nombre */
var x = 12;
console.log(x);

/* Variable décimaux etr plus */
var y = 12.56;
console.log(y);

/* afficher le nombre de caractère dans une string*/
var nameLength = name.length;
console.log(nameLength);

/* afficher à quel position est un élément, ici c'est John qui est en positionn 6 */
var myString = "Hello John"
var position = myString.indexOf("John");
console.log(position)


/* remplacer un élément*/
var myString = "Hello John"
var myNewString = myString.replace("John","Tom");
console.log(myNewString)

/* additionner des variables*/
var string1 = "Hello"
var string2 = "John"
var NewString = string1 + " " + string2;
console.log(NewString)



			/* Les opérateurs */

/* addition soustraction mutiplication division */
var charles = 12;
var denechere = 19;
var result = charles+denechere
console.log(result);


/* le modulo (%), pour dire ce qu'il reste dans une multiplication/division */
var test1 = 12;
var test2 = 5;
var modulo = test1%test2
console.log(modulo);

/* les ++ ajoute plus 1 à la valeur */
var x = 12;
var resultat = ++x
console.log(resultat);

/* les -- enlève 1 à la valeur */
var x = 12;
var resultat = --x
console.log(resultat);

/* raccourcis d'écriture, exemple addition avec += */
var x = 12;
var y = 12;
x+=y
console.log(x);


			/* Booleans et comparaisons */

/* boolean est soit vrai soit faux*/
var myBoolean = true;
console.log(myBoolean);


/* est ce que x est strictement égale à 5, est ce q'un élément est égale à uquelque chose*/
var x = 5;
var myBoolean = (x===5); /* === pose si c'est égale*/
console.log(myBoolean); /*la réponse est true*/

/* est ce que x est strictement différent à 5, est ce q'un élément est différent à uquelque chose*/
var x = 5;
var myBoolean = (x!==5); /* !== pose si c'est différent*/
console.log(myBoolean); /*la réponse est false*/

/* est ce que x est strictement supérieur à 5, est ce q'un élément est supérieur à quelque chose*/
var x = 5;
var myBoolean = (x>12); /* !== pose si c'est supérieur*/
console.log(myBoolean); /*la réponse est false*/

/* comparer deux éléments avec &&, ce qui signifie un élément ET un autre */
var x = 5;
var y = 12;
var myBoolean = (x>3 && y<15) 
console.log(myBoolean); /*la réponse est true car les deux éléments sont vrais / si une des parties est fausse alors il affiche faux */

/* comparer deux éléments avec || , ce qui signifie un élément OU un autre */
var x = 5;
var y = 12;
var myBoolean = (x>3 || y<10) 
console.log(myBoolean); /*si une partie est vrai alors tout est vrai*/

/*recap*/
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)


/*l'inverse de quelque chose avec ! avant l'élément*/
console.log(!true)
console.log(!false)


			/* Les conditions */

/*

if (condition1) 
{
	console.log("executes ce code")
}
else if (condition2)
{
	console.log(" la condition 1 n'est pas vraie mais la 2 l'est")
}

else 
{
	console.log("alors executes ce code là")
}

*/

var speed = 30;

if(speed<80)
{
	if(speed<50)
	{
		console.log("acceleres un peu");
	}
	else
	{
		console.log("tu roules à la bonne vitesse");
	}
}
else if (speed<100)
{
	console.log("il faut que tu ralentisses");
}
else 
{
	console.log("C'est dangereux tu roules trop vite")
}

/*

switch(variable)
{
	case 1 :
		break;
	case 2 :
		break;

		default
}

*/

var favoriteColor = "blue";

switch(favoriteColor)
{
	case "blue":
	console.log("Wouah ! Le bleu c'est génial")
		break;
	case "red" : 
		console.log("je veux une voiture rouge")
		break;

		default:
		console.log("je ne connais pas ta couleur")
}

			/* Les boucles */

var number = 0;

while (number<3)
{
	console.log(number);
	number++; /* j'augmente le numéro de +1*/
}


/* */

var number = 0;

do {
	console.log(number);
	number++; /* j'augmente le numéro de +1*/
}
while (number<3)


/* */


for(var number = 0; number < 5; number++)
{
	console.log(number);
}

/* */


		/* Les fonctions*/

/*
function name(parameter1, parameter2, etc)
{
	code  a executer
	return result;
}
*/

function multiply(number1, number2)
{
	return number1*number2;
}

var a = 5;
var b = 6;
var result = multiply(a,b);

console.log(result);


