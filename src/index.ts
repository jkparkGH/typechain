const nameString = "jake",
  age = 30,
  gender = "male";

const sayHello = (nameString: string, age: number, gender: string): void => {
  console.log(
    `HI, My name is ${nameString}, I ${age} years old and I'm ${gender}`
  );
};

sayHello(nameString, age, gender);
