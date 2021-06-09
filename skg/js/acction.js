$(document).ready(function() {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 2500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 900);
        return false;
    });
});

setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 2500);

setTimeout(function(){
    $('.loader_bgs').fadeToggle();
}, 1500);