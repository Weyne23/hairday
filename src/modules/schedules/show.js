import dayjs from "dayjs";

// Selecionar as sessões manhã, tarde e noite.
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
    try {
        //limpa as listas
        periodMorning.innerHTML = "";
        periodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        //Renderizar os agendamentos por período.
        dailySchedules.sort((a, b) => { 
                if (dayjs(a.when).isAfter(b.when)) 
                    return 1; 
                else if (dayjs(a.when).isBefore(b.when)) 
                    return -1; 
                else 
                    return 0; 
            })
            .forEach((schedules) => {
                const item = document.createElement("li");
                const time = document.createElement("strong");
                const name = document.createElement("span");

                //Adicionar o ID do agendamento
                item.setAttribute("data-id", schedules.id);

                time.textContent = dayjs(schedules.when).format("HH:mm");
                name.textContent = schedules.name;

                //Criar o item de cancelar o agendamento.
                const cancelIcon = document.createElement("img");
                cancelIcon.classList.add("cancel-icon");
                cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
                cancelIcon.setAttribute("alt", "Cancelar");

                //Adicionar o tempo, nome e ícone no item
                item.append(time, name, cancelIcon);

                //Obtém somente a hora
                const hour = dayjs(schedules.when).hour();
                //Renderiza o agendamento na sessão (manhã, tarde ou noite)
                if(hour <= 12){
                    periodMorning.appendChild(item);
                } else if (hour > 12 && hour <= 18){
                    periodAfternoon.appendChild(item);
                } else {
                    periodNight.appendChild(item);
                }
        });
    } catch (error) {
        alert("Não foi possível exibir os agendamentos.");
        console.log(error);
    }
}