import { passingProcess } from "./passingToProcess";
import { process } from "./process";
import { readFile } from "./readWrithFiles/readFiles";






var files = new readFile().retrnFiles()
var generate = extractData()


export function extractData() {
      for (let i = 0; i < files.length; i++) {
            let a = new process().doProcess(files[i].filePath, saveFile)
      }
}

export function saveFile(data: any){
      new readFile().writhData(data)
}
