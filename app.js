function modoOscuro() {
    let titulo = document.querySelector("h1");
    titulo.classList.toggle('tituloDark');

    let fondo = document.querySelector("body");
    fondo.classList.toggle('bodyOscuro');

    let items = document.querySelectorAll('.item');
    items.forEach( item => item.classList.toggle('itemOscuro'));

    let tituloItems = document.querySelectorAll("h2");
    tituloItems.forEach( item2 => item2.classList.toggle('itemsEstilos'));

    let parrafos = document.querySelectorAll("p");
    parrafos.forEach( item3 => item3.classList.toggle('itemsEstilos'));
}