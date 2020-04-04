let rojo = document .getElementById('color-1');
let azul = document .getElementById('color-2');
let amarillo = document .getElementById('color-3');
let violeta = document .getElementById('color-4');
let verde = document .getElementById('color-5');

rojo.addEventListener('mouseover', function(e){    
    document.body.style.background=e.target.style.backgroundColor;
})
rojo.addEventListener('mouseout', function(e){    
    document.body.style.background="white";
})

azul.addEventListener('mouseover', function(e){    
    document.body.style.background=e.target.style.backgroundColor;
})
azul.addEventListener('mouseout', function(e){    
    document.body.style.background="white";
})

amarillo.addEventListener('mouseover', function(e){    
    document.body.style.background=e.target.style.backgroundColor;
})

amarillo.addEventListener('mouseout', function(e){    
    document.body.style.background="white";
})

violeta.addEventListener('mouseover', function(e){    
    document.body.style.background=e.target.style.backgroundColor;
})

violeta.addEventListener('mouseout', function(e){    
    document.body.style.background="white";
})

verde.addEventListener('mouseover', function(e){    
    document.body.style.background=e.target.style.backgroundColor;
})
verde.addEventListener('mouseout', function(e){    
    document.body.style.background="white";
})