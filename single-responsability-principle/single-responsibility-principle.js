const logMessage = require('./logger.js')

class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(caloriesCount) {
        this.currentCalories += caloriesCount;
        if (this.currentCalories > this.maxCalories)
            logMessage('Max calories exceeded')
    }
}

const calorieTracker = new CalorieTracker(400);
calorieTracker.trackCalories(100)
calorieTracker.trackCalories(100)