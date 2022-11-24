import { passingProcess } from "./passingToProcess";
import { process } from "./process";
import { readFile } from "./readWrithFiles/readFiles";
import express, {Application} from 'express';
import cors from 'cors'

const app = express()
app.use(cors())
app.use('/api', express.json())
app.use('/auth', express.json())



app.post('/api/start', function(req, res) {
      var files = new readFile(req.body.AWS).retrnFiles()
      var generate = extractData(files)
      res.status(200).send()
})



export function extractData(files: any) {
      for (let i = 0; i < files.length; i++) {
            let a = new process().doProcess(files[i].filePath, saveFile)
      }
}

export function saveFile(data: any){
      new readFile().writhData(data)
}

let server = app.listen(5001, function () {

      let port = server.address()
       
       console.log("server is up in port: ", port)
    
    })
