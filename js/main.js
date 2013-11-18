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
        
        app: '../app'
    },
    shim: {
        /* Set bootstrap dependencies (just jQuery) */
        'bootstrap' : ['jquery']
    }
});

require(['jquery', 'less', 'hammer'], function($) {
    console.log("Loaded :)");
    //less.watch();
	
	//$('#stageShade').animate()
	
    return {};
});