var count = 0;
var artifactCount = 0;
var deathCount = 1;
var winCount = 0
var bool = true;
var winBool = false;


// Defines if the browser is Firefox
var FireFox = !(window.mozInnerScreenX == null); 

// Defines if the browser is Safari
var Safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') >0;

// Defines if the browser is Internet Explorer
var IE = false || !!document.documentMode;

//If Safari is open, then animate down a sign that displays text.
$(function ifSafarai(){
    if (Safari == true){
        
        $('#showSafariSupport').stop().animate({ 
                top: "+=170"
            }, 2000, function() {});
        
        $('#showSafariSupport').css({ "display":"block"});
        $('#showSafariSupportText').css({ "display":"block"});
    }

}); 

// Function you can call to play "walk.wav"/"walk.mp3",
// checks if the browser "!= Safari"/"IE == true".
function playStep(){
    if ( IE == true){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'AUDIO/MP3/walk.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        audioElement.play();
    }
    
    if (Safari == true){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'AUDIO/MP3/walk.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
    
    }
    
    if (Safari != true){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'AUDIO/WAV/walk.wav');
        audioElement.setAttribute('autoplay', 'autoplay');
        audioElement.play();
    }
}

// Function you can call to play "dead.wav"/"dead.mp3",
// checks if the browser "!= Safari"/"IE == true".
function playDead(){
    
    if ( IE == true){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'AUDIO/MP3/dead.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');  
        audioElement.play();
    }
    
    if (Safari != true){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'AUDIO/WAV/dead.wav');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.play();
    }
}

// Function you can call to play "artifact.wav"/"artifact.mp3",
// checks if the browser "!= Safari"/"IE == true".
function playArtifact(){
    
    if ( IE == true){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'AUDIO/MP3/artifact.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');  
        audioElement.play();
    }
    
    if (Safari != true){
     var audioElement = document.createElement('audio');
     audioElement.setAttribute('src', 'AUDIO/WAV/artifact.wav');
     audioElement.setAttribute('autoplay', 'autoplay');
     audioElement.play();
    }
}

// Function you can call to play "win.wav"/"win.mp3",
// checks if the browser "!= Safari"/"IE == true".
function playWin(){
    
 if ( IE == true){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'AUDIO/MP3/win.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        audioElement.play();
 }    
    
if (Safari != true){
 var audioElement = document.createElement('audio');
 audioElement.setAttribute('src', 'AUDIO/WAV/win.wav');
 audioElement.setAttribute('autoplay', 'autoplay');
 audioElement.play();
}
} 

// Function you can call to play "menu.wav"/"menu.mp3",
// checks if the browser "!= Safari"/"IE == true".
function playMenu(){
    
    if ( IE == true){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'AUDIO/MP3/menu.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');  
        audioElement.play();
    }
    
    if (Safari != true){
     var audioElement = document.createElement('audio');
     audioElement.setAttribute('src', 'AUDIO/WAV/menu.wav');
     audioElement.setAttribute('autoplay', 'autoplay');
     audioElement.play();
    }
}

// Function you can call to play "offmenu.wav"/"offmenu.mp3",
// checks if the browser "!= Safari"/"IE == true".
function playMenuOff(){
    
    if ( IE == true){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'AUDIO/MP3/offMenuButton.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');  
        audioElement.play();
    }
    
    if (Safari != true){
     var audioElement = document.createElement('audio');
     audioElement.setAttribute('src', 'AUDIO/WAV/offMenuButton.wav');
     audioElement.setAttribute('autoplay', 'autoplay');
     audioElement.play();
    }
} 

// Function you can call to play "menuButton.wav"/"menuButton.mp3",
// checks if the browser "!= Safari"/"IE == true".
function playMenuButton(){
    
    if ( IE == true){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'AUDIO/MP3/menuButton.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');  
        audioElement.play();
    }
    
    if (Safari != true){
     var audioElement = document.createElement('audio');
     audioElement.setAttribute('src', 'AUDIO/WAV/menuButton.wav');
     audioElement.setAttribute('autoplay', 'autoplay');
     audioElement.play();
    }
}

//Checks if winBool is true/false and changes div starting position if collision.
function resetPlayer(){
 if (winBool == false)
 {
  $('#main').css({"top":"40px", "left": "52px"});
 }
 else {
  $('#main').css({"top":"420px", "left": "52px"});
 }
}

