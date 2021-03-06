// TODO: actually load this dynamically from an mdx file instead of declaring it as a string in TS
export default `---
name: Error Handling, Lists, Maps, and Trees for dstruct
slug: dstruct-error-list-map-tree
date: '2019-04-29'
description: A walkthrough of how errors, lists, maps, and trees were implemented for my capstone dstruct project
---

This post is the first of many documenting my progress on a [TypeScript data structures & algorithms library named dstruct](https://gitlab.com/emmajsadams/dstruct). It aims to provide some of the popular data structures and algorithms available in languages like Java, C#, and Scala which enable programmers to efficiently solve problems with less code.

The first step to building a library like this is to establish a standard for error handling. Error handling is necessary to prevent errors created by programmers and to create logic to recover from errors while the program is running. There are many error patterns in JavaScript ranging from errors passed as parameters in callbacks, error codes, and throwing errors to be caught within a try/catch statement. I decided that throwing errors was the best approach for modern JavaScript given that new developments in the language like generators enable a synchronous syntax for asynchronous programming that previously was unavailable. Another reason is that this library will have no network programming given that the data structures and algorithms do not need networked resources. When JavaScript was restricted to an asynchronous callback style of programming this pattern was less valuable. The benefit to this approach is that much less boilerplate error handling is necessary for the programmer.

Next steps was to determine the most popular data structures and algorithms. This was a bit of a challenge since there is no authoritative source and none are objectively the best for all problems. I looked across the standard libraries of Java(1), Scala(2), C#(3), as well as popular online learning resources (4) and textbooks (5). Eventually I decided on what I believe to be the most widely used and ubiquitous data structures and algorithms.

The lists I chose to implement were ArrayList, and DoublyLinkedList.

- ArrayList proves many of the benefits of normal arrays in that they are compact within memory, allow random access, and utilize the cpu data cache while being able to dynamically resize based on the number of elements added. It is by far one of the most used data structures and JavaScript even provides a simple form of an ArrayList as the default array. By creating a TypeScript class based on the JavaScript array I was able to provide a consistent API, generic interfaces, and functionality like equals and indexOf with custom comparators. ArrayList performs well when random access and low memory usage is needed.
- DoublyLinkedList is a useful data structure for implementing several of the other data structures in this library like Queues, Stacks, Deque, and the linked version of common structures. It performs well when the use case is primarily insertion and deletion without the need for random access. One list I want to implement if I am ahead of schedule is the TreeList as it can outperform a LinkedList in most scenarios beyond small data sets and iterator positioned inserts (6, 7).

The maps that I chose to implement were HashMap, WeakHashMap, LinkedHashMap, HashBiMap, TreeMap.

- HashMap is a useful data structure to store key-value pairs that provides amortized constant average time per operation. The upcoming ECMAScript 6 harmony specification for JavaScript provides a native HashMap that accepts primitives and objects for keys, as opposed to the string key limited maps which JavaScript provides currently, which was used to implement the HashMap. Node.js can take advantage of this with the harmony option (8) and browsers can use shims until the specification is implemented in modern browsers (9).
- WeakHashMaps are identical to HashMaps except that the elements contained can be removed can reclaimed by the garbage collector when there are no other strong references to the elements. This is very useful for implementing caches and in particular any sort of DOM node cache like that contained within jQuery. WeakHashMaps are implemented by the upcoming WeakMap in ES6 much like HashMap.
- LinkedHashMap is identical to HashMap except that the elements added can be accessed in the order that they were put into the map.
- HashBiMap are identical to HashMaps except that they maintain an inverse HashMap which maps the values to keys.
- TreeMap stores key-value pairs in a sorted order based on a given comparator in logarithmic time per operation. While slower than HashMaps per operation certain use cases can benefit if there is a need to maintain the keys in a sorted order. The TreeMap is implemented with a RedBlackTree which I will discuss in the next paragraph.

The tree implemented was a RedBlackTree which is a self-balancing binary search tree that provides average logarithmic time per operation. It is useful for implementing tree data structures since it avoids the inefficient worst cases of other self-balancing binary search trees like AVL trees which can degenerate in to LinkedList.

For these data structures an emphasis on the separation between implementation and interface was an important goal. To achieve that all of the data structures were implemented according to abstract generic interfaces. Programmers who use the library are encouraged to use these interfaces when typing their programs rather than the implementations. Implementations are tested with unit tests suites per interface ensuring that implementations which implement the same interface should pass the same tests.

The next steps of the project are to comprehensively document the existing code written and implement the Sets, Queues, and Stacks.

1. [Java collections](http://docs.oracle.com/javase/7/docs/api/java/util/Collections.html)
2. [Scala collections](http://www.scala-lang.org/api/2.10.3/index.html#scala.collection.package)
3. [C# collections](http://msdn.microsoft.com/en-us/library/ybcx56wz.aspx)
4. [Big O Cheatsheet](http://bigocheatsheet.com/#comments)
5. [Introduction to Algorithms - CLR](http://smile.amazon.com/Introduction-Algorithms-Thomas-H-Cormen/dp/0262033844)
6. [Apache collections TreeList benchmarks](https://commons.apache.org/proper/commons-collections/javadocs/api-3.2.1/org/apache/commons/collections/list/TreeList.html)
7. [StackOverflow comparision of lists](https://stackoverflow.com/questions/1713144/list-implementations-does-linkedlist-really-perform-so-poorly-vs-arraylist-and)
8. [Node.js Harmony Guide by 2ality](http://www.2ality.com/2013/04/nodejs-harmony.html)
9. [WebReflection/es6-Collections](https://github.com/WebReflection/es6-collections)
`
