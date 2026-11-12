"use server";

import { cookies } from "next/headers";

export async function getFuncionarioLista() {
    const cookieStore = await cookies();
    const token = cookieStore.get("@gestao-escolar/token")?.value;

    if (!token){
        return "Erro: Token não encontrado";

    }

    let response: Response;

    try{
        response = await fetch(`${process.env.API_URL}/funcionarios`,{
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            },
            next: { tags: ["pegarListaFuncionarios"] }
        })
    } catch(e){
        console.error(e);
        return "Falha na requisição";
    }

    const data = await response.json();
    return data;
}