// Defines what happens when you press "playHardModeButton"/"muteHardModeButton",
// plays "menu.wav"/"menu.mp3" when pressing the buttons, plays/pauses "creepyBackground.wav"/"creepyBackground.mp3",
// checks if the browser "!= Safari"/"IE == true", adds css attributes (colors/images).
$(function showHideHardModeMode(){
    if (Safari != true){
   
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'AUDIO/WAV/creepyBackground.wav');
        audioElement.setAttribute('autoplay', 'autoplay');
        audioElement.pause();
    }
    
    if ( IE == true){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'AUDIO/MP3/creepyBackground.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');  
        audioElement.pause();
    }
    
     $('#playHardModeButton').click(function() {
         $('body').css({ "background-image":"url(../game/SPRITES/bgPatternHardMode.png)"});
         $('#showSafariSupport').css({ "background-color":"#960012"});
         $('#showSafariSupportText').css({ "background-color":"#960012"});
         $('#world').css({ "background-color":"#960012"});
         $('#menuBox').css({ "background-color":"#960012"});
         $('#infoSlide').css({"background-color":"#960012"});
         $('#menuSlide').css({"background-color":"#960012"});
         $('#infoPanel').css({ "background-color": "#960012" });
         $('#menuToggleOn').css({"border-color":"#434343"});
         $('#infoToggleOn').css({"border-color":"#434343"});
         $('#musicMenu').css({"background-color":"#960012", "border-color":"#434343"});
         $('#keyboardMenu').css({"background-color":"#960012", "border-color":"#434343"});
         $('#statTracker').css({"background-color":"#960012", "border-color":"#434343"});
         $('#musicHardModeMenu').css({"background-color":"#960012", "border-color":"#434343"}); 
         $('#buttonMenu').css({ "background-color": "#960012" });
         $('#monster').css({ "background-image": "url('../game/SPRITES/hardModeMonster.png')"});
         $('#monster1').css({ "background-image": "url('../game/SPRITES/hardModeMonster.png')"});
         $('#main').css({ "background-image": "url('../game/SPRITES/hardModeMain.png')" });
         $('#movePlatform').css({ "display": "none", "width": "0px", "height": "0px"});
         $('#movePlatform1').css({ "display": "none", "width": "0px", "height": "0px"});
         $('#movePlatform2').css({ "display": "none", "width": "0px", "height": "0px" });
         $('#moveHardModePlatform').css({ "display":"block", width: "185px", "height": "80px"});
         $('#moveHardModePlatform1').css({ "display": "block", "width": "145px", "height": "120px"});
         $('#moveHardModePlatform2').css({ "display": "block", "width": "145px", "height": "120px"});
         $('#movePlatform3').css({ "display": "block", "width":"85px", "height":"370px" });
         $('#movePlatform4').css({ "display": "block", "width":"75px", "height":"250px" });
         $('#movePlatform5').css({ "display": "block", "width":"375px", "height":"120px" });
         $('#movePlatform6').css({ "display": "block", "width":"110px", "height":"330px" });
         $('#movePlatform7').css({ "display": "block", "width":"135px", "height":"210px" });
         $('#movePlatform8').css({ "display": "block", "width":"130px", "height":"210px" });
         $('#movePlatform9').css({ "display": "block", "width":"445px", "height":"120px" });
         $('#movePlatform10').css({ "display": "block", "width":"125px", "height":"330px" });
         $('#movePlatform11').css({ "display": "block", "width":"140px", "height":"330px" });
         $('#artifact').css({ "background-image": "url('../game/SPRITES/hardModeArtifact.png')" });
         $('#artifact1').css({ "background-image": "url('../game/SPRITES/hardModeArtifact.png')" });
         $('#artifact2').css({ "background-image": "url('../game/SPRITES/hardModeArtifact.png')" });
         $('#artifact3').css({ "background-image": "url('../game/SPRITES/hardModeArtifact.png')" });
         $('#qrCode').css({ "background-image": "url('../game/SPRITES/qrCode1.png')"});
         if ( IE == true){
            audioElement.play();
            playMenuButton();
         }
         if (Safari != true){
    
            audioElement.play();
            playMenuButton();
         }
        
     }); 
    
      $('#muteHardModeButton').click(function() {
         $('body').css({ "background-image":"url(../game/SPRITES/bgPattern.png)"});
         $('#showSafariSupport').css({ "background-color":"#0089a2"});
         $('#showSafariSupportText').css({ "background-color":"#0089a2"});
         $('#world').css({ "background-color":"#0089a2"});
         $('#menuBox').css({ "background-color":"#0089a2"});
         $('#menuSlide').css({"background-color":"#0089a2"});
         $('#infoSlide').css({"background-color":"#0089a2"});
         $('#menuToggleOn').css({"border-color":"#014f5d"});
         $('#infoToggleOn').css({"border-color":"#014f5d"});
         $('#musicMenu').css({"background-color":"#0089a2", "border-color":"#014f5d"});
         $('#keyboardMenu').css({"background-color":"#0089a2", "border-color":"#014f5d"});
         $('#statTracker').css({"background-color":"#0089a2", "border-color":"#014f5d"});
         $('#musicHardModeMenu').css({"background-color":"#0089a2", "border-color":"#014f5d"});
         $('#infoPanel').css({ "background-color": "#00788e" });
         $('#buttonMenu').css({ "background-color": "#00788e" });
         $('#monster').css({ "background-image": "url('../game/SPRITES/monster.png')" });
         $('#monster1').css({ "background-image": "url('../game/SPRITES/monster.png')" });
         $('#main').css({ "background-image": "url('../game/SPRITES/main.png')" });
         $('#movePlatform').css({ "display": "block", "width": "185px", "height": "80px"});
         $('#movePlatform1').css({ "display": "block", "width": "145px", "height": "120px"});
         $('#movePlatform2').css({ "display": "block", "width": "145px", "height": "120px"});
         $('#moveHardModePlatform').css({ "display": "none", "width": "0px", "height": "0px"});
         $('#moveHardModePlatform1').css({ "display": "none", "width": "0px", "height": "0px"});
         $('#moveHardModePlatform2').css({ "display": "none", "width": "0px", "height": "0px"});
         $('#movePlatform3').css({ "display": "none", "width":"0px", "height":"0px"  });
         $('#movePlatform4').css({ "display": "none", "width":"0px", "height":"0px"  });
         $('#movePlatform5').css({ "display": "none", "width":"0px", "height":"0px"  });
         $('#movePlatform6').css({ "display": "none", "width":"0px", "height":"0px"  });
         $('#movePlatform7').css({ "display": "none", "width":"0px", "height":"0px"  });
         $('#movePlatform8').css({ "display": "none", "width":"0px", "height":"0px"  });
         $('#movePlatform9').css({ "display": "none", "width":"0px", "height":"0px"  });
         $('#movePlatform10').css({ "display": "none", "width":"0px", "height":"0px"  });
         $('#movePlatform11').css({ "display": "none", "width":"0px", "height":"0px"  });
         $('#artifact').css({ "background-image": "url('../game/SPRITES/artifact.png')" });
         $('#artifact1').css({ "background-image": "url('../game/SPRITES/artifact.png')" });
         $('#artifact2').css({ "background-image": "url('../game/SPRITES/artifact.png')" });
         $('#artifact3').css({ "background-image": "url('../game/SPRITES/artifact.png')" });
         $('#qrCode').css({ "background-image": "url('../game/SPRITES/qrCode.png')"});
         if (Safari != true){
            audioElement.pause();
             playMenuButton();
         }
         
         
        
     }); 
}); 

