$(document).ready(function () {
    var windowWidth = $(window).width();

    if(windowWidth <=767) {
        $('.clients__row-first img').each(function() {
            var $this = $(this);
            $('.clients__row-second').append($this);
        });
        var swiper = new Swiper('.cards .container-fluid', {
            slidesPerView: 'auto',
            pagination: {
              el: '.swiper-pagination-cards',
              clickable: true,
            },
          });
          var swiper = new Swiper('.clients .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: {
              el: '.swiper-pagination-clients',
              clickable: true,
            },
          });
        // $('.cards .container-fluid').slick({
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     variableWidth: true,
        //     dots: true,
        //     arrows: false,
        // });
        // $('.clients__row-second').slick({
        //     slidesToShow: 4,
        //     slidesToScroll: 4,
        //     variableWidth: true,
        //     dots: true,
        //     arrows: false,
        // });
    }

    if(windowWidth >= 1025) {
        $('.card').tilt({
            maxTilt: 10,
            perspective: 500,
            speed: 250,
            glare: true,
            maxGlare: .5,
        })
    
        $('.btn').attr('data-tilt-axis','x');
        $('.btn').tilt({
            maxTilt: 20,
            perspective: 500,
            speed: 250,
        })
    }


    $('.approach__main').click(function () {
        $('<iframe class="approach__iframe" frameborder="0" allowfullscreen></iframe>')
            .attr("src", $(this).attr('data-src'))
            .appendTo($(this).parent());

        //$(this).parent().fadeOut().hide();
        $(this).fadeOut().hide();
    });
});

// $(document).on('mousemove touch', function (e) {
//     magnetize('.approach__bg', e);
//     magnetize('.mask__bg-1', e);
//     magnetize('.mask__bg-2', e);
// });


function magnetize(el, e) {
    var mX = e.pageX,
        mY = e.pageY;
    const item = $(el);

    const customDist = item.data('dist') * 20 || 120;
    const centerX = item.offset().left + (item.width() / 2);
    const centerY = item.offset().top + (item.height() / 2);

    var deltaX = Math.floor((centerX - mX)) * -0.45;
    var deltaY = Math.floor((centerY - mY)) * -0.45;

    var distance = calculateDistance(item, mX, mY);

    if (distance < customDist) {
        TweenMax.to(item, 0.5, {
            y: deltaY,
            x: deltaX,
            scale: 1.1
        });
    } else {
        TweenMax.to(item, 0.6, {
            y: 0,
            x: 0,
            scale: 1
        });
    }
}

function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
}