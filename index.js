var recipes = {
  spaggetti: "pasta"
};

function updateObjectWithKeyAndValue(rargetObject, updatesObject) {
  return Object.assign({}, recipes, {[omelette]: "eggs"});
}

// function updateObjectWithKeyAndValue(object, key, value) {
//   recipes.sandwich = "bread";  
  
//   return object;
// }