// Plays/pauses "background.wav"/"background.mp3" when you press "playButton"/"muteButton",
// checks if the browser "!= Safari"/"IE == true"
$(function playBackground(){
 if (Safari != true){

 var audioElement = document.createElement('audio');
 audioElement.setAttribute('src', 'AUDIO/WAV/background.wav');
 audioElement.setAttribute('autoplay', 'autoplay');
 audioElement.pause();
    }    
    
if ( IE == true){
var audioElement = document.createElement('audio');
 audioElement.setAttribute('src', 'AUDIO/MP3/background.mp3');
 audioElement.setAttribute('autoplay:false', 'autoplay');  
}
    
$('#muteButton').click(function() {
    playMenuButton();
   audioElement.pause();
 });
    
$('#playButton').click(function() {
   playMenuButton();
   audioElement.play();
 });
 
}); 

 // Defines button "downButton" to move "main" +10 pixes up,
 // plays sound "walk.wav"/"walk.mp3" when pressed, adds +1 to Step-counter.
 $(function down() {
	$('#downButton').click(function() {
	count++
    playStep();
 
	$("#counter").html("Steps: "+count);
        $('#main').stop().animate({ 
			top: "+=10px"
			}, 150, function() {});
    });
});

 // Defines button "upButton" to move "main" -10 pixes up,
 // plays sound "walk.wav"/"walk.mp3" when pressed, adds +1 to Step-counter.
 $(function up() {
	$('#upButton').click(function() {
    playStep();    
	count++
	$("#counter").html("Steps: "+count);
        $('#main').stop().animate({ 
			top: "-=10px"
			}, 150, function() {});
    });
});
 
 // Defines button "rightButton" to move "main" +10 pixes left,
 // plays sound "walk.wav"/"walk.mp3" when pressed, adds +1 to Step-counter.
 $(function right() {
	$('#rightButton').click(function() {
    playStep();
	count++
	$("#counter").html("Steps: "+count);
        $('#main').stop().animate({ 
			left: "+=10px"
			}, 150, function() {});
    });
});

 // Defines button "leftButton" to move "main" -10 pixes left,
 // plays sound "walk.wav"/"walk.mp3" when pressed, adds +1 to Step-counter.
 $(function left() {
	$('#leftButton').click(function() {
    playStep();
	count++
	$("#counter").html("Steps: "+count);
		$('#main').stop().animate({ 
			left: "-=10px"
			}, 150, function() {});
	});
}); 

 // Defines arrows left/right/up/down on keyboard to animate "main" 20 pixels to each direction,
 // plays sound "walk.wav"/"walk.mp3" each time you press one key, adds +1 to Step-counter.
 $(function movementKeyboard() {
    $(document).keydown(function(event){

        

        switch (event.keyCode) {
                case 37:
                count++
                playStep();
                $("#counter").html("Steps: "+count);
                $('#main').stop().animate({ 
                    left: "-=20px"
                }, 150, function() {});
                    break;
                    
                case 38:
                count++
                playStep();
                $("#counter").html("Steps: "+count);
                $('#main').stop().animate({ 
                    top: "-=20px"
                }, 150, function() {});
                    break;
                    
                case 39:
                count++
                playStep();
                $("#counter").html("Steps: "+count);
                $('#main').stop().animate({ 
                    left: "+=20px"
                }, 150, function() {});
                    break;
                
                case 40:
                count++
                playStep();
                $("#counter").html("Steps: "+count);
                $('#main').stop().animate({ 
                    top: "+=20px"
                }, 150, function() {});
                    break;
            }});
}); 

 // Defines "monster" animation to animate in a loop. 
 $(function monsterMove() {
		$('#monster').animate({ top: "+=245px",}, 4000)
		.animate({left: "+=198px"}, 4000)
		.animate({top: "-=245px"}, 4000)
		.animate({top: "+=245px"}, 4000)
		.animate({left: "-=198px"}, 4000)
		.animate({top: "-=245px"}, 4000, function() { monsterMove(); });
});  

 // Defines "monster1" animation to animate in a loop. 
 $(function monsterMove1() {
		$('#monster1').animate({ top: "-=280px",}, 4000)
		.animate({left: "-=165px"}, 4000)
		.animate({top: "+=270px"}, 4000)
		.animate({top: "-=270px"}, 4000)
		.animate({left: "-=155px"}, 4000)
        .animate({top: "+=270px"}, 4000)
        .animate({top: "-=270px"}, 4000)
        .animate({left: "-=155px"}, 4000)
        .animate({top: "+=330px"}, 4000)
        .animate({left: "-=145px"}, 4000)
        .animate({top: "-=280px"}, 4000)
        .animate({top: "+=280px"}, 4000)
        .animate({left: "+=145px"}, 4000)
        .animate({top: "-=330px"}, 4000)
        .animate({left: "+=155px"}, 4000)
        .animate({top: "+=270px"}, 4000)
        .animate({top: "-=270px"}, 4000)
        .animate({left: "+=155px"}, 4000)
        .animate({top: "+=270px"}, 4000)
        .animate({top: "-=270px"}, 4000)
        .animate({left: "+=165px"}, 4000)
		.animate({top: "+=280px"}, 4000, function() { monsterMove1(); });
});

 // Defines "wall" animation to animate in a loop.
 $(function wallMove() {
		$('#wall').animate({left: "-=305px",}, 4000)
		.animate({left: "+=305px"}, 4000, function() { wallMove(); });
 });  

 // Defines what happens when "keyboardOnButton"/"keyboardOffButton", hides/displays button menu. 
 $(function hideShowArrows(){
 
    $('#keyboardOnButton').click(function() {
        playMenuButton();
        $('#buttonMenu').css({ "display": "block" });
        $('#leftButton').css({ "display": "block" });
        $('#upButton').css({ "display": "block" });
        $('#downButton').css({ "display": "block" });
        $('#rightButton').css({ "display": "block" });
     }); 
     
    $('#keyboardOffButton').click(function() {
        playMenuButton();
        $('#buttonMenu').css({ "display": "none" });
        $('#leftButton').css({ "display": "none" });
        $('#upButton').css({ "display": "none" });
        $('#downButton').css({ "display": "none" });
        $('#rightButton').css({ "display": "none" });
     });   
}); 

 // Defines what happens when "statOnButton"/"statOffButton", hides/displays infopanel (steps/artifacts/deaths). 
 $(function hideShowStats(){
 
    $('#statOnButton').click(function() {
        playMenuButton();
        $('#infoPanel').css({ "display": "block" });
        $('#counter').css({ "display": "block" });
        $('#artifactCounter').css({ "display": "block" });
        $('#deathCounter').css({ "display": "block" });
     }); 
     
    $('#statOffButton').click(function() {
        playMenuButton();
        $('#infoPanel').css({ "display": "none" });
        $('#counter').css({ "display": "none" });
        $('#artifactCounter').css({ "display": "none" });
        $('#deathCounter').css({ "display": "none" });
     });   
}); 

