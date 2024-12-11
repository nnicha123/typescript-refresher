import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const { id, title, completed }: Todo = response.data;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean): void => {
  console.log(
    `Todo with id ${id}, title: ${title}, and status completed: ${completed}`
  );
};

let cars = ["toyota", "ziad", "benz", "bmw"];

let uppercaseCars = cars.map((car: string): string => car.toUpperCase());
console.log(uppercaseCars, cars);

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];

interface DrinkInterface {
  color: string;
  carbonated: boolean;
  sugar: number;
  summary(): string;
}

const coke: DrinkInterface = {
  color: "brown",
  carbonated: true,
  sugar: 50,
  summary(): string {
    let carbonatedStatment = this.carbonated
      ? "is carbonated"
      : "is not carbonated";
    return `Drink is colored: ${this.color} with sugar content ${this.sugar} and it ${carbonatedStatment}`;
  },
};

console.log(coke.summary());
