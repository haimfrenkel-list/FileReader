"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveFile = exports.extractData = void 0;
var process_1 = require("./process");
var readFiles_1 = require("./readWrithFiles/readFiles");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use('/api', express_1.default.json());
app.use('/auth', express_1.default.json());
app.post('/api/start', function (req, res) {
    var files = new readFiles_1.readFile(req.body.AWS).retrnFiles();
    var generate = extractData(files);
    res.status(200).send();
});
function extractData(files) {
    for (var i = 0; i < files.length; i++) {
        var a = new process_1.process().doProcess(files[i].filePath, saveFile);
    }
}
exports.extractData = extractData;
function saveFile(data) {
    new readFiles_1.readFile().writhData(data);
}
exports.saveFile = saveFile;
var server = app.listen(5001, function () {
    var port = server.address();
    console.log("server is up in port: ", port);
});
//# sourceMappingURL=start.js.map