// Animates menuSlide to move outside screen when pressing the menuToggleOff button, 
// if FireFox move "menuSlide" 5 pixels shorter to make it move next to the screen edge, plays "offMenuButton.wav"/"offMenuButton.mp3". 
$(function hideMenu(){
   $('#menuToggleOff').click(function() {
       playMenuOff();
        if (FireFox) {    
           $('#menuSlide').stop().animate({ 
                left: "-=168"
            }, 200, function() {});
        }
       else {
           $('#menuSlide').stop().animate({ 
               left: "-=176"
           }, 200, function() {});
       }
   });    
}); 

// Animates menuSlide to move inside screen when pressing the menuToggleOn button, 
// if FireFox move "menuSlide" 5 pixels shorter to make it move next to the screen edge, plays "menuButton.wav"/"menuButton.mp3". 
$(function showMenu(){
    $('#menuToggleOn').click(function() {
        playMenu();
        if (FireFox) {  
           $('#musicMenu').css({"margin-top":"3px"});
           $('#musicHardModeMenu').css({"margin-top":"253px"});
           $('#menuSlide').stop().animate({ 
                left: "+=168"
            }, 200, function() {});
        }
        else {
            $('#menuSlide').stop().animate({ 
                left: "+=176"
            }, 200, function() {});
        }
    });    
});  

// Animates infoSlide to move inside screen when pressing the infoToggleOn button, 
// if FireFox move "infoSlide" 5 pixels shorter to make it move next to the screen edge, plays "menuButton.wav"/"menuButton.mp3". 
$(function showInfo(){
    $('#infoToggleOn').click(function() {
        playMenu();
        if (FireFox) { 
           $("br").remove();
           $("#infoSlide").css({"font-size":"15px"});
           $('#infoSlide').stop().animate({ 
                left: "+=177"
            }, 200, function() {});
        }
        else {
            $('#infoSlide').stop().animate({ 
                left: "+=177"
            }, 200, function() {});
        }
    });    
});  

