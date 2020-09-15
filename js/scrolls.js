$(document).ready(function() {

    var inicio = $('#inicio').offset().top,
        blog = $('#blog').offset().top,
        contacto = $('#contacto').offset().top;
    console.log(inicio)

    $('#btn-inicio').on('click', function() {
        $('html, body').animate({
            'scrollTop': inicio
        }, 1000)
    });

    $('#btn-blog').on('click', function() {
        $('html, body').animate({
            'scrollTop': blog
        }, 1000)
    });

    $('#btn-contacto').on('click', function() {
        $('html, body').animate({
            'scrollTop': contacto
        }, 1000)
    });
});