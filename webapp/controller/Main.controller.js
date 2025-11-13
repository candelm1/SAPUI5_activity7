sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("sapips.training.odata.controller.Main", {
        onInit() {
            
        } /*,
        
        onAfterRendering: function() {            
            //var oView = this.getView();
            var oModel = this.getOwnerComponent().getModel();           
            var aFilter = [];

            aFilter.push(
                    new Filter({
                        filters: [ 
                            new Filter({
                                path: "Discontinued",
                                operator: FilterOperator.NotContains,
                                value1: "true"
                            }),
                        ],
                    and: false
                    })
            ); 
            
            oModel.read("/Product",{
                success: function (data) {
                },
                error: function (data){

                }
            }) 
                        
            var oTable = this.byId("tblProduct");
            var oBinding = oTable.getBinding("items");

            var oSorter = new sap.ui.model.Sorter("ProductId", false);
            oBinding.sort(oSorter);              
        }    */
    }
    );
}
);