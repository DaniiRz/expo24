document.addEventListener('DOMContentLoaded', function () {

    const contenedorFooter = document.getElementById("footerIndex");
    contenedorFooter.innerHTML = generarFooterIndex();

    const contenedorMenuPrivado = document.getElementById("menuContent");
    contenedorMenuPrivado.innerHTML = generarMenuIndex();
});

