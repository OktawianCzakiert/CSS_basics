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
// Utwórz nowy element H2 oraz nadaj tekst dla tego
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

// Zadanie 6 - JS
// Usun utworzony w poprzednim zadaniu element z HTML

//usuwanie elementu
el.remove();

// Zadanie 7,8,9 - JS
// Zadanie - click
// Utworz przycisk w html oraz nadaj mu id
// - Pobierz element w JS
// - Napisz prosta funkcje strzalkowa która wypisuje tekst w konsoli
// - Dodaj funkcje na event click do pobranego przycisku

// Zadanie - change
// Utworz input w HTML oraz nadaj mu ID
// - Pobierz element w JS oraz przypisz go do zmiennej
// - Napisz funkcje która pobiera wartosc elementu i wyswietla w
// konsoli
// - Dodaj event podczas zmiany wartosci do inputa wraz z funkcja

// Zadanie - submit
// Utworz formularz z jednym inputem oraz przyciskiem z typem submit
// - Pobierz formularz w JS
// - Utworz funkcje która pobierze oraz wyswietli dane z formularza
// - Dodaj funkcje do formularza wywolana na event submit

// ZDARZENIE - CLICK

const getAlert = () => {
  console.log("Zdarzenie CLICK!");
};

const button = document.querySelector(".primary-btn");

// I WERSJA
button.addEventListener("click", getAlert);

//usunięcie daneg zdarzenia z funkcją
button.removeEventListener("click", getAlert);

//II wersja

button.addEventListener("click", () => {
  alert("alert button po click!");
});

// ZDARZENIE - CHANGE

const firstNameInput = document.querySelector("#first-name");
const onChange = (event) => {
  console.log(event.target.value);
};

firstNameInput.addEventListener("change", onChange);

// ZDARZENIE - SUBMIT
// pobieranie formularza
const form = document.querySelector("#my-form");

//problem z pobieraniem wartości
const formInputName = document.querySelector("#new-name");

//tworzenie funkcji
const onSubmit = (event) => {
  // resetuje domyślne zachowanie formularza - usuwa odświezanie strony
  event.preventDefault();
  console.log("Działa metoda SUBMIT");
  console.log(formInputName.value);
};

form.addEventListener("submit", onSubmit);
