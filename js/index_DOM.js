const table1 = ["1", "2", "3", "4", "5"];

const list = document.querySelector("#list");
const button = document.querySelector("#generatelist");

const createTable = () => {
  table1.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.addEventListener("click", () => {
      li.remove();
    });
    li.append(delButton);
    list.append(li);
  });
};

button.addEventListener("click", createTable);

const form = document.querySelector("#our-form");
const displayData = (event) => {
  event.preventDefault();
  const inputFirstName = document.querySelector("#first-name").value;
  const inputSurname = document.querySelector("#surname").value;
  const inputAge = document.querySelector("#age").value;
  const inputWeight = document.querySelector("#weight").value;
  console.log(
    inputFirstName,
    "|",
    inputSurname,
    "|",
    inputAge,
    "|",
    inputWeight
  );
};

form.addEventListener("submit", displayData);
