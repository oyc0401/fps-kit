"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableRafPatch = exports.enableRafPatch = exports.stopFpsMeter = exports.startFpsMeter = void 0;
var rafMeter_1 = require("./rafMeter");
Object.defineProperty(exports, "startFpsMeter", { enumerable: true, get: function () { return rafMeter_1.startFpsMeter; } });
Object.defineProperty(exports, "stopFpsMeter", { enumerable: true, get: function () { return rafMeter_1.stopFpsMeter; } });
var rafPatch_1 = require("./rafPatch");
Object.defineProperty(exports, "enableRafPatch", { enumerable: true, get: function () { return rafPatch_1.enableRafPatch; } });
Object.defineProperty(exports, "disableRafPatch", { enumerable: true, get: function () { return rafPatch_1.disableRafPatch; } });
