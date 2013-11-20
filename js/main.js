requirejs.config({
    appDir: ".",
    baseUrl: "js",
    paths: { 
        /* Load jquery from google cdn. On fail, load local file. */
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min', 'libs/jquery-2.0.3.min'],
        
        /* This will need to be removed for deployment. Only using client side less for development. Build server side for deployment.*/
        'less':['libs/less-1.5.0.min'],

		/* Trying out Hammer.js for touch events https://github.com/EightMedia/hammer.js*/
		'hammer':['libs/hammer.min'],
		
		/* JS Video player from Edmunds banners*/
		'jsvideo': ['libs/video-js/video.min'],
		
		/* Custom build of modernizr that just detects touch and html5*/ 
		'modernizr':['libs/modernizr.custom.06566'],
		
		/* IWA detection for screen resolution and touch*/
		'iwadetection':['libs/IWADetection'],
		
		// Try not to load this here. Load after touch/resolution detection
		//'raphael':['libs/raphael.min'],
		
        
        app: '../app'
    },
    shim: {
        /* Set bootstrap dependencies (just jQuery) */
        //'bootstrap' : ['jquery']
    }
});

require(['jquery', 'less', 'hammer','jsvideo','modernizr','iwadetection'], function($) {
    console.log("Loaded :)");
    //var hyundaiVideoPlayer = _V_("hyundai-video");
    //var currentVideoTime = hyundaiVideoPlayer.currentTime();

    //alert("Pixel Ratio - "+window.devicePixelRatio+" Detect Value: "+IWADeviceDetection.prototype.detect());
    var retinaCheck = IWADeviceDetection.prototype.detect();
    //alert("Detect Value: "+retinaCheck);
    if (retinaCheck == 'no-touch'){
    	$.getScript( "js/libs/raphael-min.js", function() {
		  console.log( "Non touch - Raphael Loaded" );
		});
    };
    
    //hyundaiVideoPlayer.pause();

    less.watch();
	
	//$('#stageShade').animate()
	
    return {};
});