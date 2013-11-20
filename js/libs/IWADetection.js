IWADeviceDetection = function(){
};

IWADeviceDetection.prototype.detect = function(){

/* Still working out Retina 1.35, 1.5 , 2, 3*/
	if (Modernizr.touch && Modernizr.mq('only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)')){
    	return 'touch-retina';
     };    
    if (Modernizr.touch && Modernizr.mq('only all and (max-width: 480px)')){
    	return 'touch-max-480';
    };
    if (Modernizr.touch && Modernizr.mq('only screen and (min-width: 481px) and (max-width:768px) ')){
    	return 'touch-min-481-max-768';
    };
    if (Modernizr.touch && Modernizr.mq('only screen and (min-width: 768px)')){
    	return 'touch-min-768';
    };
    if(Modernizr.touch){
    	return 'touch';
    };
    if(!Modernizr.touch){
    	return 'no-touch';
    };
};