// Animates infoSlide to move outside screen when pressing the infoToggleOff button, 
// if FireFox move "infoSlide" 5 pixels shorter to make it move next to the screen edge, plays "offMenuButton.wav"/"offMenuButton.mp3". 
$(function hideInfo(){
   $('#infoToggleOff').click(function() {
       playMenuOff();
        if (FireFox) {    
           $('#infoSlide').stop().animate({ 
                left: "-=177"
            }, 200, function() {});
        }
       else {
           $('#infoSlide').stop().animate({ 
               left: "-=177"
           }, 200, function() {});
       }
   });    
}); 

 // Function that checks in you have picked up more than three/seven "artifacts", if true: returns "main" to starting position,
 // sets "artifact"/"artifact1"/"artifact2"/"artifact3" to show up again, resets Artifact-count/Death-count/Step-count, plays "win.wav"/"win.mp3".
 // Checks if winBool is false/true, if true run levelTwo and make winBool true. if artifactCount > 7 sets winBool false. 
 function checkWinGame(){
     if (winBool == false){
         if(artifactCount > 3)
         {
          levelTwo();
          winBool = true;
         }
     }
     
    if(artifactCount > 7){
        
     $('#main').css({"top":"40px", "left": "52px"});
     $('#artifact').css({"display":"block",  "top":"200px", "left":"160px"});
     $('#artifact1').css({"display":"block", "top":"200px", "left":"890px"});
     $('#artifact2').css({"display":"block", "top":"400px", "left":"280px"});
     $('#artifact3').css({"display":"block", "top":"400px", "left":"740px"});
     $('#monster').css({"display":"block"});
     $('#monster1').css({"display":"none"});
     $('#movePlatform').css({"top":"395px", "left":"25px"});
     $('#movePlatform1').css({"top":"355px", "left":"370px"});
     $('#movePlatform2').css({"top":"355px", "left":"515px"});
     $('#movePlatform3').css({"top":"25px"});
     $('#movePlatform5').css({"top":"25px", "width":"375px"});
     $('#moveHardModePlatform').css({ "display":"block", "bottom":"395px", "left":"25px"});
     $('#moveHardModePlatform1').css({ "display": "block", "bottom":"395px", "left":"370px"});
     $('#moveHardModePlatform2').css({ "display": "block", "top":"395", "left":"515px"});
     $('#wall').css({"display":"block"});  
     $('#wall5').css({"top":"25px", "left":"110px"});
     $('#wall6').css({"top":"145px", "left":"210px"});
     $('#wall7').css({"top":"145px", "left":"810px"});
     $('#wall8').css({"top":"25px", "left":"505px"});
     $('#wall9').css({"top":"145px", "left":"345px"});
     $('#wall10').css({"top":"145px", "left":"660px"});
     $('#fixblock4').css({"bottom":"0", "margin-left":"105px"});
     $('#fixblock5').css({"bottom":"0", "margin-left":"505px"});
     $('#fixblock6').css({"top":"0", "margin-left":"210px"});
     $('#fixblock7').css({"top":"0", "margin-left":"350px"});
     $('#fixblock8').css({"bottom":"0", "margin-left":"660px"});
     $('#fixblock9').css({"bottom":"0", "margin-left":"790px"});
     winBool = false;
     artifactCount = 0;
     count = 0;
     deathCount = 0;
     winCount++
     $("#winCounter").html("Wins: "+winCount);
     $("#artifactCounter").html("Artifacts: "+artifactCount);
     $("#counter").html("Steps: "+count);
     $("#deathCounter").html("Deaths: "+deathCount);
     playWin();
     return true;}
     else {return false;}

} 

 // Detects collision between "main"/"moveHardModePlatform", moves "main" -5/+5 pixels top/bottom when collide.
 // Checks if bool is true/false and moves "main" depending on true/false.
 function moveHardModePlatform($main, $moveHardModePlatform) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $moveHardModePlatform.offset().left;
      var y2 = $moveHardModePlatform.offset().top;
      var h2 = $moveHardModePlatform.outerHeight(true);
      var w2 = $moveHardModePlatform.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){
          $('#moveHardModePlatform').css({"background-image":"url('../game/SPRITES/spriteHardModeStart2.png')" });
          $('#main').stop().animate({ 
			top: "-=5" 
          }, 200, function() {});	
      }
       else {  
        $('#moveHardModePlatform').css({"background-image":"url('../game/SPRITES/spriteHardModeStart1.png')" });
        $('#main').stop().animate({ 
         top: "+=5"
         }, 200, function() {});  
         
       }
     return true;
    }

 // Detects collision between "main"/"$moveHardModePlatform1", moves "main" -5/+5 pixels top/bottom when collide.
 // Checks if bool is true/false and moves "main" depending on true/false.
 function moveHardModePlatform1($main, $moveHardModePlatform1) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $moveHardModePlatform1.offset().left;
      var y2 = $moveHardModePlatform1.offset().top;
      var h2 = $moveHardModePlatform1.outerHeight(true);
      var w2 = $moveHardModePlatform1.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){
          $('#moveHardModePlatform1').css({"background-image":"url('../game/SPRITES/spriteHardModeMidLeft1.png')" });
          $('#main').stop().animate({ 
			left: "-=5" 
          }, 200, function() {});	
      }
       else {  
        $('#moveHardModePlatform1').css({"background-image":"url('../game/SPRITES/spriteHardModeMidLeft2.png')" });
        $('#main').stop().animate({ 
         left: "+=5"
         }, 200, function() {});  
         
       }
     return true;
    }

 // Detects collision between "main"/"moveHardModePlatform2", moves "main" -5/+5 pixels top/bottom when collide.
 // Checks if bool is true/false and moves "main" depending on true/false.
 function moveHardModePlatform2($main, $moveHardModePlatform2) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $moveHardModePlatform2.offset().left;
      var y2 = $moveHardModePlatform2.offset().top;
      var h2 = $moveHardModePlatform2.outerHeight(true);
      var w2 = $moveHardModePlatform2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){
          $('#moveHardModePlatform2').css({"background-image":"url('../game/SPRITES/spriteHardModeMidLeft2.png')" });
          $('#main').stop().animate({ 
			left: "+=5" 
          }, 200, function() {});	
      }
       else {  
        $('#moveHardModePlatform2').css({"background-image":"url('../game/SPRITES/spriteHardModeMidLeft1.png')" });
        $('#main').stop().animate({ 
         left: "-=5"
         }, 200, function() {});  
         
       }
     return true;
    }

 // Detects collision between "main"/"movePlatform", moves "main" -5/+5 pixels top/bottom when collide.
 // Checks if bool is true/false and moves "main" depending on true/false.
 function movePlatform($main, $movePlatform) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $movePlatform.offset().left;
      var y2 = $movePlatform.offset().top;
      var h2 = $movePlatform.outerHeight(true);
      var w2 = $movePlatform.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){
          $('#movePlatform').css({"background-image":"url('../game/SPRITES/spriteStart2.png')" });
          $('#main').stop().animate({ 
			top: "-=5" 
          }, 200, function() {});	
      }
       else {  
        $('#movePlatform').css({"background-image":"url('../game/SPRITES/spriteStart1.png')" });
        $('#main').stop().animate({ 
         top: "+=5"
         }, 200, function() {});  
         
       }
     return true;
    }

 // Detects collision between "main"/"movePlatform1", moves "main" -5/+5 pixels left/right when collide.
 // Checks if bool is true/false and moves "main" depending on true/false, changes background every 4th second.
 function movePlatform1($main, $movePlatform1) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $movePlatform1.offset().left;
      var y2 = $movePlatform1.offset().top;
      var h2 = $movePlatform1.outerHeight(true);
      var w2 = $movePlatform1.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){
          $('#movePlatform1').css({"background-image":"url('../game/SPRITES/spriteMidLeft2.png')" });
       $('#main').stop().animate({ 
			left: "-=5"
			}, 200, function() {});
      }
      else
      {
       $('#movePlatform1').css({"background-image":"url('../game/SPRITES/spriteMidLeft1.png')" });
       $('#main').stop().animate({ 
			left: "+=5"
			}, 200, function() {});
      }
		return true;
    }
 
 // Detects collision between "main"/"movePlatform2", moves "main" -5/+5 pixels left/right when collide,
 //Checks if bool is true/false and moves "main" depending on true/false changes background every 4th second.
 function movePlatform2($main, $movePlatform2) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $movePlatform2.offset().left;
      var y2 = $movePlatform2.offset().top;
      var h2 = $movePlatform2.outerHeight(true);
      var w2 = $movePlatform2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){ 
       $('#movePlatform2').css({"background-image":"url('../game/SPRITES/spriteMidLeft1.png')" });
       $('#main').stop().animate({ 
			left: "+=5"
			}, 200, function() {});
      }
      else{
          if (bool == true){ 
          $('#movePlatform2').css({"background-image":"url('../game/SPRITES/spriteMidLeft1.png')" });
           $('#main').stop().animate({ 
                left: "-=5"
                }, 200, function() {});
          }
      }
		return true;
    } 

 // Detects collision between "main"/"movePlatform3", moves "main" +5 pixels left when collide,
 // Checks if bool is true/false and moves "main" depending on true/false changes background every 4th second.
 function movePlatform3($main, $movePlatform3) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $movePlatform3.offset().left;
      var y2 = $movePlatform3.offset().top;
      var h2 = $movePlatform3.outerHeight(true);
      var w2 = $movePlatform3.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){ 
       $('#main').stop().animate({ 
			left: "+=5"
			}, 200, function() {});
      }
      else{
           $('#main').stop().animate({ 
                left: "-=5"
                }, 200, function() {}); 
      }
		return true;
    } 

 // Detects collision between "main"/"movePlatform4", moves "main" +5 pixels left when collide,
 // Checks if bool is true/false and moves "main" depending on true/false.
 function movePlatform4($main, $movePlatform4) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $movePlatform4.offset().left;
      var y2 = $movePlatform4.offset().top;
      var h2 = $movePlatform4.outerHeight(true);
      var w2 = $movePlatform4.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){ 
       $('#main').stop().animate({ 
			left: "+=5"
			}, 200, function() {});
      }
      else{
           $('#main').stop().animate({ 
                left: "-=5"
                }, 200, function() {}); 
      }
		return true;
    } 

 // Detects collision between "main"/"movePlatform5", moves "main" +5 pixels left when collide,
 // Checks if bool is true/false and moves "main" depending on true/false.
 function movePlatform5($main, $movePlatform5) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $movePlatform5.offset().left;
      var y2 = $movePlatform5.offset().top;
      var h2 = $movePlatform5.outerHeight(true);
      var w2 = $movePlatform5.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){ 
       $('#main').stop().animate({ 
			top: "+=5"
			}, 200, function() {});
      }
      else{
           $('#main').stop().animate({ 
                top: "-=5"
                }, 200, function() {}); 
      }
		return true;
    } 

 // Detects collision between "main"/"movePlatform6", moves "main" +5 pixels left when collide,
 // Checks if bool is true/false and moves "main" depending on true/false.
 function movePlatform6($main, $movePlatform6) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $movePlatform6.offset().left;
      var y2 = $movePlatform6.offset().top;
      var h2 = $movePlatform6.outerHeight(true);
      var w2 = $movePlatform6.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){ 
       $('#main').stop().animate({ 
			top: "+=5"
			}, 200, function() {});
      }
      else{
           $('#main').stop().animate({ 
                top: "-=5"
                }, 200, function() {}); 
      }
		return true;
    } 

 // Detects collision between "main"/"movePlatform7", moves "main" +5 pixels left when collide,
 // Checks if bool is true/false and moves "main" depending on true/false.
 function movePlatform7($main, $movePlatform7) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $movePlatform7.offset().left;
      var y2 = $movePlatform7.offset().top;
      var h2 = $movePlatform7.outerHeight(true);
      var w2 = $movePlatform7.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){ 
       $('#main').stop().animate({ 
			top: "+=5"
			}, 200, function() {});
      }
      else{
           $('#main').stop().animate({ 
                top: "-=5"
                }, 200, function() {}); 
      }
		return true;
    } 

 // Detects collision between "main"/"movePlatform8", moves "main" +5 pixels left when collide,
 // Checks if bool is true/false and moves "main" depending on true/false.
 function movePlatform8($main, $movePlatform8) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $movePlatform8.offset().left;
      var y2 = $movePlatform8.offset().top;
      var h2 = $movePlatform8.outerHeight(true);
      var w2 = $movePlatform8.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){ 
       $('#main').stop().animate({ 
			top: "+=5"
			}, 200, function() {});
      }
      else{
           $('#main').stop().animate({ 
                top: "-=5"
                }, 200, function() {}); 
      }
		return true;
    } 

 // Detects collision between "main"/"movePlatform9", moves "main" +5 pixels left when collide,
 // Checks if bool is true/false and moves "main" depending on true/false.
 function movePlatform9($main, $movePlatform9) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $movePlatform9.offset().left;
      var y2 = $movePlatform9.offset().top;
      var h2 = $movePlatform9.outerHeight(true);
      var w2 = $movePlatform9.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){ 
       $('#main').stop().animate({ 
			top: "+=5"
			}, 200, function() {});
      }
      else{
           $('#main').stop().animate({ 
                top: "-=5"
                }, 200, function() {}); 
      }
		return true;
    } 

 // Detects collision between "main"/"movePlatform10", moves "main" +5 pixels left when collide,
 // Checks if bool is true/false and moves "main" depending on true/false.
 function movePlatform10($main, $movePlatform10) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $movePlatform10.offset().left;
      var y2 = $movePlatform10.offset().top;
      var h2 = $movePlatform10.outerHeight(true);
      var w2 = $movePlatform10.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){ 
       $('#main').stop().animate({ 
			top: "+=5"
			}, 200, function() {});
      }
      else{
           $('#main').stop().animate({ 
                top: "-=5"
                }, 200, function() {}); 
      }
		return true;
    } 

 // Detects collision between "main"/"movePlatform5", moves "main" +5 pixels left when collide,
 // Checks if bool is true/false and moves "main" depending on true/false.
 function movePlatform11($main, $movePlatform11) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $movePlatform11.offset().left;
      var y2 = $movePlatform11.offset().top;
      var h2 = $movePlatform11.outerHeight(true);
      var w2 = $movePlatform11.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      if (bool == true){ 
       $('#main').stop().animate({ 
			top: "+=5"
			}, 200, function() {});
      }
      else{
           $('#main').stop().animate({ 
                top: "-=5"
                }, 200, function() {}); 
      }
		return true;
    } 

 // Detects collision between "main"/"monster", moves "main" back to beginning if true,
 // adds +1 to Death-count, plays "dead.wav"/"dead.mp3", stops animation.
 function monsterCollision($main, $monster) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $monster.offset().left;
      var y2 = $monster.offset().top;
      var h2 = $monster.outerHeight(true);
      var w2 = $monster.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
     
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   deathCount++
       playDead();
	   $("#deathCounter").html("Deaths: "+deathCount);
	   resetPlayer();
	   $('#main').stop();
		return true;
    } 

 // Detects collision between "main"/"monster", moves "main" back to beginning if true,
 // adds +1 to Death-count, plays "dead.wav"/"dead.mp3", stops animation.
 function monsterCollision1($main, $monster1) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $monster1.offset().left;
      var y2 = $monster1.offset().top;
      var h2 = $monster1.outerHeight(true);
      var w2 = $monster1.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
     
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   deathCount++
       playDead();
	   $("#deathCounter").html("Deaths: "+deathCount);
	   resetPlayer();
	   $('#main').stop();
		return true;
    } 

 // Detects collision between "main"/"artifact", plays "artifact.wav"/"artifact.mp3",
 // stop displaying "artifact" if true, adds +1 to Artifact-count.
 function pickArtifact($main, $artifact) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $artifact.offset().left;
      var y2 = $artifact.offset().top;
      var h2 = $artifact.outerHeight(true);
      var w2 = $artifact.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   artifactCount++
       playArtifact();
	   $("#artifactCounter").html("Artifacts: "+artifactCount);
       $('#artifact').css({ "display": "none" });
		return true;
    }

 // Detects collision between "main"/"artifact1", plays "artifact.wav"/"artifact.mp3",
 // stop displaying "artifact1" if true, adds +1 to Artifact-count.
 function pickArtifact1($main, $artifact1) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $artifact1.offset().left;
      var y2 = $artifact1.offset().top;
      var h2 = $artifact1.outerHeight(true);
      var w2 = $artifact1.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   artifactCount++
       playArtifact();
	   $("#artifactCounter").html("Artifacts: "+artifactCount);
       $('#artifact1').css({ "display": "none" });
		return true;
 } 

 // Detects collision between "main"/"artifact2", plays "artifact.wav"/"artifact.mp3"
 // stop displaying "artifact2" if true, adds +1 to Artifact-count.
 function pickArtifact2($main, $artifact2) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $artifact2.offset().left;
      var y2 = $artifact2.offset().top;
      var h2 = $artifact2.outerHeight(true);
      var w2 = $artifact2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   artifactCount++
       playArtifact();
	   $("#artifactCounter").html("Artifacts: "+artifactCount);
       $('#artifact2').css({ "display": "none" });
		return true;
 } 

 // Detects collision between "main"/"artifact3", plays "artifact.wav"/"artifact.mp3",
 // stop displaying "artifact3" if true, adds +1 to Artifact-count.
 function pickArtifact3($main, $artifact3) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $artifact3.offset().left;
      var y2 = $artifact3.offset().top;
      var h2 = $artifact3.outerHeight(true);
      var w2 = $artifact3.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   artifactCount++
       playArtifact();
	   $("#artifactCounter").html("Artifacts: "+artifactCount);
       $('#artifact3').css({ "display": "none" });
		return true;
 }

 // Detects collision between "main"/"wall", moves "main" back to starting postition, 
 // plays "dead.wav"/"dead.mp3", adds +1 to Death-count, stops animation.	
 function collision($main, $wall) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $wall.offset().left;
      var y2 = $wall.offset().top;
      var h2 = $wall.outerHeight(true);
      var w2 = $wall.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
     
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   $("#deathCounter").html("Deaths: "+deathCount);
	   resetPlayer();
       $('#main').stop();
	   deathCount++
       playDead();
		return true;
    }

 // Detects collision between "main"/"wall1", moves "main" back to starting postition, 
 // plays "dead.wav"/"dead.mp3", adds +1 to Death-count, stops animation.	
 function collision1($main, $wall1) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $wall1.offset().left;
      var y2 = $wall1.offset().top;
      var h2 = $wall1.outerHeight(true);
      var w2 = $wall1.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   $("#deathCounter").html("Deaths: "+deathCount);
	   resetPlayer();
       $('#main').stop();
	   deathCount++
       playDead();
		return true;
    }

 // Detects collision between "main"/"wall2", moves "main" back to starting postition, 
 // plays "dead.wav"/"dead.mp3", adds +1 to Death-count, stops animation.	
 function collision2($main, $wall2) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $wall2.offset().left;
      var y2 = $wall2.offset().top;
      var h2 = $wall2.outerHeight(true);
      var w2 = $wall2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   $("#deathCounter").html("Deaths: "+deathCount);
	   resetPlayer();
       $('#main').stop();
	   deathCount++
       playDead();
       return true;
    } 

 // Detects collision between "main"/"wall3", moves "main" back to starting postition, 
 // plays "dead.wav"/"dead.mp3", adds +1 to Death-count, stops animation.	
 function collision3($main, $wall3) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $wall3.offset().left;
      var y2 = $wall3.offset().top;
      var h2 = $wall3.outerHeight(true);
      var w2 = $wall3.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   $("#deathCounter").html("Deaths: "+deathCount);
	   $('#main').stop();
       resetPlayer();
	   deathCount++
       playDead();
       $('#main').delay(800).css({"top":"40px", "left": "52px"});
       return true;
    } 

 // Detects collision between "main"/"wall4", moves "main" back to starting postition, 
 // plays "dead.wav"/"dead.mp3", adds +1 to Death-count, stops animation.	
 function collision4($main, $wall4) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $wall4.offset().left;
      var y2 = $wall4.offset().top;
      var h2 = $wall4.outerHeight(true);
      var w2 = $wall4.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   $("#deathCounter").html("Deaths: "+deathCount);
	   resetPlayer();
       $('#main').stop();
	   deathCount++
       playDead();
		return true;
    }
	
 // Detects collision between "main"/"wall5", moves "main" back to starting postition, 
 // plays "dead.wav"/"dead.mp3", adds +1 to Death-count, stops animation.	
 function collision5($main, $wall5) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $wall5.offset().left;
      var y2 = $wall5.offset().top;
      var h2 = $wall5.outerHeight(true);
      var w2 = $wall5.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   $("#deathCounter").html("Deaths: "+deathCount);
	   resetPlayer();
       $('#main').stop();
	   deathCount++
       playDead();
		return true;
    } 	
	
 // Detects collision between "main"/"wall6", moves "main" back to starting postition, 
 // plays "dead.wav"/"dead.mp3", adds +1 to Death-count, stops animation.	
 function collision6($main, $wall6) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $wall6.offset().left;
      var y2 = $wall6.offset().top;
      var h2 = $wall6.outerHeight(true);
      var w2 = $wall6.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   $("#deathCounter").html("Deaths: "+deathCount);
	   resetPlayer();
       $('#main').stop();
	   deathCount++
       playDead();
		return true;
    } 

 // Detects collision between "main"/"wall7", moves "main" back to starting postition, 
 // plays "dead.wav"/"dead.mp3", adds +1 to Death-count, stops animation.	
 function collision7($main, $wall7) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $wall7.offset().left;
      var y2 = $wall7.offset().top;
      var h2 = $wall7.outerHeight(true);
      var w2 = $wall7.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   $("#deathCounter").html("Deaths: "+deathCount);
	   resetPlayer();
       $('#main').stop();
	   deathCount++
        playDead();
		return true;
    }			

 // Detects collision between "main"/"wall18", moves "main" back to starting postition, 
 // plays "dead.wav"/"dead.mp3", adds +1 to Death-count, stops animation.	
 function collision8($main, $wall8) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $wall8.offset().left;
      var y2 = $wall8.offset().top;
      var h2 = $wall8.outerHeight(true);
      var w2 = $wall8.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   $("#deathCounter").html("Deaths: "+deathCount);
	   resetPlayer();
       $('#main').stop();
       playDead();
	   deathCount++
		return true;
    } 

 // Detects collision between "main"/"wall9", moves "main" back to starting postition, 
 // plays "dead.wav"/"dead.mp3", adds +1 to Death-count, stops animation.	
 function collision9($main, $wall9) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $wall9.offset().left;
      var y2 = $wall9.offset().top;
      var h2 = $wall9.outerHeight(true);
      var w2 = $wall9.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   $("#deathCounter").html("Deaths: "+deathCount);
	   resetPlayer();
       $('#main').stop();
       playDead();
	   deathCount++
		return true;
    }		

 // Detects collision between "main"/"wall10", moves "main" back to starting postition, 
 // plays "dead.wav"/"dead.mp3", adds +1 to Death-count, stops animation.	
 function collision10($main, $wall10) {
      var x1 = $main.offset().left;
      var y1 = $main.offset().top;
      var h1 = $main.outerHeight(true);
      var w1 = $main.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $wall10.offset().left;
      var y2 = $wall10.offset().top;
      var h2 = $wall10.outerHeight(true);
      var w2 = $wall10.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	   $("#deathCounter").html("Deaths: "+deathCount);
	   resetPlayer();
       $('#main').stop();
       playDead();
	   deathCount++
       return true;
    } 

 // In progress alternative  level.
