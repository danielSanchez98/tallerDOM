class Div{
    constructor(id, parent){
        this.id=id;
        this.parent=parent
    }
    
    crearDiv(div){
        let elemento = document.createElement('div');
        elemento.innerHTML=`${this.id+1}`;
        elemento.classList.add('div');
        elemento.setAttribute('id',`${this.id+1}`)

        div.parent.appendChild(elemento);

    }

    eliminarDivs(parent){
        parent.innerHTML='';

    }

    eliminarDivsImpares(elements){

        elements.forEach(function(impar){
            let numOdd= Number(impar.innerText);
            if((numOdd%2)===1){
                impar.parentNode.removeChild(impar);
            }
            
        });

    }

    eliminarDivUser(elements,id){
        elements.forEach(function(element,index){
            idUser=Number(element.innerText);
            if(idUser===id){
                elements[index].parentNode.removeChild(elements[index]);

            }
        })
        

    }



}

// Agregar un Div
document.getElementById('add').addEventListener('click',function (){
    id=getId()
    
    parent=document.querySelector('.contenedor');

    const div= new Div(id,parent);

    div.crearDiv(div);
    


})

// Eliminar Divs

document.getElementById('remove').addEventListener('click',function (){
    id=getId()
    parent=document.querySelector('.contenedor');

    const div= new Div(id,parent);

    div.eliminarDivs(parent);
    


}) 

//Eliminar Divs impares
document.getElementById('remove-odd').addEventListener('click',function (){
    id=getId()
    parent=document.querySelector('.contenedor');
    elementos= document.querySelectorAll('.contenedor div')
    const div= new Div(id,parent);
    div.eliminarDivsImpares(elementos);
}) 

//Eliminar Div Usuario
document.getElementById('remove-user').addEventListener('click',function (){
    id=getId()
    parent=document.querySelector('.contenedor');
    
    elementos= document.querySelectorAll('.contenedor div')
    idUser=Number(prompt('ingrese el numero del Div que desea borrar'));
    const div= new Div(id,parent);
    div.eliminarDivUser(elementos,idUser);
}) 

function getId(){
    if(document.querySelector('.contenedor').childElementCount>0){

        id=Number(document.querySelector('.contenedor').lastChild.innerText);
    }else{
        
        id=document.querySelector('.contenedor').childElementCount;
        

    }
    return id;
}