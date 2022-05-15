let element = document.getElementsByTagName("p")[0];
let element2 = document.getElementsByTagName("p")[1];
let element3 = document.getElementsByTagName("p")[2];
element.style.color ="#800080";
element2.style.color = "#800080";
element3.style.color = "#800080";

let headingTittle=document.querySelector("h1");
headingTittle.textContent ="Main Content Here"
//


let navAncore = document.getElementsByTagName("a")[4];
navAncore.insertAdjacentHTML("beforebegin",'<a href="#">link 1</a>');
let navAncore0 = document.getElementsByTagName("a")[6];
navAncore0.insertAdjacentHTML("afterend", '<a href="#">link 4</a>');
let navAncore1 = document.getElementsByTagName("a")[9];
navAncore1.insertAdjacentHTML("afterend", '<a href="#">link 7</a>');
/*
for (let i = 1; i <= 7; i++) {
    if (i != 2 && i != 3 && i != 5 && i != 6  ) {
        let myAncore = document.createElement("a");
        myAncore.setAttribute("href", "#");
        let myAncoreText = document.createTextNode(` Link  ${i}`);
        myAncore.appendChild(myAncoreText);
        navAncore.appendChild(myAncore);
       
    }
}

*/
//console.log(navAncore)

let asidePar = document.querySelector("aside");
let element4 = document.getElementsByTagName("p")[3];
element4.outerHTML="<P id='pr0'>Tittle 1</P> <p id='pr1'> comment 1</p>";
pr0.style.color="red";
pr1.style.color="red";
let element5 = document.getElementsByTagName("p")[5];
element5.outerHTML = "<P id='pr2'>Tittle 2</P> <p id='pr3'> comment 2</p>";
pr2.style.color = "blue";
pr3.style.color = "blue";

let element6 = document.getElementsByTagName("p")[7];
element6.outerHTML = "<P id='pr4'>Tittle 3</P> <p id='pr5'> comment 3</p>";
pr4.style.color = "green";
pr5.style.color = "green";







