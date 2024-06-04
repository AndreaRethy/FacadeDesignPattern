// Example for Facade implementation with an example of cooking
var BuyIngredients = /** @class */ (function () {
    function BuyIngredients() {
    }
    BuyIngredients.prototype.goToSupermarket = function () {
        return 'Go to supermarket\n';
    };
    BuyIngredients.prototype.getIngredients = function () {
        return 'Get ingredients\n';
    };
    return BuyIngredients;
}());
var DoPreparations = /** @class */ (function () {
    function DoPreparations() {
    }
    DoPreparations.prototype.prepareEquipment = function () {
        return 'Prepare kitchen equipment\n';
    };
    DoPreparations.prototype.prepareIngredients = function () {
        return 'Gather ingredients on kitchen counter\n';
    };
    DoPreparations.prototype.chopIngredients = function () {
        return 'Chop ingredients to desired size\n';
    };
    return DoPreparations;
}());
var CookingProcess = /** @class */ (function () {
    function CookingProcess() {
    }
    CookingProcess.prototype.mixIngredients = function () {
        return 'Combine ingredients\n';
    };
    CookingProcess.prototype.cookIngredients = function () {
        return 'Cook meal until ready\n';
    };
    return CookingProcess;
}());
var prepareMealFacade = /** @class */ (function () {
    // create the subsystem objects
    function prepareMealFacade(buyIngredients, doPreparations, cookingProcess) {
        this.buyIngredients = new BuyIngredients();
        this.doPreparations = new DoPreparations();
        this.cookingProcess = new CookingProcess();
    }
    // Call the subsystem methods. Some methods might not be available on the facade
    prepareMealFacade.prototype.cookMeal = function () {
        var process = 'Initializing cooking process\n';
        process += this.buyIngredients.getIngredients();
        process += this.doPreparations.prepareIngredients();
        process += this.doPreparations.chopIngredients();
        process += this.cookingProcess.mixIngredients();
        process += this.cookingProcess.cookIngredients();
        return process;
    };
    return prepareMealFacade;
}());
// clientCode uses facade for a simple interface
function iAmHungry(facade) {
    console.log(facade.cookMeal());
}
var facade = new prepareMealFacade();
iAmHungry(facade);
