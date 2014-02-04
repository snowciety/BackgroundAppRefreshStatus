// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.




// TODO: write your module tests here
var BackgroundAppRefreshStatus = require('com.snowciety.BackgroundAppRefreshStatus');
Ti.API.info("module is => " + BackgroundAppRefreshStatus);
Ti.API.info("Status of BackgroundAppRefresh is " + BackgroundAppRefreshStatus.status);

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel({
	text: BackgroundAppRefreshStatus.status
});
win.add(label);
win.open();