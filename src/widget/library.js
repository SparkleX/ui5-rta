sap.ui.define(["jquery.sap.global", "sap/ui/base/DataType"], function (jQuery, DataType) {
	"use strict";

	sap.ui.getCore().initLibrary({
		name: "demo.widget",
		version: "1.0.0",
		designtime: "sap/m/designtime/library.designtime",
		types: [],
		interfaces: [],
		controls: ["demo.widget.Label"],
		elements: [],
		extensions: {
			flChangeHandlers:{
				"demo.widget.Label": "demo/widget/flexibility/Label"
			}
		}
	});
	return demo.widget;
});
