const LinkedList = require("./LinkedList")
const Node = require("./Node");

const myList = new LinkedList();
let node = new Node(1);
myList.add(node);
node = new Node(2);
myList.add(node);
node = new Node(3);
myList.add(node);

console.log(myList.list);
console.log(myList.reverseList);

myList.addFirst(new Node(4));
console.log(myList.list);
console.log(myList.reverseList);

console.log(myList.pop());
console.log(myList.list);
console.log(myList.reverseList);

console.log(myList.shift());
console.log(myList.list);
console.log(myList.reverseList);

console.log(myList.shift());
console.log(myList.list);
console.log(myList.reverseList);

console.log(myList.pop());
console.log(myList.list);
console.log(myList.reverseList);



