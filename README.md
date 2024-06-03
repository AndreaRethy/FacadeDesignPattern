# Andrea Réthy - Entrega 1.2: Design Patterns

* Typical, high-level solutions to commonly occuring problems in software design.
* Do not define clear set of actions, it is only a description of a solution
* In 1994 Design Patterns: Elements of Reusable Object-Oriented Software was published by four authors: Erich Gamma, John Vlissides, Ralph Johnson, and Richard Helm.
* It contains 23 design patterns which are popular to this day
* It's also important to avoid the overuse and abuse of patterns where simple solutions are enough
* Basic, low-level patterns are called idioms and usually apply to a single language
* More universal and high-level patterns are called architectural patterns
* Main categories by intent or purpose: Creational patterns, Structural patterns, Behavioral patterns

## Creational patterns

These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

## Structural patterns

These patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

## Behavioral patterns

These patterns are concerned with algorithms and the assignment of responsibilities between objects.


## Facade

**Facade** is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

### Problem Facade is solving

When working with a broad set of objects you need to initialize them one-by-one, keep track of dependencies and use their methods in the correct order etc.

Facade is a class that provides a simple interface to a complex subsystem. It limits the functionality compared to working directly with the subsystems, but makes it much easier to use

Instead of making your code work with dozens of the framework classes directly, you create a facade class which encapsulates that functionality and hides it from the rest of the code. This structure also helps you to minimize the effort of upgrading to future versions of the framework or replacing it with another one. The only thing you’d need to change in your app would be the implementation of the facade’s methods.

#### When to use Facade?

1. Use the Facade pattern when you need to have a limited but straightforward interface to a complex subsystem.
2. Use the Facade when you want to structure a subsystem into layers.

### How to implement Facade?

1. Check if it's possible to create a simpler interface compared to what the subsystem provides. This new interface should make the client code independent from the subsystem classes (where possible)
2. Create a new facade class for this interface. The facade should redirect the calls from the client code to the proper objects of the subsystem. The facade is responsible for initializing the subsystem and managing it's lifecycle.
3. Make all the client code communicate with the subsystem only via the facade. This will protect the client code. For example when a subsystem gets upgraded to a new version, you wil only need to modify the code in the facade.
4. It is possible to create various facades to avoid the facade getting too big.
