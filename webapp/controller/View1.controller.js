sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("DemoPrj_Hello.DemoProject_Hello.controller.View1", {
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(	{
				"text": "Hello World"
			}	);
			this.getView().setModel(oModel);
		}
	});
});