function resizeEvents(evt){
    if(window.innerWidth > window.innerHeight){
        console.log( "This device is in landscape mode!" );
    } else {
        console.log( "This device is in portrait mode!" );
    }
}

function navEvents(navView){
    if(navView == 1){
        $( "#homeNav" ).css({"border-bottom-color": "#131313", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"});
        $( "#projectsNav" ).removeAttr('style');
        $( "#contactNav" ).removeAttr('style');

        $('.home').css({"display":"block"});
        $('.projects').css({"display":"none"});
        $('.contact').css({"display":"none"});
    } else if (navView == 2) {
        $( "#projectsNav" ).css({"border-bottom-color": "#131313", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"}); 
        $( "#homeNav" ).removeAttr('style'); 
        $( "#contactNav" ).removeAttr('style'); 

        $('.home').css({"display":"none"});
        $('.projects').css({"display":"grid"});
        $('.contact').css({"display":"none"});
    } else if (navView == 3) {
        $( "#contactNav" ).css({"border-bottom-color": "#131313", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"});
        $( "#homeNav" ).removeAttr('style');
        $( "#projectsNav" ).removeAttr('style');

        $('.home').css({"display":"none"});
        $('.projects').css({"display":"none"});
        $('.contact').css({"display":"block"});
    } else {
      // do nothing    
    }

}

function clickableDiv() {
    $link = $(this).find("a").attr("href");
    window.open($link);
}

function getMostVisible( $elements ) {
    var $element = $(),
        viewportHeight = $( window ).height(),
        max = 0;

    $elements.each( function() {
        var visiblePx = getVisibleHeightPx( $( this ), viewportHeight );

        if ( visiblePx > max ) {
            max = visiblePx;
            $element = $( this );
        }
    } );

    return $element;
}

function getVisibleHeightPx( $element, viewportHeight ) {
    var rect = $element.get( 0 ).getBoundingClientRect(),
        height = rect.bottom - rect.top,
        visible = {
            top: rect.top >= 0 && rect.top < viewportHeight,
            bottom: rect.bottom > 0 && rect.bottom < viewportHeight
        },
        visiblePx = 0;

    if ( visible.top && visible.bottom ) {
        // Whole element is visible
        visiblePx = height;
    } else if ( visible.top ) {
        visiblePx = viewportHeight - rect.top;
    } else if ( visible.bottom ) {
        visiblePx = rect.bottom;
    } else if ( height > viewportHeight && rect.top < 0 ) {
        var absTop = Math.abs( rect.top );

        if ( absTop < height ) {
            // Part of the element is visible
            visiblePx = height - absTop;
        }
    }

    return visiblePx;
}



function addListeners(){

    $(".projectDisplay").click(clickableDiv);

    /* $('.header ul li').on('click', function (e) {
        e.preventDefault();
        navID = $(this).attr("id");
        nLoc = navID.indexOf("N");
        currentSection = navID.substring(0, nLoc);
    
        $('html, body').animate({
            scrollTop: $("."+currentSection).offset().top
        }, 500, 'linear');
    }); */

    $( "#homeNav" ).click(e =>{
        window.history.pushState("object or string", "Title", "/home");

        localStorage.setItem('url',1);
        navEvents(curURL = localStorage.getItem('url'));
    })
    $( "#projectsNav" ).click(e =>{
        window.history.pushState("object or string", "Title", "/portfolio");
        localStorage.setItem('url',2);
        
        navEvents(curURL = localStorage.getItem('url'));
    })
    $( "#contactNav" ).click(e =>{
        window.history.pushState("object or string", "Title", "/contact");

        localStorage.setItem('url',3);
        navEvents(curURL = localStorage.getItem('url'));
    })

    
    /* $(function() {
        $(window).on('scroll', function() {
            var $element = getMostVisible( $( '.mostVisible' ) ).attr('class');
            // console.log($element);
            if($element == "home mostVisible"){
                window.history.pushState("object or string", "Title", "/home/");

                localStorage.setItem('url',1);
                navEvents(curURL = localStorage.getItem('url'));
            } else if ($element == "projects mostVisible"){
                window.history.pushState("object or string", "Title", "/projects/");

                localStorage.setItem('url',2);
                navEvents(curURL = localStorage.getItem('url'));
            } else {
                window.history.pushState("object or string", "Title", "/contact/");

                localStorage.setItem('url',3);
                navEvents(curURL = localStorage.getItem('url'));
            }
          
        });
    }); */    


    $(document.body)[0].onresize = function() {resizeEvents()};
    
}



//Run anon function on page fully loaded
$(document).ready(function(){    
    
    navEvents(curURL = localStorage.getItem('url'));

    addListeners();

    
});