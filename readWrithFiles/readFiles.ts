import * as fs from 'fs'
import { homedir } from 'os'

export class readFile {

    allFiles: Files[] = []
    constructor() {
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

    writhData(data: any) {
        let path = `${homedir}/demoOut/${data.name}/${data.category}s`
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, {recursive: true})
        }
        let file = Buffer.from(JSON.stringify(data.file))
        fs.writeFileSync(`${path}/${data.category}_${data.company}.pdf`, file)
    }
}

// /${data.category}s

export interface Files {
    fileName: string,
    filePath: string
}