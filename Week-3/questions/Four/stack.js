function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
    getItems() {
      return items;
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(`Items:`, stack.getItems());
stack.items = [10, 100, 100];
console.log(`Items:`, stack.getItems());
console.log(Object.keys(stack));
// => 5stack.items;// => [10]stack.items= [10,100,1000];// Encapsulationbroken!functioncreateStack() {// Write your code here...}conststack=createStack();stack.push(10);stack.push(5);stack.pop();// => 5stack.items;// => undefined
