define(function(require, exports, module) {
    var Empty = require("ratchet/dynamic/empty");

    var UI = require("ui");

    //var moment = require("moment");

    return UI.registerGadget("alert-gadget", Empty.extend({
        TEMPLATE: `<div class="my-alert-gadget"></div>`,

        setup: function()
        {
            debugger;
            this.get("/projects/{projectId}/documents/{documentId}", this.index);
        },

        afterSwap: function(el, model, context, callback)
        {
            alert("You have permission to enter!");
            callback();
        }
    }));
});