function levelTwo() {
         $('#main').css({"top":"425px", "left": "52px"});
         $('#wall').css({"display":"none"});
         $('#movePlatform').css({"top":"25px", "left": "25px"});
         $('#wall5').css({"top":"25px", "left": "210px", "height":"330px"});
         $('#wall6').css({"top":"145px", "left": "110px"});
         $('#wall7').css({"top":"145px", "left": "830px"});
         $('#wall8').css({"top":"25px", "left": "350px"});
         $('#wall9').css({"top":"145px", "left": "500px"});
         $('#moveHardModePlatform').css({ "display":"block", "top":"25px", "left":"25px"});
         $('#moveHardModePlatform1').css({ "display": "block", "top":"355px", "left":"135px"});
         $('#moveHardModePlatform2').css({ "display": "block", "top":"355px", "left":"355px"});
         $('#movePlatform3').css({"top":"105px"});
         $('#movePlatform5').css({"top":"235px", "width":"750px"});
         $('#artifact').css({"top":"45px", "left":"280px", "display":"block"});
         $('#artifact2').css({"top":"400px", "left":"580px", "display":"block"});
         $('#artifact1').css({"top":"400px", "left":"900px", "display":"block"});
         $('#artifact3').css({"display":"block"});
         $('#fixblock9').css({"left": "20px"});
         $('#fixblock4').css({"left": "240px"});
         $('#fixblock5').css({"left": "-295px"});
         $('#fixblock7').css({"left": "155px"});
         $('#fixblock6').css({"left": "-100px"});
         $('#movePlatform1').css({"left": "135px"});
         $('#movePlatform2').css({"left": "355px"});
         $('#monster').css({"display":"none"});
         $('#monster1').css({"display":"block"});
}

 // Runs an intervall of all these functions every 0.2 seconds. 
 window.setInterval(function () {
    checkWinGame();
    (collision($('#main'), $('#wall')));
    (collision1($('#main'), $('#wall1')));
    (collision2($('#main'), $('#wall2')));
    (collision3($('#main'), $('#wall3')));
    (collision4($('#main'), $('#wall4')));
    (collision5($('#main'), $('#wall5')));
    (collision6($('#main'), $('#wall6')));
    (collision7($('#main'), $('#wall7')));
    (collision8($('#main'), $('#wall8')));
    (collision9($('#main'), $('#wall9')));
    (collision10($('#main'), $('#wall10')));
    (pickArtifact($('#main'), $('#artifact')));
    (pickArtifact1($('#main'), $('#artifact1')));
    (pickArtifact2($('#main'), $('#artifact2')));
    (pickArtifact3($('#main'), $('#artifact3')));
    (moveHardModePlatform($('#main'), $('#moveHardModePlatform')));
    (moveHardModePlatform1($('#main'), $('#moveHardModePlatform1')));
    (moveHardModePlatform2($('#main'), $('#moveHardModePlatform2')));
    (movePlatform($('#main'), $('#movePlatform')));
    (movePlatform1($('#main'), $('#movePlatform1')));
    (movePlatform2($('#main'), $('#movePlatform2')));
    (movePlatform3($('#main'), $('#movePlatform3')));
    (movePlatform4($('#main'), $('#movePlatform4')));
    (movePlatform5($('#main'), $('#movePlatform5')));
    (movePlatform6($('#main'), $('#movePlatform6')));
    (movePlatform7($('#main'), $('#movePlatform7')));
    (movePlatform8($('#main'), $('#movePlatform8')));
    (movePlatform9($('#main'), $('#movePlatform9')));
    (movePlatform10($('#main'), $('#movePlatform10')));
    (movePlatform11($('#main'), $('#movePlatform11')));
    (monsterCollision($('#main'), $('#monster')));
    (monsterCollision1($('#main'), $('#monster1')));
}, 200);
 
 // Runs an intervall on bool every 4 seconds. 
window.setInterval(function () {
    bool = (bool) ? false:true;
}, 4000);

