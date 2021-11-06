/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"moba_team_builder/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
