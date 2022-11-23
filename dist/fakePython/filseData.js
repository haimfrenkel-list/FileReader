"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeGeneralInfo = void 0;
var fakeGeneralInfo = /** @class */ (function () {
    function fakeGeneralInfo(filePath, file) {
        this.names = ['James', 'William', 'Thomas', 'Christopher', 'Matthew', 'Amanda', 'Amy', 'Megan', 'Harold'];
        this.companies = ['google', 'meta', 'microsoft', 'tesla', 'hp', 'intel', 'wix', 'LiST'];
        this.categories = ['Insurance Policy', 'Premium Illustrations', 'LE', 'unknowns'];
    }
    fakeGeneralInfo.prototype.fileGenerator = function (filePath, file) {
        return {
            name: this.names[Math.random()]
        };
    };
    return fakeGeneralInfo;
}());
exports.fakeGeneralInfo = fakeGeneralInfo;
//# sourceMappingURL=filseData.js.map