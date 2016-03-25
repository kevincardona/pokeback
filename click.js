var on = false;
var running = false;


window.onload=function(){
	chrome.storage.sync.set({item: on});
	chrome.storage.sync.get ({state: on}, function (items) {
		if (items.state === false) {
     	  on = false;
  	   	  $(toggle).css("background-color", "red");
   	  	  $(toggle).css("width", "50px");
   	  	  $(toggle).css("height", "50px");
   	   	  $(toggle).css("background-position", "center");
   	  	  running = false;

 		 }
  		else {
   		 on = true;
   		 $(toggle).css("background-color", "green");
   		 $(toggle).css("width", "50px");
   	 	 $(toggle).css("height", "50px");
   	 	 $(toggle).css("background-position", "center");
  		}
	});

}

//Onclick
$(toggle).click(function () {

  if (on) {
      on = false;
      $(toggle).css("background-color", "red");
      $(toggle).css("width", "50px");
      $(toggle).css("height", "50px");
      $(toggle).css("background-position", "center");
      running = false;

  }
  else {
    on = true;
    $(toggle).css("background-color", "green");
    $(toggle).css("width", "50px");
    $(toggle).css("height", "50px");
    $(toggle).css("background-position", "center");
  }


  chrome.storage.sync.set({item: on});


});

$(document).ready(main);
