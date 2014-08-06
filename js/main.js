var images = ['images/homepage1.jpg','images/homepage5.jpg'];

$('.images').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'});


// $(window).scroll(function() {
//     // var headerHeight = $("#top-section").height();
//     var headerHeight = $("#top-section").height();
//     var navHeight = $("#top-section").height();

//     // var navBar = $()
//     if ($(this).scrollTop() > headerHeight) {
//         $(".nav").addClass("header-fixed");
//         $("#top-section").css("padding-top",navHeight);
//     } else {
//         $(".nav").removeClass("header-fixed");
//         $("#top-section").css("padding-top","0");

//     }
// });

var nav = $(".nav").first(),
    navTop = nav.offset().top;
    navHeight = nav.css('height');

$(window).scroll(function() {
    var currentTop = $(this).scrollTop();

    if (currentTop > navTop) {
        nav.addClass("sticky-nav");
        nav.parent().css('padding-bottom', navHeight);
    } else if (currentTop < navTop) {
        nav.removeClass("sticky-nav");
        nav.parent().css('padding-bottom', 'inherit');
    }
});

setInterval(function() {
    var quotes = [
        "RARE BREED GLOUCESTERSHIRE PIGS",
        "HAPPY PIGS = TASTY PORK",
        "ALL ORGANIC LOCAL PRODUCE",
        "WE GIVE FORK ABOUT OUR PORK",
        "A GREAT DAY OUT FOR ALL THE FAMILY",
        "LIAM AND BECKI ARE ACE",

    ],
        randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    $(".quote")
        .fadeOut('slow', function() {
            $(this).html("<h1>" + randomQuote + "</h1>").fadeIn('slow');
        });

}, 5000);
