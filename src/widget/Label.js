sap.ui.define(
	["sap/m/Label"],
	function (BaseClass) {
		"use strict";
		var theClass = BaseClass.extend("demo.widget.Label", {
			metadata: {
				properties: {
					//design : {type : "sap.m.LabelDesign", group : "Appearance", defaultValue : "Standard"},
				},
				designtime: "demo/widget/designtime/Label.designtime"
			}
		});

		/*theClass.prototype.init = function (sId) {
			BaseClass.prototype.init.call(this, sId);
		};*/
		return theClass;
	}
);
