// 1.Напишите функцию, принимающую строку и число. Поверните в виде массива только слова, длина которых превышает число.
// function reverseString(S,N) {
//     if (S.length > N) {
//         let x = S.split("").reverse()
//         console.log(x)
//     }
//     else {
//         console.log("Длина слова не превышает число!")
//     }
// }

// reverseString("Madi", 3)

// 2. Напишите функцию, которая возвращает true, если первый переданный аргумент (строка) заканчивается вторым аргументом (также строкой).
// function Includes(str, substr) {
//     console.log(str.includes(substr, str.length - substr.length))
// }

// Includes('stackAbusestack', 'stack')

// 3. Напишите функцию, которая получает массив целых чисел и возвращает массив средних значений каждого целого числа и последователя, если он есть.
// function newArr(arr) {
//     let arr1 = []
//     for (let i = 0;i < arr.length - 1;i++) {
//         x = (arr[i] + arr[i+1]) /2
//         arr1.push(x)
//     }
    
//     console.log(arr1)
// }

// newArr([2,-2,2,-2,2])

// 4. Создайте функцию, которая принимает строку и возвращает количество (количество) гласных, содержащихся в ней.
// const vowels = ["а","у","о","ы","э","я","ю","ё","и","е"]
// let count = 0

// function findVowels(str) {
//     for (let item of str.toLowerCase()) {
//         if (vowels.includes(item)) {
//             count++
//         }
//     }
//     return count
// }

// console.log(findVowels("Мади"))

// 5. Напишите функцию, чтобы получить копию объекта, где ключи стали значениями, а ключи.
// let first = {
//     "first name": "Madi",
//     "last name": "Abdyev",
//     city: "Almaty"
//   }
  
//   function invertObject(obj) {
//       let invertedObj = {};
//       for (let key in obj) {
//         invertedObj[obj[key]] = key;
//       }
//       return invertedObj;
//     }
    
//   console.log(invertObject(first))

// 6. Ивана Иванова обокрали. Но его вещи были застрахованы на определенную сумму. Учитывая украденные вещи и ограничения страховки, верните разницу между общей стоимостью этих вещей и пределом политики.
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function sum(obj, number) {
//     let val = Object.values(obj)
//     let count = 0
//     for (let i of val) {
//         count += i
//     }
//     return count - number
// }

// console.log(sum(salaries, 600))

// 7. Напишите функцию, которая поверхностно сравнивает два объекта. Ожидаемый результат: True если объекты идентичны, false если объекты разные.
// function objectsCompare(obj1, obj2) {
//     let keys1 = Object.keys(obj1)
//     let keys2 = Object.keys(obj2)
//     if (keys1.length !== keys2.length) {
//         return false
//     }
    
//     for (key of keys1) {
//         if (obj1[key] !== obj2[key]) {
//             return false
//         }
//     }
    
//     return true
// }

// 8. Создать класс Tiles (кафель), который будет содержать поля с открытым доступом: brand, size_h, size_w, price и метод класса getData(). В главной функции объявить пару объектов класса и внести данные в поля. Затем отобразить их, вызвав метод getData().

// class Tiles {
//     constructor(brand, size_h, size_w, price) {
//       this.brand = brand;
//       this.size_h = size_h;
//       this.size_w = size_w;
//       this.price = price;
//     }
  
//     getData() {
//       return `Бренд: ${this.brand}, размер: ${this.size_h}x${this.size_w}, цена: ${this.price} руб.`;
//     }
//   }
  

//   const tile1 = new Tiles("Kerama Marazzi", 30, 30, 750);
//   const tile2 = new Tiles("Ceramica Fiore", 40, 40, 1100);
  

//   console.log(tile1.getData());
//   console.log(tile2.getData());

// 9. .Создать класс "Person" со свойствами "name" и "age". Добавить метод
// "sayHello", который будет выводить в консоль сообщение вида "Привет, меня
// зовут Имя, мне Возраст лет". Добавить свойство "hobbies" - массив с хобби.
// Добавить метод "addHobby", который будет добавлять новое хобби в массив
// «hobbies». Создать класс «child», который наследует все свойства и методы
// класса Person». Добавить произвольные свойства и методы. Учесть, что
// некоторые методы и свойства могут быть приватными или защищенными.

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.hobbies = [];
//     }
  
//     sayHello() {
//       console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`);
//     }
  
//     addHobby(hobby) {
//       this.hobbies.push(hobby);
//     }
//   }
  
//   class Child extends Person {
//     constructor(name, age, school) {
//       super(name, age);
//       this.school = school;
//     }
  
//     play() {
//       console.log(`Я играю в ${this.hobbies[Math.floor(Math.random() * this.hobbies.length)]}`);
//     }
//   }
  

//   const person = new Person("Иван", 30);
//   person.sayHello();
  

//   person.addHobby("фотография");
//   person.addHobby("бег");
//   console.log(person.hobbies);
  
  
//   const child = new Child("Мади", 8, "Школа №5");
//   child.sayHello();
//   child.addHobby("футбол");
//   child.addHobby("рисование");
//   child.play();

// 10. .Создать класс "Shape" со свойством "color". Добавить метод "getColor",
// который будет возвращать цвет фигуры. Создать класс "Rectangle", который
// наследуется от класса "Shape" и добавляет свойства "width" и "height". Добавить
// методы "getArea" и "getPerimeter", которые будут возвращать площадь и
// периметр прямоугольника соответственно. Создать класс "Square", который
// наследуется от класса "Rectangle" и имеет только одно свойство "sideLength".

// class Shape {
//     constructor(color) {
//       this.color = color;
//     }
  
//     getColor() {
//       return this.color;
//     }
//   }
  
//   class Rectangle extends Shape {
//     constructor(color, width, height) {
//       super(color);
//       this.width = width;
//       this.height = height;
//     }
  
//     getArea() {
//       return this.width * this.height;
//     }
  
//     getPerimeter() {
//       return 2 * (this.width + this.height);
//     }
//   }
  
//   class Square extends Rectangle {
//     constructor(color, sideLength) {
//       super(color, sideLength, sideLength);
//     }
//   }
  
 
//   const shape = new Shape("зеленый");
//   console.log(shape.getColor());
  
  
//   const rectangle = new Rectangle("синий", 5, 10);
//   console.log(rectangle.getArea());
//   console.log(rectangle.getPerimeter());
  
  
//   const square = new Square("красный", 7);
//   console.log(square.getArea());
//   console.log(square.getPerimeter());
  

  