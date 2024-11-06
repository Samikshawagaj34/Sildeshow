const images = [ "./img/apple.jpg","./img/banana.jpg","./img/mango.jpg","./img/pineapple.jpg"]
let index = 0;
const slide = document.getElementById('slide');
function next()
{
    if(index < images.length -1){

    
   index++;
}
else{
    index = 0;
}
   slide.src = images[index]



}