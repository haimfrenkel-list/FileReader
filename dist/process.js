"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.process = void 0;
var passingToProcess_1 = require("./passingToProcess");
var process = /** @class */ (function () {
    function process() {
    }
    process.prototype.doProcess = function (filePath, callback) {
        var process = new passingToProcess_1.passingProcess('dataExtraction');
        var pythonProcess = process.passingToProcess([filePath]);
        pythonProcess.stdout.on('data', function (data) {
            var json = data.toString();
            var obj = JSON.parse(json);
            callback(obj);
        });
        pythonProcess.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
            data = data.toString('utf8');
            console.log('stderr: ' + data);
        });
        console.log("End js");
    };
    return process;
}());
exports.process = process;
//# sourceMappingURL=process.js.map