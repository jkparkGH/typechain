interface Human {
  humanName: string;
  age: number;
  gender: string;
}

const humanName = "jake",
  age = 30,
  gender = "male";

const jake = {
  humanName: "jake",
  age: 30,
  gender: "male"
};

const sayHello = (humanName: string, age: number, gender: string): void => {
  console.log(
    `### sayHello 1 ::  HI, My name is ${humanName}, I ${age} years old and I'm ${gender}`
  );
};
const sayHello2 = (person: Human): void => {
  console.log(
    `### sayHello 3 ::  HI, My name is ${person.humanName}, I ${person.age} years old and I'm ${person.gender}`
  );
};
const sayHello3 = ({ humanName, age, gender }: Human): void => {
  console.log(
    `### sayHello 2 ::  HI, My name is ${humanName}, I ${age} years old and I'm ${gender}`
  );
};

sayHello(jake.humanName, jake.age, jake.gender);
sayHello2(jake);
sayHello3(jake);
