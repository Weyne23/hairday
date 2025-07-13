import { scheduleCancel } from "../../services/schedules-cancel";
import { schedulesDay } from "./load";

const periods = document.querySelectorAll(".period");

//Gerar evento click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
    //Captura o evento de clique na lista
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")) {
            // Obtém a li pai do item clicado
            const item = event.target.closest("li");// Retorna o item Pai

            //Pega o id do agendamento para remover
            const { id } = item.dataset;
            
            if(id){
                //Confirma se o usuário quer cancelar
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar o agendamento?"
                );

                if (isConfirm){
                    //Faz a requisição para a API para deletar o dado
                    await scheduleCancel({id});
                    schedulesDay();
                }
            }
        }
    })
});