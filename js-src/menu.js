$( document ).ready(function() {
    var $menuIcon = $('.hamburger-icon'),
        $menu = $('.menu');

    $menuIcon.on('click', showMenu);

    function showMenu() {
        $menu.slideToggle( "slow").toggleClass('active');
    }
});

