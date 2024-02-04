// # Zadania fetch
// 1. stworz przycisk do pobierania danych
// napisz funkcje za pomoca metodych fetch do pobierania listy uzytkownikow
// lista uzytkownikow powinna wyswietlic sie w konsoli po wcisnieciu przycisku
// aby to sie wykonalo musimy dodac event listener do przycisku na event click

// 2. stworz formularz z input o typie number do wybrania id uzytkownika z zakresu 1-100
// stworz funkcje do pobierania pojedynczego uzytkownika
// przypisz do formularza utworzona funkcje
// po wcisnieciu przycisku submit powinno nam wyswietlic uzytkownika w konsoli

// 3. stworz formularz ktory bedzie aktualizowal firstName oraz lastName uzytkownika
// formularz bedzie zawieral 3 inputy (okresla id, imie, nazwisko) oraz przycisk
// input od id powinien byc sprawdzany (min=1, max=100)
// napisz funkcje ktora pobiera dane z formularza oraz aktualizuje wybranego uzytkownika
// przypisz funkcje jako event listener do formularza

// 4. stworz formularz do utworzenia nowego uzytkownika
// stworz funkcje ktora bedzie pobierac pola z formularza i tworzyc na ich bazie nowego uzytkownika w bazie
// po utworzeniu dajmy alert dla uzytkownika o nowym produkcie
// pamietamy o sprawdzeniu czy dane nie sa puste
// dodajemy event listener do formularza z referencja funkcji

// 5. Na bazie zadania nr 1, po wcisnieciu przycisku powinno nam dodac liste do DOM oraz wyswietlic w
//przegladarce

// 6. Na bazie zadania nr 5, dodaj przycisk "usun" do elementu listy <li> ktory po wcisnieciu listy bedzie
//usuwal element z bazy, jezeli sie to powiedzie to usuwa element z HTML

// 7. Na bazie zadan z utworzonej listy utwórz formularz "search form" ktory po wcisnieciu przycisku "wyslij"
//filtruje nam wyswietlana liste na bazie wpisanej frazy

//AD 1

const fetchData = async () => {
  const apiUrl = "https://dummyjson.com/users?limit=30";
  const list = document.querySelector("#uzytkownicy");

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const { users } = await response.json();

    users.forEach((element) => {
      const userId = element.id;
      let li = document.createElement("li");
      li.textContent = `${element.firstName}, ${element.lastName} `;
      const delButton = document.createElement("button");
      delButton.textContent = "Delete";
      delButton.addEventListener("click", () => {
        delUser(userId);
        li.remove();
      });
      li.append(delButton);
      list.append(li);
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation", error);
  }
};

const button = document.querySelector("#form-btn");
button.addEventListener("click", fetchData);

//AD 2

const searchData = async (number) => {
  const apiUrl = `https://dummyjson.com/users/${number}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation", error);
  }
};

const ourForm = document.querySelector("#my-form");

const searchUser = (event) => {
  event.preventDefault();
  const inputNumber = document.querySelector("#number").value;
  searchData(inputNumber);
};

ourForm.addEventListener("submit", searchUser);

//AD 3

const updateData = async (number, firstName1, lastName1) => {
  const apiUrl = `https://dummyjson.com/users/${number}`;

  try {
    const response = await fetch(apiUrl, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName1,
        lastName: lastName1,
      }),
    });

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation", error);
  }
};

const updateForm = document.querySelector("#update-form");

const updateUser = (event) => {
  event.preventDefault();
  const editNumber = document.querySelector("#id_update").value;
  const newName = document.querySelector("#name").value;
  const newLastname = document.querySelector("#lastname").value;

  updateData(editNumber, newName, newLastname);
};

updateForm.addEventListener("submit", updateUser);

//AD 4

const addUser = async (newUser) => {
  try {
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) throw new Error("Something wrong with response!");

    const resJSON = await response.json();
    alert(`Dodany user: ${resJSON.firstName} ${resJSON.lastName}`);
    console.log(resJSON);
  } catch (e) {
    console.log(e);
  }
};

const createUser = (event) => {
  event.preventDefault();
  const newName = document.querySelector("#new_name").value;
  const newLastname = document.querySelector("#new_lastname").value;
  const newUser = {
    firstName: newName,
    lastName: newLastname,
  };
  addUser(newUser);
};

addForm = document.querySelector("#add-form");
addForm.addEventListener("submit", createUser);

const delUser = async (DeleteId) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${DeleteId}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Something wrong with response!");

    const resJSON = await response.json();
    alert(`Usunięty user: ${resJSON.id}`);
    console.log(resJSON.id);
  } catch (e) {
    console.log(e);
  }
};
