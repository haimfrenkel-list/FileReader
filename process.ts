import { passingProcess } from "./passingToProcess";

export class process {

    constructor() {

    }

    doProcess(filePath: string, callback: Function) {
        let process = new passingProcess('dataExtraction')
        let pythonProcess = process.passingToProcess([filePath]);
        pythonProcess.stdout.on('data', (data) => {
            let json = data.toString()
            let obj = JSON.parse(json)
                 callback(obj)
            }
        );
        pythonProcess.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
            data = data.toString('utf8');
            console.log('stderr: ' + data);
        });
        console.log("End js");
    }


}