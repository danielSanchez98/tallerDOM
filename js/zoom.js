let zoom=document.getElementById('zoom-in');
let zoomOut=document.getElementById('zoom-out');

zoom.addEventListener('click',function(){
    img=document.querySelector('.contenedor img');
    let width=img.width;
    let height=img.height;
    let i=0;
      let intervalo=  setInterval(function(){
            width+=5;
            height+=5;
            img.style.height=`${height.toString()}px`;
            img.style.width=`${width.toString()}px`;
            console.log(width)
            i++;
            if(i===5){
                clearInterval(intervalo)
                i=0;
            }

        },25)
})

zoomOut.addEventListener('click',function(){
    img=document.querySelector('.contenedor img');
    let width=img.width;
    let height=img.height;
    let i=0;
      let intervalo=  setInterval(function(){
            width-=5;
            height-=5;
            img.style.height=`${height.toString()}px`;
            img.style.width=`${width.toString()}px`;
            console.log(width)
            i++;
            if(i===5){
                clearInterval(intervalo)
                i=0;
            }

        },25)
})