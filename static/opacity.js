$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('#viz-toggle').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;
        }
    });
});
$(window).scroll(function() {
    var totalHeight = $(window).height();

        $('.card').css({
        opacity: function() {
            var scrollTop     = $(window).scrollTop(),
                elementOffset = $(this).offset().top,
                distance      = (elementOffset - scrollTop);

            
            opacity =  1 - ( ( 1 - ( (totalHeight - distance ) / totalHeight ) ) ** 8 ) ;
            if (opacity >= 0.95){
                return 1;
            }
            return opacity;
        }
    });
});

// $(window).scroll(function () {
//     if($(this).scrollTop()>window.innerHeight / 4){
//     $('.card').fadeIn();
//     }
//     if($(this).scrollTop()<=window.innerHeight / 4){
//         $('.card').fadeOut();
//     }
// });