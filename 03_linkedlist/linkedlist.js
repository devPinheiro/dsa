// a singly linked list is a data structure that consists of a sequence of nodes
// where each node contains a value and a reference to the next node in the sequence
// The first node in the list is called the head, and the last node is called the tail
// The linked list can grow and shrink in size dynamically, as nodes can be added or removed
// from the list without needing to allocate or deallocate memory for the entire list
// A linked list is a linear data structure where each element is a separate object
// Each node of a list is composed of data and a reference (or link) to the next node in the sequence

class LinkedList {
    constructor(value) {
        // Initialize the linked list with a head node
        this.head = {
            value: value,
            next: null
        }
        // Set the tail to the head node
        // The tail is the last node in the linked list
        this.tail = this.head;
        this.length = 1;
        
    }

    append(value) {
        // Create a new node
        const newNode = {
            value: value,
            next: null
        }
        // Set the next property of the current tail to the new node
        this.tail.next = newNode;
        // Update the tail to the new node
        this.tail = newNode;
        // Increment the length of the linked list
        this.length++;
        return this
    }

    prepend(value){
        // Get
        const newNode = {
            value: value,
            next: null
        }
        // Set the next property of the current tail to the new node
        newNode.next = this.head;
        // Update the tail to the new node
        this.head = newNode;
        // Increment the length of the linked list
        this.length++;
        return this
    }
}

const myLinkedList = new LinkedList(10);
// 5 ---> 10 ---> 20 --> null
console.log(myLinkedList); // { head: { value: 10, next: null }, tail: { value: 10, next: null }, length: 1 }
myLinkedList.append(20);
console.log(myLinkedList); // { head: { value: 10, next: { value: 20, next: null } }, tail: { value: 20, next: null }, length: 2 }
myLinkedList.prepend(5);    
console.log(myLinkedList); // { head: { value: 5, next: { value: 10, next: { value: 20, next: null } } }, tail: { value: 20, next: null }, length: 3 }