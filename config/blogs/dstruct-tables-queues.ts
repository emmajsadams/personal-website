export default `---
name: Tables and Queues for dstruct
slug: dstruct-tables-queues
date: '2019-06-01'
description: A walkthrough of how tables and queues were implemented for my capstone dstruct project
---

This week I will be working on the Tables and Queues for the collections project. Tables allow programmers to map a value to two keys. They are similar to maps in their function and interface. Problems like representing coordinates on a Cartesian graph, mapping first and last names to objects representing the person, and any problem that is typically solved by having a map as a value in a map. Queues are first in first out data structure that is a collection of elements. Anytime a programmer does not need the random access of a list they can make their program easier to reason about, and sometimes more efficient, by limiting the collection’s interface to a stack or queue. A queue guarantees that the first element is added is the first element out.

The tables I chose to implement were HashBasedTable, and TreeBasedTable. [The tables are located here](https://github.com/codystebbins/dstruct/tree/master/lib/structures/tables).

- HashBasedTable: This table is implemented using HashMaps. It provides O(1) amortized time for the primary operations. It provides no guarantees about the ordering of keys.
- TreeBasedTable: This table is implemented using TreeMaps. It provides O(log N) time for the primary operations. It guarantees the keys are in sorted order based on the compareTo method for the keys.

The queue I chose to implement was a DoublyLinkedListQueue. DoublyLinkedLists provide insertion and deletion at both ends in O(1) time so it is a natural choice for a queue. The elements are guaranteed to be in first in first our order. [The queues are located here](https://github.com/codystebbins/dstruct/tree/master/lib/structures/queues).

This will be the last blog post as part of capstone, but I will be continuing on with the project post capstone in my spare time. Up until capstone I will be polishing the documentation, cleaning up the code in known low quality areas, and adding tests where necessary.
`
