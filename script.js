const images = [ "./img/apple.jpg","./img/banana.jpg","./img/mango.jpg","./img/pineapple.jpg"]
let index = 0;
const slide = document.getElementById('slide');
function next()
{
   index++;
   slide.src = images[index]



}