document.addEventListener("mousemove", function(e){
    var body = document.querySelector('body');
    var bubles = document.createElement('span');

    var x = e.offsetX;
    var y = e.offsetY;

    var size = Math.random() * 100;
    bubles.style.width = `${size}px`;
    bubles.style.height = `${size}px`;

    bubles.style.left = `${x - size/2}px`;
    bubles.style.top = `${y - size/2}px`;
    
    body.appendChild(bubles);

    setTimeout(function(){
        bubles.remove();
    }, 4000)
})