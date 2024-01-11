sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.lab2dev.btpexperience.controller.SessionsDetail", {
            onInit: function () {
                const oModel = new JSONModel();
                oModel.loadData("/model/sessoes.json");

                this.getView().setModel(oModel, "sessoes");
            },

            onSearchParticipants: function (oEvent) {
                const sQuery = oEvent.getSource().getValue();

                const aFilters = [];

                if (sQuery && sQuery.length > 0) {
                    const filterOrders = new Filter({
                        filters: [
                            new Filter("Name", FilterOperator.Contains, sQuery), 
                            new Filter("Enterprise", FilterOperator.EQ, sQuery)
                        ]
                    });
                    aFilters.push(filterOrders);
                }

                const oGridList = this.byId("idTableParticipant");
                const oBinding = oGridList.getBinding("rows");
                oBinding.filter(aFilters);
            },

            onSearchAssessments: function (oEvent) {
                const sQuery = oEvent.getSource().getValue();

                const aFilters = [];

                if (sQuery && sQuery.length > 0) {
                    const filterOrders = new Filter({
                        filters: [
                            new Filter("Name", FilterOperator.Contains, sQuery), 
                            new Filter("Enterprise", FilterOperator.EQ, sQuery)
                        ]
                    });
                    aFilters.push(filterOrders);
                }

                const oGridList = this.byId("idTableAssessments");
                const oBinding = oGridList.getBinding("rows");
                oBinding.filter(aFilters);
            },
        });
    });