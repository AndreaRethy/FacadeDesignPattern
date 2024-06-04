// Example for Facade implementation with an example of cooking
// Step 1. Creating sub-systems
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
    public prepareEquipment(): string {
        return 'Prepare kitchen equipment\n';
    }

    public prepareIngredients(): string {
        return 'Gather ingredients on kitchen counter\n';
    }

    public chopIngredients(): string {
        return 'Chop ingredients to desired size\n';
    }
}

class CookingProcess {
    public mixIngredients(): string {
        return 'Combine ingredients\n';
    }

    public cookIngredients(): string {
        return 'Cook meal until ready\n';
    }
}

// Step 2. Creating a facade
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

// Step 3. link facade to the client code
function iAmHungry(facade: prepareMealFacade) {
    console.log(facade.cookMeal());
}

const facade = new prepareMealFacade();
iAmHungry(facade);