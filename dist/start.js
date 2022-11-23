"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveFile = exports.extractData = void 0;
var process_1 = require("./process");
var readFiles_1 = require("./readWrithFiles/readFiles");
var files = new readFiles_1.readFile().retrnFiles();
var generate = extractData();
function extractData() {
    for (var i = 0; i < files.length; i++) {
        var a = new process_1.process().doProcess(files[i].filePath, saveFile);
    }
}
exports.extractData = extractData;
function saveFile(data) {
    new readFiles_1.readFile().writhData(data);
}
exports.saveFile = saveFile;
//# sourceMappingURL=start.js.map