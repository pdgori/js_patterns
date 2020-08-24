class Logger {
    constructor(){
        if (Logger.instance == null){
            this.logs = [];
            Logger.instance = this;
        }
        return Logger.instance;
    }
    
    log(message){
        this.logs.push(message);
        console.log(`Info ${message}`)
    }
    printLogCount(){
        console.log(`${this.logs.length} Logs`);
    }
}

const logger = new Logger();

//Can't have any new methods
Object.freeze(logger);

module.exports = logger;
