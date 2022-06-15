let link = document.getElementById("videojs_html5_api").src;

document.body.children[0].remove();
document.body.children[0].remove();
document.body.children[0].remove();
document.head.remove();

let body = document.getElementsByTagName("body");
let center = document.createElement('center');
let a = document.createElement('a');

a.href = link;
a.innerText = "Right click > Save link";
a.style.color = "blue";
//a.style.color = "#4BDFDD";
a.style.letterSpacing = "2px";

document.body.appendChild(center);
center.appendChild(a);

