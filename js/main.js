$(document).ready(function() {
    $('.learn-more-button').on('click', function() {
        console.log("testing");
        $('html, body').animate({
            scrollTop: $('.about').offset().top
        }, 1000)
    })
    $('.home-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#home').offset().top
        }, 1000)
    })
    $('.resume-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#resume').offset().top
        }, 1000)
    })
    $('.about-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1000)
    })
    $('.skill-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#skill').offset().top
        }, 1000)
    })
    $('.experience-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#experience').offset().top
        }, 1000)
    })
    $('.projects-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#project').offset().top
        }, 1000)
    })
    $('.contacts-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#contacts').offset().top
        }, 1000)
    })
})