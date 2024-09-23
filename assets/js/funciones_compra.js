const imagen1 = document.querySelector('.imagen_1');
const imagen2 = document.querySelector('.imagen_2');
const imagen3 = document.querySelector('.imagen_3');

imagen1.addEventListener('click', () => {
  imagen1.classList.toggle('seleccionado');
});
imagen2.addEventListener('click', () => {
    imagen2.classList.toggle('seleccionado');
});
imagen3.addEventListener('click', () => {
    imagen3.classList.toggle('seleccionado');
});  

const sticker1 = document.querySelector('.sticker_1');
const sticker2 = document.querySelector('.sticker_2');
const sticker3 = document.querySelector('.sticker_3');

botonValidar = document.querySelector(".validar");
resultado = document.querySelector(".mensaje");

botonValidar.addEventListener('click', () => {
    if (Number(sticker1.value) < 0) {
        sticker1.value = 0
    }
    if (Number(sticker2.value) < 0) {
        sticker2.value = 0
    }
    if (Number(sticker3.value) < 0) {
        sticker3.value = 0
    }
    cantidad = Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value);        
    if (cantidad > 10){
        resultado.innerHTML = "Llevas demasiados stickers!!";
    } else {
        resultado.innerHTML = "Llevas " + String(cantidad) + " stickers";
    }
});
