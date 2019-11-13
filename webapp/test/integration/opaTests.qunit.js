/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"DemoPrj_Hello/DemoProject_Hello/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});