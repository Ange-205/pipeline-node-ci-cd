const add = require('./index');

if (add(2, 3) !== 5) {
  throw new Error("Test échoué : 2 + 3 devrait donner 5");
}

console.log("✅ Test réussi !");
