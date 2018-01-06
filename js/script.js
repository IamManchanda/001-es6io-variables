/**
 * JavaScript
 */

{
  const name = 'harry';
  console.log(name);
};

for (let i = 1; i <= 10; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(`The Number is ${i }`);
  }, 1000)
}
