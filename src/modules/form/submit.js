import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clienteName = document.getElementById("client");

//Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual
selectedDate.value = inputToday;

//Definir a data minima como atual
selectedDate.min = inputToday;

form.onsubmit = (event) => {
    event.preventDefault();

    try {
        //Recuperando o nome do cliente
        const name = clienteName.value.trim();

        if(!name) {
            return alert("Informe o nome do cliente!");
        }

        //Recuperar o horário selecionado.
        const hourSelected = document.querySelector(".hour-selected");

        //Verifica se tem um horário selecionado.
        if(!hourSelected) {
            return alert("Selecione a hora.");
        }

        // Recupera somente a hora
        const [hour] = hourSelected.innerHTML.split(":");
        
        //Inserir a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour");

        //Gerar um ID
        const id = new Date().getTime();

        const objHors = {
            id,
            name,
            when
        };
    }catch(error){
        alert("Não foi possível realizar o agendamento.");
        console.log(error);
    }
}