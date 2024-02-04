console.log("Działa");

const name = "1";

let value;

value = 5;

// Zadanie 1 - JS
// Const i let - zadanie
// Utwórz w pliku script.js dwie zmienne:
// 1. Zmienna stała z przypisana wartoscia (sprobuj utworzyc na poczatku
// zmienna ale nie przypisuj do niej wartosci – zobacz jaki blad
// otrzymasz)
// 2. Zmienna let bez przypisania wartosci (zobacz co się stanie w tym
// wypadku) - nastepnie przypisz w kolejnej linii do tej zmiennej
// wartosc

console.log(name == value);

//tablice
//deklaracja tablicy
const tab = ["bob", "alice", "jerry"];

//metody tablicowe
tab.push("teddy");
tab.pop();
tab.shift();

//metody tablicowe - pętle
// nie zwraca nam nic - iteruje po elementach bez modyfikacji
console.log("forEach");
tab.forEach((item) => {
  console.log(item);
});

//zwraca nam tablice elementów - które mozna modyfikować

const newTab = tab.map((item) => {
  return item + "123";
});
console.log("map", newTab);

//filtruje nam elementy tablicy na bazie warunku () => warunek

const newFilteredTab = tab.filter((item) => item.length >= 4);
console.log("filter", newFilteredTab);

//funkcja o nazwie getItem(() => {})

//FUNKCJE

// Funkcje strzałkowe - zadanie
// Utwórz funkcje getNumber która zwraca liczbe podana w parametrach
// funkcji, nastepnie wywolaj ja

const arrowAdd = (a, b, c) => {
  return a + b + c;
};

console.log(arrowAdd(1, 2, 5));

//OBIEKTY

const person = {
  firstName: "bob",
  lastName: "bob",
  "second-name": "alice",
};

console.log(person.firstName);
console.log(person["second-name"]);

//destrukturyzacja

//destrukturyzacja obiektu

const { firstName, lastName } = person;
console.log(firstName, lastName);

//destrukturyzacja tablicowa
// const tab = ["bob", "alice", "jerry"];

const [item1, item2, item3] = tab;

// DOM

// const header = document.getElementById('id')
// const header2 = document.querySelector('selector')

const header = document.getElementById("test-id");
const header2 = document.querySelector(".primary-link");
console.log(header);
console.log(header2);

// Zadanie 4 - JS
// Utwórz nowy element H2 w sekcji pierwszej oraz nadaj tekst dla tego
// elementu za pomoca el.textContent = 'text'
// - wypisz utworzony element w konsoli

const el = document.createElement("h2");
el.textContent = "Nowy text";
console.log(el);

// Zadanie 5 - JS
// Pobierz wybrana sekcje za pomoca querySelector, a nastepnie dodaj
// utworzony element z poprzedniego zadania do tej sekcji

const sect = document.querySelector(".section1");

sect.append(el);
