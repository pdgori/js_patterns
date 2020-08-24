const NumberModel = require('./NumberModel');
const ConsoleObserver = require('./ConsoleObserver');
const HistoryObserver = require('./HistoryObserver');

const model = new NumberModel();
const consoleObserver = new ConsoleObserver();
const historyObserver = new HistoryObserver();

model.addObserver(consoleObserver)
model.addObserver(historyObserver)

model.increment();
model.notifyObservers();
model.increment();
model.notifyObservers();
model.increment();
model.notifyObservers();
model.increment();
model.notifyObservers();
model.increment();
console.log(model);