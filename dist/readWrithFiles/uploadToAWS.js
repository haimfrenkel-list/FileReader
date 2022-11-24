"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadDir = void 0;
var fs_1 = __importDefault(require("fs"));
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var uploadDir = function () {
    var s3 = new aws_sdk_1.default.S3();
    //   function walkSync(currentDirPath: string, callback: Function) {
    //       fs.readdirSync(currentDirPath).forEach(function (name: any) {
    //           var filePath = path.join(currentDirPath, name);
    //           var stat = fs.statSync(filePath);
    //           if (stat.isFile()) {
    //               callback(filePath, stat);
    //           } else if (stat.isDirectory()) {
    //               walkSync(filePath, callback);
    //           }
    //       });
    //   }
    //   walkSync(s3Path, function(filePath: string, stat: any) {
    //     let bucketPath = filePath.substring(s3Path.length+1);
    //     let params = {Bucket: bucketName, Key: bucketPath, Body: fs.readFileSync(filePath) };
    //     s3.putObject(params, function(err: any, data: any) {
    //         if (err) {
    //             console.log(err)
    //         } else {
    //             console.log('Successfully uploaded '+ bucketPath +' to ' + bucketName);
    //         }
    //     });
    // });
    function upload(dir, path) {
        return __awaiter(this, void 0, void 0, function () {
            var s3, constantParams, fileStream, s3Params, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        aws_sdk_1.default.config.update({
                            accessKeyId: 'AKIAIG32LYKCG3YYUHUQ',
                            secretAccessKey: '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',
                        });
                        s3 = new aws_sdk_1.default.S3();
                        constantParams = {
                            Bucket: 'listfunding.ocr'
                        };
                        fileStream = fs_1.default.createReadStream(dir);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        s3Params = __assign({ Key: path, Body: fileStream }, constantParams);
                        console.log(s3Params);
                        return [4 /*yield*/, s3.putObject(s3Params, function (err, data) {
                                if (err)
                                    return console.log({ err: err });
                                else
                                    console.log({ data: data });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, { data: null, error: error_1, status: 500 }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return {
        upload: upload
    };
};
exports.uploadDir = uploadDir;
exports.moudule = (0, exports.uploadDir)();
// import { PutObjectCommand } from "@aws-sdk/client-s3";
// import  s3Client  from "@aws-sdk/client-s3" ; // Helper function that creates an Amazon S3 service client module.
// import path from "path";
// import fs from "fs";
// const file = "OBJECT_PATH_AND_NAME"; // Path to and name of object. For example '../myFiles/index.js'.
// const fileStream = fs.createReadStream(file);
// // Set the parameters
// export const uploadParams = {
//   Bucket: "BUCKET_NAME",
//   // Add the required 'Key' parameter using the 'path' module.
//   Key: path.basename(file),
//   // Add the required 'Body' parameter
//   Body: fileStream,
// };
// // Upload file to specified bucket.
// export const run = async () => {
//   try {
//     const data = await new PutObjectCommand(uploadParams);
//     console.log("Success", data);
//     return data; // For unit tests.
//   } catch (err) {
//     console.log("Error", err);
//   }
// };
// run();
//# sourceMappingURL=uploadToAWS.js.map