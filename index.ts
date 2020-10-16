const nameString = "jake",
  age = 30,
  gender = "male";

const sayHello = (nameString, age, gender?) => {
  console.log(
    `HI, My name is ${nameString}, I ${age} years old and I'm ${gender}`
  );
};

sayHello(nameString, age);
