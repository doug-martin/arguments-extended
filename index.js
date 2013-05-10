(function () {
    "use strict";

    function defineArgumentsExtended(extended, is) {

        var pSlice = Array.prototype.slice,
            isArguments = is.isArguments;

        function argsToArray(args, slice) {
            if (!isArguments(args)) {
                throw new TypeError("args must be an Arguments object");
            }
            slice = slice || 0;
            return pSlice.call(args, slice);
        }


        return extended
            .define(isArguments, {
                toArray: argsToArray
            })
            .expose({
                argsToArray: argsToArray
            });
    }

    if ("undefined" !== typeof exports) {
        if ("undefined" !== typeof module && module.exports) {
            module.exports = defineArgumentsExtended(require("extended"), require("is-extended"));

        }
    } else if ("function" === typeof define) {
        define(["extended", "is-extended"], function (extended, is) {
            return defineArgumentsExtended(extended, is);
        });
    } else {
        this.argumentsExtended = defineArgumentsExtended(this.extended, this.isExtended);
    }

}).call(this);

