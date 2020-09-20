Before I talk about the next set of updates for the [TypeScript data structures & algorithms library](https://github.com/codystebbins/dstruct) I am working on I wanted to discuss some of the setbacks I faced. The first was that I ran into a huge problem with the internal module system as described by [this codeplex issue](https://typescript.codeplex.com/workitem/913). Essentially the dependency resolution only uses file references which can result in in single file output not ordering the TypeScript files by dependencies. This means the single file output will immediately throw an undefined error when loaded into the browser making internal modules useless and the library broken. Other than maintaining a separate list of correct dependency order per build, I would need to switch to external modules. This made me reconsider the use of internal modules and I decided external modules would be more useful for the following reasons.

- Not having to rely on the TypeScript compiler’s dependency resolution, which is less tested and mature than AMD or CommonJS.
- TypeScript’s internal module system is no longer a part of the [upcoming ES6 module system](http://wiki.ecmascript.org/doku.php?id=harmony:modules) whereas the external module system of typescript mirrors the upcoming proposal. [The TypeScript team has plans to support the ES6 module system](https://typescript.codeplex.com/discussions/446695) with the current external module system. This future proofs the library for the upcoming changes. [1]
- Since AMD & CommonJS are supported within JavaScript it makes modules within the library easier to use by JavaScript developers.

The other setback I had was that I had failed to realize that ES6 Maps, WeakMaps, and Sets performed key equality based on the built in equals operation. This means that two objects which had identical properties would still be not the same key and would not allow the user to modify how keys are compared. I wanted my data structures to have user definable hashCode and equals methods to determine key equality instead of this. So I went back and made the necessary changes to accomplish this.
The Sets I chose to implement were HashSet, and TreeSet. Sets are a collection of unique elements. [Sets can be found here](https://github.com/codystebbins/dstruct/tree/master/lib/structures/sets)

- HashSet guarantees O(1) performance for all basic operations. It does not guarantee any key ordering unlike TreeSet. It is implementing using the HashMap I created in the last updates.
- TreeSet guarantees O(log N) for all basic operations. It also guarantees key ordering based on a user defined compareTo method on the objects added to it.

Similar to a set, I also implemented some MultiSets which are collections of unique elements that allow duplicates. Each unique element is associated with a count integer determining how many of a given unique element has been added to the MultiSet. Elements remove from a MultiSet reduce the count. [The MultiSets can be found here](https://github.com/codystebbins/dstruct/tree/master/lib/structures/multiSets)

- HashMultiSet guarentees O(1) performance for all basic operations. It does not guarantee any key ordering. It is implemented with a HashMap mapping unique elements to counts.

The last update was a Stack which is a linear collection of elements which is last in first out. I chose to implement the ArrayStack. [The stacks can be found here](https://github.com/codystebbins/dstruct/tree/master/lib/structures/stacks).

- ArrayStack guarantees O(1) amortized performance for all basic operations.

This update was filled with setbacks and progress. However the library has come along mostly on schedule and I am happy with the progress.
