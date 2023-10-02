console.clear();

// EXERCISE 1
// Create an object personWithNameAgeEmail with the properties "name", "age" and "email".


// Solution
const personWithNameAgeEmail = {
  name: "example",
  age : 5,
  email : "me@you.him",
};

//--------------------------------------------------------------------------------

// EXERCISE 2
// Set the values of name and age equal to the corresponding values of the personAlex object.

const personAlex = {
  name: "Alex",
  age: 24,
};

let nameOfAlex = "Change me";
let ageOfAlex = "Change me";

// Solution
nameOfAlex = personAlex.name;
ageOfAlex = personAlex.age;
//--------------------------------------------------------------------------------
// EXERCISE 3
// Change the value of name to "Alex" and the value of age to "35" by updating the object personToChange: person.existingProperty = newValue.

const personToChange = {
  name: "Kim",
  age: 24,
};

// Solution
personToChange.name = "Alex";
personToChange.age = 35;
//--------------------------------------------------------------------------------
// EXERCISE 4
// Add the properties age "5" and breed "husky" to the object petPluto: pet.newProperty = newValue.

const petPluto = {
  name: "Pluto",
  species: "dog",
};

// Solution
petPluto.age = 5
petPluto.breed = "husky"
//--------------------------------------------------------------------------------

export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};
