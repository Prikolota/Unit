$(document).ready(function(){
  
    // Находим блок с слайдами
    const owl = $('#clients-slider');
    // Запускаем карусель
    owl.owlCarousel({
        items: 1,
        loop: true
    });

    // Находим кастомные кнопки вперед/назад
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    // клик на кнопку назад
    prev.click(function () {
        owl.trigger('prev.owl.carousel');
    })

    next.click(function () {
        owl.trigger('next.owl.carousel');
    })

});

