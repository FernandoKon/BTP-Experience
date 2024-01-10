sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.lab2dev.btpexperience.controller.SectionsDetail", {
            onInit: function () {
                const oModel = new JSONModel();
                oModel.loadData("/model/participantes.json");

                this.getView().setModel(oModel, "participantes");
            },

            
        });
    });