interface Human {
  name: string;
  age: number;
  gender: string;
}

class Person {
  public name: string;
  public age: number;
  public gender: string;
  private weight: number | string;
  constructor(
    name: string,
    age: number,
    gender: string,
    weight: number | string = "00"
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
  }
  getPersonWeight = () => {
    return `${this.weight}kg`;
  };
}

const jake = {
  name: "jake",
  age: 30,
  gender: "male"
};

const lyn: Person = new Person("lyn", 29, "male", 68);

const sayHello = (name: string, age: number, gender: string): void => {
  console.log(
    `### sayHello 1 ::  HI, My name is ${name}, I ${age} years old and I'm ${gender}`
  );
};
const sayHello2 = (person: Human): void => {
  console.log(
    `### sayHello 2 ::  HI, My name is ${person.name}, I ${person.age} years old and I'm ${person.gender}`
  );
};
const sayHello3 = ({ name, age, gender, getPersonWeight }: Person): void => {
  console.log(
    `### sayHello 3 ::  HI, My name is ${name}, I ${age} years old and I'm ${gender}, my weight ${getPersonWeight()}`
  );
};

export default (() => {
  sayHello(jake.name, jake.age, jake.gender);
  sayHello2(jake);
  sayHello3(lyn);
})();
