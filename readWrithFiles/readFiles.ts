import * as fs from 'fs'
import { homedir } from 'os'
import { uploadDir } from './uploadToAWS'

export class readFile {
aws: boolean = true
    allFiles: Files[] = []
    constructor(aws?: boolean) {
        this.aws = aws ? aws : false
        this.createFileObj(`${homedir}/demo`)
    }


    createFileObj(path: string) {
        let all = fs.readdirSync(path)
        all.forEach(dir => {
            if (dir.includes('.pdf')) {
                this.allFiles.push({ fileName: dir, filePath: `${path}/${dir}` })
            } else {
                this.createFileObj(`${path}/${dir}`)
            }
        })
    }

    retrnFiles() {
        return this.allFiles
    }

   async writhData(data: any) {
        let path = `${homedir}/demoOut/${data.name}/${data.category}s`
        let key = `/demoOut/${data.name}/${data.category}s${data.category}_${data.company}.pdf`
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, {recursive: true})
        }
        let file = Buffer.from(JSON.stringify(data.file))
        fs.writeFileSync(`${path}/${data.category}_${data.company}.pdf`, file)
        if(this.aws){
            await uploadDir().upload(`${path}/${data.category}_${data.company}.pdf`, key)
        }
    }
}

// /${data.category}s

export interface Files {
    fileName: string,
    filePath: string
}