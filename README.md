Ti.BackgroundAppRefreshStatus
============================

Adds support for the BackgroundAppRefreshStatus property of iOS 7 to Appcelerator Titanium so you can notify the User that Background App Refresh is disabled (or restricted).

<h2>Ussage</h2>

* Download the latest version from the dist folder
* Install the module into the modules/iphone folder of your project
* You can now use the module via require

~~~
var backgroundAppRefreshStatus = require('com.snowciety.BackgroundAppRefreshStatus');
~~~

<h2>Properties</h2>

<h4>status</h4>

The <b>status</b> property is a string containing one of 3 possible values: 'enabled', 'disabled', 'restricted'. Restricted means the user is not able to enable Background App Refresh due to for example parental controls.

~~~
var backgroundAppRefreshStatus = require('com.snowciety.BackgroundAppRefreshStatus');
Ti.API.info("Status of BackgroundAppRefresh is " + backgroundAppRefreshStatus.status);
~~~

<h2>Example</h2>

Please check the module's example folder