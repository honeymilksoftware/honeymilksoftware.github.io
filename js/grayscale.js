/*!
 * HONEY MILK SOFTWARE WEBSITE
 * BY JAMES FARMER
 *
 * Using Grayscale Bootstrap Theme (http://startbootstrap.com)
 *
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

/*
// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
});
*/

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}



//var colors = ["red", "green", "blue", "purple", "yellow", "orange"];
/*
// This is not intended to be the best solution, just to demonstrate the basic algorithm.
for (var r=0; r<256; r++) {
    for (var g=0; g<256; g++) {
        for (var b=0; b<256; b++) {
            // Assume we have 8 bits of alpha to use.
            for (var a=0; a<256; a++) {
                console.log('rgba(' + [r,g,b,a/255].join(',') + ')');
            }
        }
    }
}
*/
function hexToRgb(hex) {    
// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    console.log(result)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

var goingForward = true;
var currentColor = 0;
var endColor = 16777216;
function switchColor() {
    if (goingForward == true) {
        if (currentColor >= endColor) {
            goingForward = false;
        } else {
            currentColor = currentColor + 10;
        }
    } else {
        if (currentColor <=0 ) {
            goingForward = true;
        } else {
            currentColor = currentColor - 10;
        }
    }

    var colour = '#' + ('00000' + currentColor.toString(16)).slice(-6);
    var hexColor = hexToRgb(colour);
    var newColor = "rgba(" + hexColor.r + ", " + hexColor.g + " , " + hexColor.b + ", 0.4)";
    $('.well').css('background-color', newColor);

    setTimeout(switchColor, 50);
}

// linear interpolation between two values a and b
// u controls amount of a/b and is in range [0.0,1.0]
lerp = function(a,b,u) {
    return (1-u) * a + u * b;
};

fade = function(element, property, start, end, duration) {
  var interval = 10;
  var steps = duration/interval;
  var step_u = 1.0/steps;
  var u = 0.0;
  var theInterval = setInterval(function(){
    if (u >= 1.0){ clearInterval(theInterval) }
    var r = parseInt(lerp(start.r, end.r, u));
    var g = parseInt(lerp(start.g, end.g, u));
    var b = parseInt(lerp(start.b, end.b, u));
    var colorname = 'rgba('+r+','+g+','+b+', 0.4)';
    $('.well').css(property, colorname);
    u += step_u;
  }, interval);
};

forward = function(element, property, start, end, duration) {
    fade(element, property, start, end, duration);
  setTimeout(function(){
    backwards(element, property, start, end, duration)
  },10000);
};

backwards = function(element, property, start, end, duration) {
    fade(element, property, end, start, duration);
  setTimeout(function(){
    forward(element, property, start, end, duration)
  },10000);
};

// in action
el = document.getElementById('.well'); // your element
property = 'background-color';       // fading property
startColor = {r:204, g:  255, b:  255};  // red
endColor   = {r:  0, g:102, b:204};  // dark turquoise

forward(el,'background-color',startColor,endColor,10000);
