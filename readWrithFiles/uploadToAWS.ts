import fs from 'fs'
import AWS from 'aws-sdk'
import path from 'path'

export const uploadDir = function () {

  let s3 = new AWS.S3();

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

  async function upload(dir: string, path: string) {
    AWS.config.update({
      accessKeyId: 'AKIAIG32LYKCG3YYUHUQ',
      secretAccessKey: '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',
    });
    const s3 = new AWS.S3();
    const constantParams = {
      Bucket: 'listfunding.ocr'
    }

    const fileStream = fs.createReadStream(dir);

    try {
      const s3Params = {
        Key: path,
        Body: fileStream,
        ...constantParams
      };
      console.log(s3Params);
      
      await s3.putObject(s3Params, (err: any, data: any) => {
        if (err) return console.log({ err });
        else console.log({ data });
      });
    } catch (error) {
      return { data: null, error, status: 500 };
    }
  }
  return {
    upload
  }
};
exports.moudule = uploadDir()


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


