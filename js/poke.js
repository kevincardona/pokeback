
window.setInterval ( function () {
	chrome.storage.sync.get('item', function (items) {
		if (items.item === true) {
				poke(document.getElementsByClassName("_42ft"));
		}
	});
}, 1000);


function poke(list) {
  for (var i = 0; i < list.length; i++) {
    var temp = list[i];
		if (temp.getAttribute("ajaxify") != null && temp.getAttribute("rel") != null)
      if ((temp.getAttribute("ajaxify").substring(0,13) == "/pokes/inline") && !(temp.getAttribute("ajaxify").indexOf("suggestion") > -1 && (temp.getAttribute("rel") == "async-post")) && (temp.getAttribute("title") != "Remove")) {
					temp.click();
			}
			console.log("no poke :(")
	}


}
