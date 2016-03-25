//Onclick
var on = false;

function click() {
	chrome.storage.sync.get ('item', function (items) {
		on = items.item;
	});

  chrome.storage.sync.set({'item': on});

}
