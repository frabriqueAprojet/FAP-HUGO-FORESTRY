$('#carouselExample').on('slide.bs.carousel', function (e) {

    /*
        CC 2.0 License Iatek LLC 2018
        Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('#carouselExample.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('#carouselExample.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
/*
    Carousel

$('#carousel-example').on('slide.bs.carousel', function (e) {
   
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});*/
/*$('#carouselExample').on('slide.bs.carousel', function (e) {

    

    var $e = $(e.relatedTarget);
    
    var idx = $e.index();
    console.log("IDX :  " + idx);
    
    var itemsPerSlide = 8;
    var totalItems = $('#carouselExample.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('#carouselExample.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});*/
/*$ (document) .ready (function () 
{
    $ ('#carouselExample'). on ('slide.bs.carousel', function (e) 
    {
    
        var $e = $ (e.relatedTarget);
        var idx = $e.index ();
        var itemsPerSlide = 5;
        var totalItems = $ ('#countme'). length
        if (idx>= totalItems- (itemsPerSlide-1))
        {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i <it; i ++) 
            {
                // ajouter des diapositives à la fin
                if (e.direction == "left")
                {
                    $('#countme'). eq (i) .appendTo ('#prodinner '); 
                }
                else 
                {
                    $('#countme'). eq (0) .appendTo ('#prodinner');
                }
            }
        }
    })
}
);

*/