// Example for Facade implementation with an example of cooking

class BuyIngredients {

    public goToSupermarket(): string {
        return 'Go to supermarket\n';
    }

    public getIngredients(): string {
        return 'Get ingredients\n';
    }

    // ...
}

class DoPreparations {
    public prepareEquipment() {
        return 'Prepare kitchen equipment\n';
    }

    public prepareIngredients() {
        return 'Gather ingredients on kitchen counter\n';
    }

    public chopIngredients() {
        return 'Chop ingredients to desired size\n';
    }
}

class CookingProcess {
    public mixIngredients() {
        return 'Combine ingredients\n';
    }

    public cookIngredients() {
        return 'Cook meal until ready\n';
    }
}


class prepareMealFacade {
    // Declaring subsystems
    protected buyIngredients: BuyIngredients;
    protected doPreparations: DoPreparations; 
    protected cookingProcess: CookingProcess;

    // create the subsystem objects
    constructor(buyIngredients?: BuyIngredients, doPreparations?: DoPreparations, cookingProcess?: CookingProcess) {
        this.buyIngredients = new BuyIngredients();
        this.doPreparations = new DoPreparations();
        this.cookingProcess = new CookingProcess();
    }

    // Call the subsystem methods. Some methods might not be available on the facade

    public cookMeal(): string {
        let process = 'Initializing cooking process\n';
        process += this.buyIngredients.getIngredients();
        process += this.doPreparations.prepareIngredients();
        process += this.doPreparations.chopIngredients();
        process += this.cookingProcess.mixIngredients();
        process += this.cookingProcess.cookIngredients();

        return process;
    }
}

// clientCode uses facade for a simple interface
function iAmHungry(facade: prepareMealFacade) {
    console.log(facade.cookMeal());
}

const facade = new prepareMealFacade();
iAmHungry(facade);