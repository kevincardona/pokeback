var on = false;

$(toggle).click(function () {

  if (on) {
      on = false;
      $(toggle).css("background", "url('icon-off.png')")
      $(toggle).css("width", "50px");
      $(toggle).css("height", "50px");
      $(toggle).css("background-position", "center");

  }
  else {
    on = true;
    $(toggle).css("background", "url('icon-on.png')")
    $(toggle).css("width", "50px");
    $(toggle).css("height", "50px");
    $(toggle).css("background-position", "center");
  }

});

setInterval(function(){
  if (on) {
    poke(document.getElementsByClassName("_42ft"));
  }
}, 5000);

function poke(list) {

  for (var i = 0; i < list.length; i++) {
    var temp = list[i];
      if (temp.getAttribute("ajaxify").substring(0,28) == "/pokes/inline/?dom_id_replace" && !temp.getAttribute("ajaxify").indexOf("suggestion")) {

      }
  }
}

$(document).ready(main);
