"use strict";
var View = (function () {
    function View(renderer) {
        this.renderer = renderer;
        this.pixels = [];
        this.setColor({ r: 0, g: 0, b: 0 });
        this.setBrightness(1);
    }
    View.prototype.updatePixel = function (coordinate, rgb, brightness) {
        var index = coordinate.x + coordinate.y * View.WIDTH;
        var pixel = this.pixels[index];
        if (!pixel) {
            pixel = {
                pixel: {
                    color: { r: 0, g: 0, b: 0 },
                    coordinate: coordinate
                },
                rgb: {
                    r: 0, g: 0, b: 0
                },
                brightness: 1
            };
        }
        if (brightness) {
            pixel.brightness = brightness;
        }
        if (rgb) {
            pixel.rgb = rgb;
        }
        if (brightness !== null || rgb !== null) {
            pixel.pixel.color.r = pixel.rgb.r * pixel.brightness;
            pixel.pixel.color.g = pixel.rgb.g * pixel.brightness;
            pixel.pixel.color.b = pixel.rgb.b * pixel.brightness;
        }
        return pixel.pixel;
    };
    View.prototype.setColor = function (rgb, coordinate) {
        if (coordinate) {
            this.renderer.update(this.updatePixel(coordinate, rgb));
        }
        else {
            var pixels = new Array();
            for (var x = 0; x < View.WIDTH; x++) {
                for (var y = 0; y < View.HEIGHT; y++) {
                    pixels.push(this.updatePixel({ x: x, y: y }, rgb));
                }
            }
            (_a = this.renderer).update.apply(_a, pixels);
        }
        var _a;
    };
    View.prototype.setBrightness = function (brightness, coordinate) {
        if (coordinate) {
            this.renderer.update(this.updatePixel(coordinate, null, brightness));
        }
        else {
            var pixels = new Array();
            for (var x = 0; x < View.WIDTH; x++) {
                for (var y = 0; y < View.HEIGHT; y++) {
                    pixels.push(this.updatePixel({ x: x, y: y }, null, brightness));
                }
            }
            (_a = this.renderer).update.apply(_a, pixels);
        }
        var _a;
    };
    return View;
}());
View.WIDTH = 12;
View.HEIGHT = 8;
exports.View = View;
