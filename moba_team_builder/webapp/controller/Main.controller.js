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
	],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController, JSONModel, MessageBox, Filter, FilterOperator, Spreadsheet, formatter, Fragment, MessageToast) {
		"use strict";

		return BaseController.extend("mobateambuilder.controller.Main", {

			formatter: formatter,
			onInit: function () {
				if (!this.oModel) {
          this.oModel = new JSONModel()
          this.getView().setModel(this.oModel)
        };

				let oData = [{ playername: 'Oshiro', favouritehero: 'Pudge', lane: 'TopLane' }];

				this.oModel.setProperty('/EntradaSubCategoria', oData)

			}
		});
	});
