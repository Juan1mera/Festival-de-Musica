

document.addEventListener('DOMContentLoaded', function(){
    CrearGaleria();
})

function CrearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    for (let i = 1; i <= 16; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galeria'

        //Event Handler
        imagen.onclick = function(){
            mostraImagen(i);
        }

        galeria.appendChild(imagen)
    }
}
function mostraImagen(i){
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen Galeria'



    //generar Modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    
    modal.onclick = cerrarModal;

    //Boton cerrar
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = "X"
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)       
    modal.appendChild(cerrarModalBtn)


    //Agregar al html
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

}

function cerrarModal(){
    

    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
    setTimeout(() => {
        modal?.remove()
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500);        
    
}