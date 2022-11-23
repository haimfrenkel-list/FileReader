"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passingProcess = void 0;
var child_process_1 = require("child_process");
var passingProcess = /** @class */ (function () {
    function passingProcess(task) {
        this.fake = true;
        this.command = '';
        this.func = '';
        this.task = task;
        this.commandDefinition();
        this.funcDefinition();
    }
    passingProcess.prototype.commandDefinition = function () {
        this.command = this.fake ? 'node' : 'python3';
    };
    passingProcess.prototype.funcDefinition = function () {
        this.func = this.fake ? "fakePython/".concat(this.task, ".js") : "python/".concat(this.task, ".py");
    };
    passingProcess.prototype.passingToProcess = function (arg) {
        arg.unshift(this.func);
        return (0, child_process_1.spawn)(this.command, arg);
    };
    return passingProcess;
}());
exports.passingProcess = passingProcess;
//# sourceMappingURL=passingToProcess.js.map