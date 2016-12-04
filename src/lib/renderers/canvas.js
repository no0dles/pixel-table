"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events_1 = require("events");
var CanvasRenderer = (function (_super) {
    __extends(CanvasRenderer, _super);
    function CanvasRenderer() {
        return _super.apply(this, arguments) || this;
    }
    CanvasRenderer.prototype.update = function () {
        var pixels = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pixels[_i - 0] = arguments[_i];
        }
    };
    return CanvasRenderer;
}(events_1.EventEmitter));
exports.CanvasRenderer = CanvasRenderer;
