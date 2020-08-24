class HistoryObserver{
    constructor(){
        this.colorHistory = [];
    }

    update(model){
        this.colorHistory.unshift(model.color[0].toUpperCase());

        let msg = `The most recent colors were:`;
        for (let i = 0; i < 5; i++){
            if (this.colorHistory[i]){
                msg += this.colorHistory[i] + ' ';
            }
        }
        console.log(msg);
    }
}

module.exports = HistoryObserver;