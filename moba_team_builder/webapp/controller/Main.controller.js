// @ts-ignore
sap.ui.define(
	[
		'./BaseController',
		'sap/ui/model/json/JSONModel',
		'sap/m/MessageBox',
		'sap/ui/model/Filter',
		'sap/ui/model/FilterOperator',
		'sap/ui/export/Spreadsheet',
		'../model/formatter',
		'sap/ui/core/Fragment',
		"sap/m/MessageToast",
		'../model/mock'
	],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController, JSONModel, MessageBox, Filter, FilterOperator, Spreadsheet, formatter, Fragment, MessageToast,mock) {
		"use strict";

		return BaseController.extend("mobateambuilder.controller.Main", {

			formatter: formatter,
			mock:mock,
			onInit: function () {
				if (!this.oModel) {
          this.oModel = new JSONModel()
          this.getView().setModel(this.oModel)
        };

				//Getting Lanes
				this.oModel.setProperty('/mocklanes', mock.lanes_object());
				console.log(this.oModel.getProperty('/mocklanes'))
			}
		});
	});
