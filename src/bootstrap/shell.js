this.sap = this.sap || {};
sap.ushell = sap.ushell || {};

function bootstrap(fnCallback) {
	jQuery.sap.require("sap.ushell.services.Container");
	const newConfig = jQuery.getJSON({
		url: "bootstrap/config.json",
		dataType: "json",
		async: false
	}).responseJSON;
	window["sap-ushell-config"] = newConfig;
	oRendererConfig = jQuery.sap.getObject("renderers.fiori2.componentData.config", 0, window["sap-ushell-config"]);
	if (!oRendererConfig.rootIntent) {
		oRendererConfig.rootIntent = "Shell-home";
	}
	sap.ushell.bootstrap("local").done(fnCallback);
}

const flexibilityServices = [ {
	"connector": "KeyUserConnector", 
	"url":"/mock",
	"settings": {
		"isKeyUser": true
	}
}];
window["sap-ui-config"] = {
	"xx-bootTask": bootstrap,
	"libs": "sap.ushell, sap.collaboration, sap.m, sap.ui.layout, sap.suite.ui.microchart, sap.suite.ui.commons, sap.ui.rta",
	"theme": "sap_fiori_3",
	"compatVersion": "edge",
	"preload": "async",
	"frameOptions": "allow",
	"xx-disableCustomizing": false,
	"xx-bindingSyntax": "complex",
	"xx-loadAllMode": true,
	"resourceroots": {
		"demo":"/"
	},
	"flexibilityServices": "/mock"//JSON.stringify(flexibilityServices)
};
