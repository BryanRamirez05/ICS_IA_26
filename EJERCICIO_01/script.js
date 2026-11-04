const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(function(tarjeta) {

    tarjeta.addEventListener("click", function() {

        const titulo = tarjeta.querySelector("h3").textContent;

        const descripcion = tarjeta.dataset.description;

        alert(titulo + "\n\n" + descripcion);

    });

});