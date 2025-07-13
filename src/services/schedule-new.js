import { apiConfig } from "./api-config";

export async function scheduleNew ({id, name, when}) {
    try {
        console.log(id, name, when)
        console.log(JSON.stringify({ id, name, when }));
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, when }),
        });

        alert("Agendamento criado com sucesso!");
    } catch (error) {
        console.log(error);
        alert("Não foi possível agendar. Tente novamente mais tarde")
    }
}