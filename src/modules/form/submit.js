import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual
selectedDate.value = inputToday;

//Definir a data minima como atual
selectedDate.min = inputToday;

form.onsubmit = (event) => {
    event.preventDefault();
}