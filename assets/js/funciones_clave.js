//precio = 400000
//precio_formateado = precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
//precioSpan = document.querySelector(".precio-inicial");
//precioSpan.innerHTML = precio_formateado;
//
//botonMas = document.querySelector(".btn_mas");
//botonMenos = document.querySelector(".btn_menos");
//cantidadSpan = document.querySelector(".cantidad");
//TotalSpan = document.querySelector(".valor-total");

//botonMas.addEventListener('click', () => {
//    // Cambiar el texto del span
//    cantidadSpan.innerHTML = Number(cantidadSpan.innerHTML) + 1;
//    precioTotal = Number(cantidadSpan.innerHTML) * Number(precio);
//    precioTotal_formateado = precioTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
//    TotalSpan.innerHTML = precioTotal_formateado;
//});
//
//botonMenos.addEventListener('click', () => {
//    // Cambiar el texto del span
//    contador = Number(cantidadSpan.innerHTML);
//    contador = Math.max(contador - 1, 0);
//    cantidadSpan.innerHTML = contador;
//    precioTotal = Number(cantidadSpan.innerHTML) * Number(precio);
//    precioTotal_formateado = precioTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');    
//    TotalSpan.innerHTML = precioTotal_formateado;
//});

dig_1 = document.querySelector("#digito_1");
dig_2 = document.querySelector("#digito_2");
dig_3 = document.querySelector("#digito_3");

botonValidar = document.querySelector(".validar");
resultado = document.querySelector(".mensaje");

botonValidar.addEventListener('click', () => {
    alert(dig_1.value+dig_2.value+dig_3.value);
    clave = dig_1.value+dig_2.value+dig_3.value;        
    if (clave == "911"){
        resultado.innerHTML = "password 1 correcto";
    } else if (clave == "714"){
        resultado.innerHTML = "password 2 correcto";
    } else {
        resultado.innerHTML = "password incorrecto";
    }
});
