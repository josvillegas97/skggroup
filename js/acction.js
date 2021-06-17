$(document).ready(function() {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 3550) {
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



window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("secnav");
    const links = document.querySelectorAll("#secnav a");

  if (document.documentElement.scrollTop > 100) {
    navBar.classList.add("pa-fixed-header");

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.add('text-black');
    }

  } else {
    navBar.classList.remove("pa-fixed-header");
    
    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove('text-black');
    }
  }
}