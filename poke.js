
window.setInterval ( function () {
	chrome.storage.sync.get({state: true}, function (items) {
		if (items.state === true) {
				poke(document.getElementsByClassName("_42ft"));
		}
	}

	);

}, 5000);


function poke(list) {
  for (var i = 0; i < list.length; i++) {
    var temp = list[i];
      if ((temp.getAttribute("ajaxify").substring(0,17) == "/pokes/inline/?dom") && (temp.getAttribute("rel") == "async-post") && (!temp.getAttribute("ajaxify").indexOf("suggestion"))) {
				alert("clicking ----");
			}
			console.log(i);
	}


}
