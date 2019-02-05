function resizeEvents(){
    $( window ).resize( function( evt ) {
        // $( "#orientation" ).text( "This device is in " + evt.orientation + " mode!" );
        if(window.innerWidth > window.innerHeight){
            
        } else {
            
        }
    });
}

function addListeners(){
    // var navID="";
    var currentSection = 0;

    $('body')[0].onresize = function() {resizeEvents()};
    
}



//Run anon function on page fully loaded
$(document).ready(function(){
    addListeners();
});