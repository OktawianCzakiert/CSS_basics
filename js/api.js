// Zadanie 1 - fetch API - FAKE API Z ENDPOINTAMI https://dummyjson.com/docs/products
// GET
// - utwórz funkcje fetchData która pobiera liste produktów i wypisuje tablice elementów w konsoli

const fetchData = async () => {
  const apiUrl = "https://dummyjson.com/products";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation", error);
  }
};

fetchData();

// Zadanie 2 - fetch API - https://dummyjson.com/docs/products#update
// PUT
// - utwórz funkcje updateData która aktualizuje nazwe produktu i wynik wyswietla w konsoli

const Id = 3;

const updatedProduct = {
  title: "test test",
};
const updateProduct = async (Id, updatedProduct) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${Id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) throw new Error("Something wrong with response!");

    const resJSON = await response.json();
    alert(`Zaktualizowawny produkt: ${resJSON.title}`);
  } catch (e) {
    console.log(e);
  }
};

updateProduct(Id, updatedProduct);

// Zadanie 3 - fetch API - https://dummyjson.com/docs/products#add
// POST
// - utwórz funkcje która tworzy nowy produkt i wyswietla alert z nowo utworzonym produktem dzieki metodzie "alert('')"

const newProduct = {
  title: "Nowy produkt dodany",
};
const addProduct = async (newProduct) => {
  try {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) throw new Error("Something wrong with response!");

    const resJSON = await response.json();
    alert(`Dodany produkt: ${resJSON.title}`);
  } catch (e) {
    console.log(e);
  }
};

addProduct(newProduct);
fetchData();

// Zadanie 4 - fetch API - https://dummyjson.com/docs/products#delete
// DELETE
// - usuń dowolny produkt z zakresu 1-100 i wyswietl usuniety produkt w konsoli

const DeleteId = 55;

const deleteProduct = async (DeleteId) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${DeleteId}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Something wrong with response!");

    const resJSON = await response.json();
    alert(`Usunięty produkt: ${resJSON.id}`);
    console.log(resJSON.id);
  } catch (e) {
    console.log(e);
  }
};

deleteProduct(DeleteId);
