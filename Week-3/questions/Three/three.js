/**
 * The code will log always `Count=0` as when the
 * function was called first the count value was zero
 * so the count value also became zero as createIncrement
 * was called, i.e. it has old count value stored.
 *
 * To get the updated count value assign message
 * variable inside log function then we will get
 * the correct value of counter.
 *
 * @returns
 */
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
