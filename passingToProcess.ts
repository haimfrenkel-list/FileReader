import { spawn } from 'child_process'



export class passingProcess {
    task: string
    fake: boolean = true
    command: string = ''
    func: string = ''

    constructor(task: string) {
        this.task = task
        this.commandDefinition()
        this.funcDefinition()
    }

    commandDefinition() {
        this.command = this.fake ? 'node' : 'python3';
    }

    funcDefinition() {
        this.func = this.fake ? `fakePython/${this.task}.js` : `python/${this.task}.py`
    }


    passingToProcess(arg: any[]) {
        arg.unshift(this.func)
        
        return spawn(this.command, arg); 
    }

}