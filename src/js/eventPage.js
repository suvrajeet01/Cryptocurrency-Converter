var contextMenuItem = {
	"id": "discord",
	"title": "Send Link to Discord",
	"contexts": ["all"],
};
var webhook = "";
chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function (pageUrl) {
	chrome.storage.sync.get('webhook', function (data) {
		console.log(data.webhook);
		webhook = data.webhook;
	});
	chrome.storage.sync.get('name1', function (data) {
		console.log(data.name1);
		name = data.name1;
	});


	var xhttp = new XMLHttpRequest();
	var URL = pageUrl.pageUrl;
	console.log(URL);
	xhttp.open("POST", webhook, true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(JSON.stringify({
		"content": "**" + name + ":" + "**   " + URL
	}));
});



chrome.storage.sync.get('webhook', function (data) {
	console.log(data.webhook);
	webhook = data.webhook;
	name = data.name;
});