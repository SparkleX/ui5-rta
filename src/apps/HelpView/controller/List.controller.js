sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/core/Fragment",
		"sap/ui/model/json/JSONModel",
		"sap/viz/ui5/format/ChartFormatter",
		"sap/viz/ui5/controls/common/feeds/FeedItem",
	],
	function (Controller, MessageToast, Fragment, JSONModel, ChartFormatter, FeedItem) {
		"use strict";

		var theClass = Controller.extend("demo.apps.HelpView.controller.List", {
		});
		theClass.prototype.onInit = async function (evt) {

		};
		theClass.prototype.onPress = function (evt) {
			alert('1');
		};
		return theClass;
	}
);
