var content = 'El viaje apareció en medio de sueños sin forma, de ideas sin mapa. Ya había subido al bus antes de partir..Miré desde lo alto de mi imaginación para recordar un lugar en el que había estado sin tomarme el tiempo de ver.';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('.p1').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});


var content = 'Un rincón repleto de relatos, donde la fuerza de las costumbres aún resisten, por encima de la hipnótica idea del progreso.';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('.p2').each(function (j) {
    $(this).delay(300 * j).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});

