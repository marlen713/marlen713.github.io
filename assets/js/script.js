var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

//JQUERY CODE
$(document).ready(function () {
    //SMOOTH SCROLL
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function(){
    $("#enviarMensaje").click(function(){
      alert( "Tu mensaje ha sido enviado, ¡Muchas Gracias! Te contactaremos a la brevedad...")
    });
  });
  