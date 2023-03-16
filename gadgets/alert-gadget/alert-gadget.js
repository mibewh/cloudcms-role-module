define(function(require, exports, module) {
    var Empty = require("ratchet/dynamic/empty");

    var UI = require("ui");

    return UI.registerGadget("alert-gadget", Empty.extend({

        setup: function()
        {
            this.get("/projects/{projectId}/documents/{documentId}", this.index);
        },

        afterSwap: function(el, model, context, callback)
        {
            alert("You have permission to enter!");
            callback();
        }
    }));
});