// Storing elements from HTML in JS to perform tasks

const h1Elements= document.getElementById("Dom-Features")
const h1= document.getElementById("Dom-Manipulation")

//Now i will use Tagname and classname
const fruits = document.getElementsByTagName("h2")
const LiElements = document.getElementsByTagName("li2");

const Veg = document.getElementsByClassName("vegetables")  

//performing tasks Get ElementByID
h1.style.backgroundColor = "Yellow";
h1Elements.style.backgroundColor = "Red";


// Performing task on CLassName

Veg[0].style.backgroundColor = "green";
Veg[1].style.backgroundColor = "skyblue";
Veg[2].style.backgroundColor = "violet";
 

//Tag name will access the Tags, like i have two h2 elemets Fruits and vgetables
fruits[1].style.backgroundColor = "brown";
for(h2Elements of fruits){
    h2Elements.style.backgroundColor =" red";
}

LiElements[2].style.backgroundColor ="lightgreen"


//Array.from(Myfruits).forEach(fruit =>{
  //  fruit.style.backgroundColor = "green"
//});