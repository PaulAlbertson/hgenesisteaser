function StompCarousel(){
    var currentID = 0;
    var previousID = 0;
    var transitionSpeed = 3000;
	var carouselImageHeight;
	var carouselImageWidth = $('#carouselCardsHolder ul li img').width();
    var carouselPosition;
    var carouselWidth = $('#jumboContainer').outerWidth();
	
	function setInitialWidth(){
		//$('#carouselCardsHolder').css({'width':'6000px'});
		$('#carouselCardsHolder ul li img').css({'width':carouselWidth+'px'});
	};
	
    $("#carouselButtons").hover(function(event) {
        switch(event.target.id)
        {
            case "carouselBackButton":
                $('#carouselBackButton').toggleClass('carouselButtonOverState');
            break;
            case "carouselForwardButton":
                $('#carouselForwardButton').toggleClass('carouselButtonOverState');
            break;
        }
    }, function() {
        switch(event.target.id)
        {
            case "carouselBackButton":
                $('#carouselBackButton').toggleClass('carouselButtonOverState');
            break;
            case "carouselForwardButton":
                $('#carouselForwardButton').toggleClass('carouselButtonOverState');
            break;
        }
    });
    $("#carouselButtons").click(function(event) {
        switch(event.target.id)
            {
                case "carouselBackButton":
					animateSlide("backward");
                break;
                case "carouselForwardButton":
					animateSlide("forward");
                break;
                
                default:
            }
    });
// HERE HERE
	// $("#jumboContainer").hammer().on('swipeleft', function(event) {
	//         animateSlide("forward");
	//     });
	function animateSlide(dir){
		switch(dir){
			case	"forward":
				currentID++;
				//console.log('currentID: '+currentID);
				carouselPosition = -(carouselWidth*currentID);
				console.log("carouselPosition: "+carouselPosition);
				$('#carouselCardsHolder ul').animate({'left' : -(carouselWidth*currentID)},{queue:false, duration:500},function(){  

					//get the first list item and put it after the last list item (that's how the infinite effects is made) '  
					 //$('#carouselCardsHolder ul li:last').after($('#carouselCardsHolder ul li:first'));  
					// 
					//$('#carouselCardsHolder ul').css({'left' : '-210px'});  
				});
				
			break;
			case	"backward":
				//console.log('currentID: '+currentID);
				//console.log('carouselPosition/currentID: '+carouselPosition/currentID);
				// carouselWidth * id might get it
				$('#carouselCardsHolder ul').animate({'left' : (carouselPosition-(carouselPosition/currentID))},{queue:false, duration:500},function(){  

					//get the first list item and put it after the last list item (that's how the infinite effects is made) '  
					 //$('#carouselCardsHolder ul li:last').after($('#carouselCardsHolder ul li:first'));  
					// 
					//$('#carouselCardsHolder ul').css({'left' : '-210px'});  
				});
			currentID--;
			break;
			
			default:		
		};
	}
	function onBrowserResize(){
				
		//$('#carouselCardsHolder').css({'width':carouselImageHeight+'px'});
		//carouselImageWidth = $('#carouselCardsHolder ul li img').width();
	    carouselWidth = $('#jumboContainer').outerWidth();
		$('#carouselCardsHolder ul').css({'left' : -(carouselWidth*currentID)});
	};
	
	function scInit(){
		// Responsive set for width
		setInitialWidth();
		
	};
	
	$(window).resize(function(){
		carouselWidth = $('#jumboContainer').outerWidth();
		console.log("carouselWidth: "+carouselWidth);
		$('#carouselCardsHolder ul li img').css({'width':carouselWidth+'px'});
		//carouselImageHeight = $('#carouselCardsHolder ul li img').height();
		onBrowserResize();
	});
	
	scInit();
}

stompCarousel = new StompCarousel();
