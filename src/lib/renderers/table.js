"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mapper_1 = require("../lib/mapper");
var events_1 = require("events");
var WebSocket = require('ws');
var TableRenderer = (function (_super) {
    __extends(TableRenderer, _super);
    function TableRenderer() {
        var _this = _super.call(this) || this;
        _this.socket = new WebSocket(TableRenderer.SOCKET_URL);
        _this.socket.onopen = function () {
            _this.transmit();
            _this.emit("ready");
        };
        _this.frame = new Uint8ClampedArray(TableRenderer.BUFFER_OFFSET + TableRenderer.LED_COUNT * 3);
        _this.mapper = new mapper_1.PixelMapper();
        return _this;
    }
    TableRenderer.prototype.update = function () {
        var pixels = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pixels[_i - 0] = arguments[_i];
        }
        console.log(pixels);
        for (var _a = 0, pixels_1 = pixels; _a < pixels_1.length; _a++) {
            var pixel = pixels_1[_a];
            var mapping = this.mapper.resolve(pixel.coordinate);
            for (var i = 0; i < mapping.range; i++) {
                this.frame[TableRenderer.BUFFER_OFFSET + mapping.index * 3 + i * 3] = pixel.color.r;
                this.frame[TableRenderer.BUFFER_OFFSET + mapping.index * 3 + i * 3 + 1] = pixel.color.g;
                this.frame[TableRenderer.BUFFER_OFFSET + mapping.index * 3 + i * 3 + 2] = pixel.color.b;
            }
        }
        this.transmit();
    };
    TableRenderer.prototype.transmit = function () {
        if (this.socket.readyState != 1) {
            return;
        }
        if (this.socket.bufferedAmount > this.frame.length) {
            console.log("lagging");
            return;
        }
        this.socket.send(this.frame.buffer);
    };
    return TableRenderer;
}(events_1.EventEmitter));
TableRenderer.LED_COUNT = 384;
TableRenderer.BUFFER_OFFSET = 4;
TableRenderer.SOCKET_URL = "ws://192.168.0.120:7890";
exports.TableRenderer = TableRenderer;
